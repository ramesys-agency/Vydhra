"use client";

import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import React, { useState, useEffect } from "react";
import Icon from "@/components/common/Icon";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import ReactFlagsSelect from "react-flags-select";
import { CourseBatch } from "@/types/course";

declare global {
  interface Window {
    Razorpay: any;
  }
}

interface EnrollmentClientProps {
  course: {
    title: string;
    subtitle: string;
    price: string;
    priceINR?: number;
    priceUSD?: number;
    image: string;
    category: string;
    slug: string;
  };
  slug: string;
  batches: CourseBatch[];
}

import { toast } from "sonner";

type Step = "info" | "payment";

interface StudentInfo {
  name: string;
  email: string;
  phone: string;
  country: string;
}

interface CouponResult {
  valid: boolean;
  couponId?: string;
  code?: string;
  discountType?: string;
  discountValue?: number;
  discountAmount?: number;
  finalAmount?: number;
  error?: string;
}

// Helper to get country name from ISO code
const getCountryName = (code: string) => {
  try {
    const regionNames = new Intl.DisplayNames(['en'], { type: 'region' });
    return regionNames.of(code) || code;
  } catch {
    return code;
  }
};

const getCountryCode = (name: string) => {
  const mapping: Record<string, string> = {
    "India": "IN",
    "United States": "US",
    "United Kingdom": "GB",
    "Canada": "CA",
    "Australia": "AU",
    "Germany": "DE",
    "France": "FR",
    "UAE": "AE",
    "Saudi Arabia": "SA",
    "Singapore": "SG",
    "Malaysia": "MY",
    "New Zealand": "NZ",
    "South Africa": "ZA",
    "Nigeria": "NG",
    "Kenya": "KE",
    "Bangladesh": "BD",
    "Pakistan": "PK",
    "Sri Lanka": "LK",
    "Nepal": "NP",
  };
  return mapping[name] || "IN";
};

export default function EnrollmentClient({ course, slug, batches }: EnrollmentClientProps) {
  const router = useRouter();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [step, setStep] = useState<Step>("info");

  // Batch selection
  const activeBatches = batches.filter((b) => b.status === "ACTIVE" || b.status === "UPCOMING");
  const [selectedBatchId, setSelectedBatchId] = useState<string | null>(
    activeBatches.length === 1 ? activeBatches[0].id : null
  );
  const selectedBatch = activeBatches.find((b) => b.id === selectedBatchId) ?? null;

  // Student info
  const [info, setInfo] = useState<StudentInfo>({ name: "", email: "", phone: "", country: "India" });
  const [infoErrors, setInfoErrors] = useState<Partial<StudentInfo>>({});

  // Coupon
  const [coupon, setCoupon] = useState("");
  const [couponResult, setCouponResult] = useState<CouponResult | null>(null);
  const [couponLoading, setCouponLoading] = useState(false);

  // Payment
  const [isProcessing, setIsProcessing] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => { setMounted(true); }, []);

  const logoSrc = mounted && resolvedTheme === "dark" ? "/logo_vydhra_dark.png" : "/logo_vydhra_light.png";

  const currency = "USD";
  const coursePriceNum = course.priceUSD || parseFloat(course.price.replace(/[^0-9.]/g, ""));
  const basePrice = selectedBatch?.priceUSD ?? selectedBatch?.price ?? coursePriceNum;
  const currencySymbol = "$";

  const discountAmount = couponResult?.valid ? (couponResult.discountAmount ?? 0) : 0;
  const platformFee = 0;
  const total = Math.max(0, basePrice - discountAmount + platformFee);

  // --- Validate info form ---
  const [batchError, setBatchError] = useState<string | null>(null);

  const validateInfo = () => {
    const errors: Partial<StudentInfo> = {};
    if (!info.name.trim()) errors.name = "Full name is required";
    if (!info.email.trim()) errors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(info.email)) errors.email = "Enter a valid email";
    if (!info.phone.trim() || info.phone.length < 5) errors.phone = "Valid phone number is required";
    if (!info.country) errors.country = "Please select your country";
    setInfoErrors(errors);

    if (activeBatches.length > 0 && !selectedBatchId) {
      setBatchError("Please select a batch to continue");
      return false;
    }
    setBatchError(null);
    return Object.keys(errors).length === 0;
  };

  const handleContinue = () => {
    if (validateInfo()) setStep("payment");
  };

  // --- Coupon validation ---
  const handleApplyCoupon = async () => {
    if (!coupon.trim()) return;
    setCouponLoading(true);
    setCouponResult(null);
    try {
      const res = await fetch("/api/coupon/validate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: coupon.trim(), amount: basePrice }),
      });
      const data: CouponResult = await res.json();
      if (data.valid) {
        toast.success(`Coupon "${data.code}" applied!`);
      } else {
        toast.error(data.error || "Invalid coupon code");
      }
      setCouponResult(data);
    } catch {
      toast.error("Could not validate coupon. Try again.");
      setCouponResult({ valid: false, error: "Could not validate coupon. Try again." });
    } finally {
      setCouponLoading(false);
    }
  };

  const handleRemoveCoupon = () => {
    setCoupon("");
    setCouponResult(null);
  };

  // --- Payment flow ---
  const handlePayment = async () => {
    setIsProcessing(true);
    try {
      // 1. Create student + enrollment + Razorpay order on backend
      const enrollRes = await fetch("/api/enroll", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: info.name,
          email: info.email,
          phone: info.phone,
          country: info.country,
          courseSlug: slug,
          courseName: course.title,
          amount: total,
          currency: "USD",
          couponCode: couponResult?.valid ? couponResult.code : null,
          batchId: selectedBatchId ?? null,
        }),
      });

      if (!enrollRes.ok) {
        const err = await enrollRes.json();
        throw new Error(err.error || "Failed to create enrollment");
      }

      const enrollData = await enrollRes.json();
      const { orderId, studentId, enrollmentId, courseId, couponId } = enrollData;

      // 2. Open Razorpay Checkout
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: Math.round(total * 100),
        currency: "USD",
        name: "Vydhra",
        description: `Enrollment – ${course.title}`,
        image: "/logo_vydhra_dark.png",
        order_id: orderId,
        prefill: {
          name: info.name,
          email: info.email,
          contact: info.phone,
        },
        notes: { course_title: course.title },
        theme: { color: "#f97316" },
        handler: async function (response: any) {
          // 3. Verify payment on backend
          try {
            const verifyRes = await fetch("/api/payment/verify", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                razorpayOrderId: response.razorpay_order_id,
                razorpayPaymentId: response.razorpay_payment_id,
                razorpaySignature: response.razorpay_signature,
                studentId,
                enrollmentId,
                courseId,
                couponId: couponId ?? null,
                amount: total,
                currency: "USD",
              }),
            });

            if (!verifyRes.ok) {
              const err = await verifyRes.json();
              throw new Error(err.error || "Payment verification failed");
            }

            const receipt = await verifyRes.json();
            toast.success("Payment verified successfully!");

            // 4. Store receipt in sessionStorage and redirect to success page
            sessionStorage.setItem(
              "enrollmentReceipt",
              JSON.stringify({
                ...receipt,
                courseName: course.title,
                courseImage: course.image,
                courseCategory: course.category,
                amount: total,
                discountAmount,
                couponCode: couponResult?.valid ? couponResult.code : null,
                studentName: info.name,
                studentEmail: info.email,
                studentPhone: info.phone,
                studentCountry: info.country,
              })
            );

            router.push(`/courses/${slug}/enroll/success`);
          } catch (verifyError: any) {
            console.error("Verification Error:", verifyError);
            toast.error(`Verification failed: ${verifyError.message}`);
            setIsProcessing(false);
          }
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.on("payment.failed", function (response: any) {
        console.error("Razorpay payment.failed:", JSON.stringify(response, null, 2));
        const reason =
          response?.error?.description ||
          response?.error?.reason ||
          response?.error?.code ||
          "Unknown error";
        toast.error(`Payment Failed: ${reason}`);
        setIsProcessing(false);
      });
      rzp.open();
    } catch (error: any) {
      console.error("Payment Error:", error);
      toast.error(error.message || "Something went wrong. Please try again.");
      setIsProcessing(false);
    }
  };

  const inputClass = (hasError?: string) =>
    `w-full bg-background/60 border rounded-2xl px-5 py-4 outline-none transition-all font-medium text-sm ${
      hasError ? "border-red-500 focus:border-red-500" : "border-border focus:border-primary"
    }`;

  return (
    <div className="min-h-screen pt-24 pb-20 bg-background relative overflow-hidden">
      <Script id="razorpay-checkout-js" src="https://checkout.razorpay.com/v1/checkout.js" />

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-10">
          <Link
            href={`/courses/${slug}`}
            className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 font-bold uppercase tracking-widest text-xs no-underline"
          >
            <Icon name="arrow_back" size={16} />
            Back to Course
          </Link>
          <h1 className="text-4xl md:text-5xl font-black mt-6 tracking-tight">
            Complete Your <span className="text-primary">Enrollment</span>
          </h1>
          <p className="text-muted-foreground mt-2 text-lg">
            Secure your spot in {course.title} and start your journey.
          </p>
        </div>

        {/* Step indicator */}
        <div className="flex items-center gap-3 mb-10">
          {(["info", "payment"] as Step[]).map((s, i) => (
            <React.Fragment key={s}>
              <div
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
                  step === s
                    ? "bg-primary text-white shadow-lg shadow-primary/30"
                    : step === "payment" && s === "info"
                    ? "bg-green-500 text-white"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {step === "payment" && s === "info" ? (
                  <Icon name="check_circle" size={14} />
                ) : (
                  <span>{i + 1}</span>
                )}
                {s === "info" ? "Your Details" : "Payment"}
              </div>
              {i === 0 && (
                <div className={`flex-1 h-px max-w-[60px] transition-all ${step === "payment" ? "bg-primary" : "bg-border"}`} />
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left column */}
          <div className="lg:col-span-7 space-y-8">
            {/* Course summary card */}
            <div className="bg-card/50 backdrop-blur-xl border border-border rounded-3xl p-6 flex gap-6 items-center">
              <div className="w-24 h-16 relative rounded-xl overflow-hidden shrink-0 shadow-lg">
                <Image src={course.image} alt={course.title} fill className="object-cover" />
              </div>
              <div>
                <span className="text-primary font-bold uppercase tracking-widest text-[10px] bg-primary/10 px-3 py-1 rounded-full">
                  {course.category}
                </span>
                <h3 className="text-lg font-bold mt-2">{course.title}</h3>
                <p className="text-muted-foreground text-xs mt-1">{course.subtitle}</p>
              </div>
            </div>

            {/* STEP 1: Student info form */}
            {step === "info" && (
              <div className="bg-card/50 backdrop-blur-xl border border-border rounded-3xl p-8 space-y-5">
                <h4 className="text-xl font-bold flex items-center gap-2">
                  <Icon name="person" className="text-primary" /> Your Details
                </h4>

                {/* Batch selector */}
                {activeBatches.length > 0 && (
                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground block">
                      Select Batch *
                    </label>
                    <div className="grid gap-3">
                      {activeBatches.map((batch) => {
                        const batchPrice = batch.priceUSD
                          ? `$${batch.priceUSD}`
                          : batch.price
                          ? `$${batch.price}`
                          : course.priceUSD
                          ? `$${course.priceUSD}`
                          : course.price;
                        const seatsLeft =
                          batch.maxSeats != null
                            ? batch.maxSeats - (batch.enrollmentCount ?? 0)
                            : null;
                        const isFull = seatsLeft !== null && seatsLeft <= 0;
                        const isSelected = selectedBatchId === batch.id;

                        return (
                          <button
                            key={batch.id}
                            type="button"
                            disabled={isFull}
                            onClick={() => { setSelectedBatchId(batch.id); setBatchError(null); }}
                            className={`w-full text-left flex items-center justify-between px-5 py-4 rounded-2xl border-2 transition-all cursor-pointer ${
                              isFull
                                ? "opacity-50 cursor-not-allowed border-border"
                                : isSelected
                                ? "border-primary bg-primary/5"
                                : "border-border hover:border-primary/50"
                            }`}
                          >
                            <div className="space-y-0.5">
                              <div className="flex items-center gap-2">
                                <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${isSelected ? "border-primary" : "border-muted-foreground/40"}`}>
                                  {isSelected && <span className="w-2 h-2 rounded-full bg-primary block" />}
                                </span>
                                <p className="font-bold text-sm">{batch.name}</p>
                              </div>
                              <p className="text-xs text-muted-foreground pl-6">
                                {new Date(batch.startDate).toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" })}
                                {" → "}
                                {new Date(batch.endDate).toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" })}
                                {seatsLeft !== null && (
                                  <span className={`ml-2 font-bold ${isFull ? "text-red-500" : seatsLeft <= 5 ? "text-orange-500" : "text-muted-foreground"}`}>
                                    · {isFull ? "Full" : `${seatsLeft} seat${seatsLeft !== 1 ? "s" : ""} left`}
                                  </span>
                                )}
                              </p>
                            </div>
                            <span className="font-black text-sm shrink-0">{batchPrice}</span>
                          </button>
                        );
                      })}
                    </div>
                    {batchError && (
                      <p className="text-red-500 text-xs flex items-center gap-1 font-medium">
                        <Icon name="error" size={14} /> {batchError}
                      </p>
                    )}
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2 block">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className={inputClass(infoErrors.name)}
                      value={info.name}
                      onChange={(e) => setInfo({ ...info, name: e.target.value })}
                    />
                    {infoErrors.name && <p className="text-red-500 text-xs mt-1">{infoErrors.name}</p>}
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2 block">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className={inputClass(infoErrors.email)}
                      value={info.email}
                      onChange={(e) => setInfo({ ...info, email: e.target.value })}
                    />
                    {infoErrors.email && <p className="text-red-500 text-xs mt-1">{infoErrors.email}</p>}
                  </div>

                  <div className="md:col-span-1">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2 block">
                      Phone Number *
                    </label>
                    <div className={`phone-input-container ${infoErrors.phone ? 'has-error' : ''}`}>
                      <PhoneInput
                        country={getCountryCode(info.country).toLowerCase()}
                        value={info.phone}
                        onChange={(phone, countryData: any) => {
                          setInfo({ 
                            ...info, 
                            phone: `+${phone}`,
                            country: getCountryName(countryData.countryCode?.toUpperCase() || "IN")
                          });
                        }}
                        containerClass="!w-full"
                        inputClass={`!w-full !bg-background/60 !border !rounded-2xl !pl-20 !pr-5 !py-4 !h-[54px] !outline-none !transition-all !font-medium !text-sm ${
                          infoErrors.phone ? "!border-red-500" : "!border-border focus:!border-primary"
                        }`}
                        buttonClass={`!bg-transparent !border-none !rounded-l-2xl !px-2 hover:!bg-primary/5`}
                        dropdownClass="!bg-background !border-border !rounded-xl !shadow-2xl !text-foreground"
                        searchClass="!bg-background !text-foreground !border-border"
                        enableSearch
                      />
                    </div>
                    {infoErrors.phone && <p className="text-red-500 text-xs mt-1">{infoErrors.phone}</p>}
                  </div>

                  <div className="md:col-span-1">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2 block">
                      Country *
                    </label>
                    <div className={`flags-select-container ${infoErrors.country ? 'has-error' : ''}`}>
                      <ReactFlagsSelect
                        selected={getCountryCode(info.country)}
                        onSelect={(code) => setInfo({ ...info, country: getCountryName(code) })}
                        searchable
                        className={`!w-full !pb-0 ${
                          infoErrors.country ? "is-invalid" : ""
                        }`}
                        selectButtonClassName={`!w-full !bg-background/60 !border !rounded-2xl !px-5 !py-4 !h-[54px] !flex !items-center !outline-none !transition-all !font-medium !text-sm ${
                          infoErrors.country ? "!border-red-500" : "!border-border focus:!border-primary"
                        }`}
                      />
                    </div>
                    {infoErrors.country && <p className="text-red-500 text-xs mt-1">{infoErrors.country}</p>}
                  </div>

                  <style jsx global>{`
                    .phone-input-container .react-tel-input .form-control {
                      height: 54px !important;
                      background: transparent !important;
                    }
                    .phone-input-container .react-tel-input .flag-dropdown {
                      background: transparent !important;
                      border: none !important;
                      border-radius: 1rem 0 0 1rem !important;
                      width: 70px !important;
                    }
                    .phone-input-container .react-tel-input .selected-flag {
                      padding-left: 12px !important;
                      width: 100% !important;
                      border-radius: 1rem 0 0 1rem !important;
                    }
                    .phone-input-container .react-tel-input .selected-flag:hover,
                    .phone-input-container .react-tel-input .selected-flag:focus {
                      background-color: rgba(255, 107, 0, 0.05) !important;
                    }
                    
                    /* Phone Input Dropdown */
                    .react-tel-input .country-list {
                      background-color: var(--background) !important;
                      color: var(--foreground) !important;
                      border: 1px solid var(--border) !important;
                      border-radius: 1rem !important;
                      margin-top: 8px !important;
                      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04) !important;
                    }
                    .dark .react-tel-input .country-list {
                      background-color: #18181b !important;
                      border-color: rgba(255, 255, 255, 0.1) !important;
                    }
                    .react-tel-input .country-list .country:hover {
                      background-color: var(--muted) !important;
                    }
                    .dark .react-tel-input .country-list .country:hover {
                      background-color: rgba(255, 255, 255, 0.05) !important;
                    }
                    .react-tel-input .country-list .country.highlight {
                      background-color: var(--muted) !important;
                    }
                    .dark .react-tel-input .country-list .country.highlight {
                      background-color: rgba(255, 255, 255, 0.1) !important;
                    }

                    /* Search Box inside Phone Input */
                    .react-tel-input .country-list .search {
                      background-color: transparent !important;
                      padding: 12px !important;
                      border-bottom: 1px solid var(--border) !important;
                    }
                    .react-tel-input .country-list .search-box {
                      width: 100% !important;
                      background-color: var(--muted) !important;
                      border: 1px solid var(--border) !important;
                      border-radius: 0.75rem !important;
                      padding: 10px 12px !important;
                      margin: 0 !important;
                      color: var(--foreground) !important;
                    }
                    .dark .react-tel-input .country-list .search-box {
                      background-color: rgba(255, 255, 255, 0.05) !important;
                    }

                    /* Flags Select Styling */
                    .flags-select-container [class*="ReactFlagsSelect-module_selectOptions"] {
                      background-color: var(--background) !important;
                      color: var(--foreground) !important;
                      border: 1px solid var(--border) !important;
                      border-radius: 1rem !important;
                      margin-top: 8px !important;
                      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04) !important;
                    }
                    .dark .flags-select-container [class*="ReactFlagsSelect-module_selectOptions"] {
                      background-color: #18181b !important;
                      border-color: rgba(255, 255, 255, 0.1) !important;
                    }
                    .flags-select-container [class*="ReactFlagsSelect-module_filterBox"] {
                      background-color: var(--muted) !important;
                      border: 1px solid var(--border) !important;
                      border-radius: 0.75rem !important;
                      padding: 10px 12px !important;
                      color: var(--foreground) !important;
                    }
                    .dark .flags-select-container [class*="ReactFlagsSelect-module_filterBox"] {
                      background-color: rgba(255, 255, 255, 0.05) !important;
                    }
                    .flags-select-container [class*="ReactFlagsSelect-module_label"] {
                      color: var(--foreground) !important;
                    }
                  `}</style>
                </div>

                <button
                  onClick={handleContinue}
                  className="w-full py-5 bg-primary text-white rounded-2xl font-black text-lg hover:bg-orange-600 hover:scale-[1.01] active:scale-95 transition-all shadow-xl shadow-primary/30 flex items-center justify-center gap-2 cursor-pointer"
                >
                  Continue to Payment <Icon name="arrow_forward" size={20} />
                </button>
              </div>
            )}

            {/* STEP 2: Coupon */}
            {step === "payment" && (
              <div className="bg-card/50 backdrop-blur-xl border border-border rounded-3xl p-8">
                <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Icon name="local_offer" className="text-primary" /> Have a coupon code?
                </h4>

                {couponResult?.valid ? (
                  <div className="flex items-center justify-between bg-green-500/10 border border-green-500/30 rounded-2xl px-5 py-4">
                    <div className="flex items-center gap-2 text-green-500 font-bold">
                      <Icon name="check_circle" size={18} />
                      <span>{couponResult.code} — {couponResult.discountType === "PERCENTAGE" ? `${couponResult.discountValue}% OFF` : `$${couponResult.discountValue} OFF`}</span>
                    </div>
                    <button onClick={handleRemoveCoupon} className="text-muted-foreground hover:text-red-500 transition-colors cursor-pointer">
                      <Icon name="close" size={18} />
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="flex gap-3">
                      <input
                        type="text"
                        placeholder="Enter coupon code"
                        className="flex-1 bg-background/50 border border-border rounded-2xl px-5 py-4 outline-none focus:border-primary transition-all font-medium text-sm uppercase"
                        value={coupon}
                        onChange={(e) => setCoupon(e.target.value.toUpperCase())}
                        onKeyDown={(e) => e.key === "Enter" && handleApplyCoupon()}
                      />
                      <button
                        onClick={handleApplyCoupon}
                        disabled={couponLoading || !coupon.trim()}
                        className="bg-foreground text-background px-8 py-4 rounded-2xl font-bold hover:bg-primary hover:text-white transition-all active:scale-95 whitespace-nowrap disabled:opacity-50 cursor-pointer"
                      >
                        {couponLoading ? "..." : "Apply"}
                      </button>
                    </div>
                    {couponResult?.valid === false && (
                      <p className="text-red-500 text-sm mt-3 flex items-center gap-1 font-medium">
                        <Icon name="error" size={16} /> {couponResult.error}
                      </p>
                    )}
                  </>
                )}
              </div>
            )}

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: "security", label: "SSL Secure" },
                { icon: "verified_user", label: "Money Back" },
                { icon: "support_agent", label: "24/7 Support" },
              ].map((b) => (
                <div key={b.label} className="flex items-center gap-2 text-muted-foreground">
                  <Icon name={b.icon} className="text-primary" size={20} />
                  <span className="text-xs font-bold uppercase tracking-wider">{b.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column: Order summary */}
          <div className="lg:col-span-5">
            <div className="bg-card border border-border rounded-[2.5rem] p-8 shadow-2xl sticky top-28 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16" />
              <h4 className="text-2xl font-bold mb-8 relative z-10">Order Summary</h4>

              <div className="space-y-4 relative z-10">
                {selectedBatch && (
                  <div className="bg-muted/50 rounded-2xl px-4 py-3 space-y-0.5 mb-2">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Selected Batch</p>
                    <p className="font-bold text-sm">{selectedBatch.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {new Date(selectedBatch.startDate).toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" })}
                      {" – "}
                      {new Date(selectedBatch.endDate).toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" })}
                    </p>
                  </div>
                )}
                <div className="flex justify-between text-muted-foreground">
                  <span className="font-medium">Original Price</span>
                  <span className="font-bold">{currencySymbol}{basePrice.toLocaleString("en-US")}</span>
                </div>

                {couponResult?.valid && (
                  <div className="flex justify-between text-green-500">
                    <span className="font-medium">Coupon Discount</span>
                    <span className="font-bold">-{currencySymbol}{discountAmount.toLocaleString("en-US")}</span>
                  </div>
                )}

                <div className="h-px bg-border my-4" />

                <div className="flex justify-between items-end mb-8">
                  <div>
                    <p className="text-xs text-muted-foreground font-bold uppercase tracking-widest mb-1">Total Amount</p>
                    <p className="text-5xl font-black">{currencySymbol}{total.toLocaleString("en-US")}</p>
                  </div>
                  <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-black animate-pulse">
                    BEST VALUE
                  </div>
                </div>

                {/* Student info summary (step 2) */}
                {step === "payment" && (
                  <div className="bg-muted/50 rounded-2xl p-4 mb-4 space-y-1">
                    <div className="flex justify-between items-center">
                      <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Enrolling as</p>
                      <button onClick={() => setStep("info")} className="text-primary text-xs font-bold hover:underline cursor-pointer">Edit</button>
                    </div>
                    <p className="font-bold">{info.name}</p>
                    <p className="text-sm text-muted-foreground">{info.email}</p>
                    <p className="text-sm text-muted-foreground">{info.phone} · {info.country}</p>
                  </div>
                )}

                <button
                  onClick={step === "info" ? handleContinue : handlePayment}
                  disabled={isProcessing}
                  className={`w-full py-6 rounded-2xl font-black text-xl flex items-center justify-center gap-3 transition-all shadow-2xl cursor-pointer ${
                    isProcessing
                      ? "bg-muted text-muted-foreground cursor-not-allowed"
                      : "bg-primary text-white hover:bg-orange-600 hover:scale-[1.02] active:scale-95 shadow-orange-500/40"
                  }`}
                >
                  {isProcessing ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Processing...
                    </>
                  ) : step === "info" ? (
                    <>
                      <Icon name="arrow_forward" size={20} /> Continue
                    </>
                  ) : (
                    <>
                      <Icon name="lock" size={20} /> PAY {currencySymbol}{total.toLocaleString("en-US")}
                    </>
                  )}
                </button>

                <p className="text-center text-[10px] text-muted-foreground mt-4 font-bold uppercase tracking-widest leading-relaxed">
                  By proceeding, you agree to our{" "}
                  <Link href="/terms" className="text-primary hover:underline">Terms</Link>{" "}
                  &{" "}
                  <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-28 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4">Common Questions</h2>
            <p className="text-muted-foreground">Everything you need to know about enrollment and payment.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-card/30 backdrop-blur-md border border-border rounded-3xl overflow-hidden transition-all duration-300 cursor-pointer ${
                  openFaqIndex === index ? "border-primary/50 ring-1 ring-primary/20" : "hover:border-primary/30"
                }`}
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full text-left p-8 flex items-center justify-between group cursor-pointer"
                >
                  <h3 className={`text-lg font-bold transition-colors pr-8 ${openFaqIndex === index ? "text-primary" : "group-hover:text-primary"}`}>
                    {faq.question}
                  </h3>
                  <div className={`w-10 h-10 rounded-full bg-muted flex items-center justify-center transition-transform duration-500 ${openFaqIndex === index ? "rotate-180 bg-primary/10 text-primary" : ""}`}>
                    <Icon name="expand_more" size={20} />
                  </div>
                </button>
                <div className={`grid transition-all duration-500 ease-in-out ${openFaqIndex === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <div className="px-8 pb-8 text-muted-foreground leading-relaxed font-medium">
                      <div className="pt-6 border-t border-border">{faq.answer}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const faqs = [
  { question: "When will I get access to the course?", answer: "Instantly! Once your payment is processed, you'll receive an email with your login credentials and immediate access to the learning dashboard and community." },
  { question: "Is my payment secure?", answer: "Yes. We use Razorpay with industry-standard encryption to ensure your transaction details are 100% protected." },
  { question: "What is your refund policy?", answer: "We offer a 14-day no-questions-asked money-back guarantee. Email us and we'll refund the full amount." },
  { question: "Do I get a certificate after completion?", answer: "Yes, every Vydhra bootcamp includes an ISO-certified digital certificate you can add to LinkedIn and your resume." },
  { question: "Can I pay in installments?", answer: "Currently we only offer one-time payments. EMI options are coming for future cohorts." },
];
