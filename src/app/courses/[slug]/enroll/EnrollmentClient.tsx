"use client";

import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import React, { useState } from "react";
import Icon from "@/components/common/Icon";

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
    image: string;
    category: string;
  };
  slug: string;
}

export default function EnrollmentClient({ course, slug }: EnrollmentClientProps) {
  const [coupon, setCoupon] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Parse price string to number (e.g., "$499.00" -> 499)
  const basePrice = parseFloat(course.price.replace(/[^0-9.]/g, ""));
  const currencySymbol = course.price.replace(/[0-9.]/g, "").trim() || "$";
  const currencyCode = currencySymbol === "$" ? "USD" : "INR";

  const discount = appliedCoupon ? basePrice * 0.1 : 0; // 10% discount for any "valid" coupon
  const platformFee = 5.0;
  const total = basePrice - discount + platformFee;

  const handleApplyCoupon = () => {
    if (coupon.trim().toUpperCase() === "VYDHRA10") {
      setAppliedCoupon("VYDHRA10");
    } else {
      alert("Invalid coupon code. Try VYDHRA10 for 10% off!");
    }
  };

  const handlePayment = async () => {
    setIsProcessing(true);
    
    try {
      // 1. Create order on server
      const response = await fetch("/api/razorpay/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: total,
          currency: currencyCode,
          receipt: `rcpt_${Math.random().toString(36).substring(7)}`,
        }),
      });

      if (!response.ok) throw new Error("Failed to create order");
      
      const order = await response.json();

      // 2. Open Razorpay Checkout
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: "Vydhra",
        description: `Enrollment for ${course.title}`,
        image: "/logo_vydhra.png", // Use project logo
        order_id: order.id,
        handler: function (response: any) {
          alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
          // Redirect to success page or dashboard
          setIsProcessing(false);
        },
        prefill: {
          name: "",
          email: "",
          contact: "",
        },
        notes: {
          course_title: course.title,
        },
        theme: {
          color: "#ff6b00", // Vydhra primary color
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.on('payment.failed', function (response: any){
        alert(`Payment Failed: ${response.error.description}`);
        setIsProcessing(false);
      });
      rzp.open();

    } catch (error) {
      console.error("Payment Error:", error);
      alert("Something went wrong with the payment. Please try again.");
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-20 bg-background relative overflow-hidden">
      <Script
        id="razorpay-checkout-js"
        src="https://checkout.razorpay.com/v1/checkout.js"
      />
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="mb-12">
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
            Secure your spot in the {course.title} and start your journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Course Details & Coupon */}
          <div className="lg:col-span-7 space-y-8">
            {/* Course Summary Card */}
            <div className="bg-card/50 backdrop-blur-xl border border-border rounded-3xl p-8 flex flex-col md:flex-row gap-8 items-center hover:shadow-2xl transition-all duration-500 group">
              <div className="w-full md:w-48 h-32 relative rounded-2xl overflow-hidden shadow-lg group-hover:scale-105 transition-transform duration-500">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <span className="text-primary font-bold uppercase tracking-widest text-[10px] bg-primary/10 px-3 py-1 rounded-full">
                  {course.category}
                </span>
                <h3 className="text-2xl font-bold mt-3 group-hover:text-primary transition-colors">
                  {course.title}
                </h3>
                <p className="text-muted-foreground text-sm mt-1">
                  {course.subtitle}
                </p>
              </div>
            </div>

            {/* Coupon Code Section */}
            <div className="bg-card/50 backdrop-blur-xl border border-border rounded-3xl p-8">
              <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Icon name="local_offer" className="text-primary" />
                Have a coupon code?
              </h4>
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Enter coupon (e.g. VYDHRA10)"
                  className="flex-1 bg-background/50 border border-border rounded-2xl px-6 py-4 outline-none focus:border-primary transition-all font-medium"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                />
                <button
                  onClick={handleApplyCoupon}
                  className="bg-foreground text-background px-8 py-4 rounded-2xl font-bold hover:bg-primary hover:text-white transition-all active:scale-95 whitespace-nowrap"
                >
                  Apply
                </button>
              </div>
              {appliedCoupon && (
                <div className="mt-4 flex items-center gap-2 text-green-500 font-bold text-sm bg-green-500/10 w-fit px-4 py-2 rounded-full animate-bounce">
                  <Icon name="check_circle" size={16} />
                  Coupon {appliedCoupon} applied! (10% OFF)
                </div>
              )}
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Icon name="security" className="text-primary" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  Secure SSL
                </span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Icon name="verified_user" className="text-primary" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  Money Back
                </span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Icon name="support_agent" className="text-primary" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  24/7 Support
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Order Summary */}
          <div className="lg:col-span-5">
            <div className="bg-card border border-border rounded-[2.5rem] p-10 shadow-2xl relative overflow-hidden sticky top-28">
              {/* Glassmorphic overlay */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
              
              <h4 className="text-2xl font-bold mb-8 relative z-10">Order Summary</h4>
              
              <div className="space-y-5 relative z-10">
                <div className="flex justify-between items-center text-muted-foreground">
                  <span className="font-medium">Original Price</span>
                  <span className="font-bold">{course.price}</span>
                </div>
                
                {appliedCoupon && (
                  <div className="flex justify-between items-center text-green-500">
                    <span className="font-medium">Coupon Discount (10%)</span>
                    <span className="font-bold">-{currencySymbol}{discount.toFixed(2)}</span>
                  </div>
                )}
                
                <div className="flex justify-between items-center text-muted-foreground">
                  <span className="font-medium">Platform Fee</span>
                  <span className="font-bold">{currencySymbol}{platformFee.toFixed(2)}</span>
                </div>
                
                <div className="h-px bg-border my-6"></div>
                
                <div className="flex justify-between items-end mb-10">
                  <div>
                    <p className="text-sm text-muted-foreground font-bold uppercase tracking-widest mb-1">Total Amount</p>
                    <p className="text-5xl font-black">{currencySymbol}{total.toFixed(2)}</p>
                  </div>
                  <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-black mb-2 animate-pulse">
                    BEST VALUE
                  </div>
                </div>

                <button
                  onClick={handlePayment}
                  disabled={isProcessing}
                  className={`w-full py-6 rounded-2xl font-black text-xl flex items-center justify-center gap-3 transition-all transform shadow-2xl ${
                    isProcessing 
                    ? "bg-muted text-muted-foreground cursor-not-allowed" 
                    : "bg-primary text-white hover:bg-orange-600 hover:scale-[1.02] active:scale-95 shadow-orange-500/40"
                  }`}
                >
                  {isProcessing ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      <Icon name="lock" size={20} />
                      BUY NOW
                    </>
                  )}
                </button>
                
                <p className="text-center text-[10px] text-muted-foreground mt-6 font-bold uppercase tracking-widest leading-relaxed">
                  By clicking buy now, you agree to our <br/>
                  <Link href="/terms" className="text-primary hover:underline">Terms of Service</Link> and <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-32 max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4">Common Questions</h2>
            <p className="text-muted-foreground">Everything you need to know about your enrollment and payment.</p>
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
                  <h3 className={`text-lg font-bold transition-colors pr-8 ${
                    openFaqIndex === index ? "text-primary" : "group-hover:text-primary"
                  }`}>
                    {faq.question}
                  </h3>
                  <div className={`w-10 h-10 rounded-full bg-muted flex items-center justify-center transition-transform duration-500 ${
                    openFaqIndex === index ? "rotate-180 bg-primary/10 text-primary" : ""
                  }`}>
                    <Icon name="expand_more" size={20} />
                  </div>
                </button>
                
                <div className={`grid transition-all duration-500 ease-in-out ${
                  openFaqIndex === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}>
                  <div className="overflow-hidden">
                    <div className="px-8 pb-8 text-muted-foreground leading-relaxed font-medium">
                      <div className="pt-6 border-t border-border">
                        {faq.answer}
                      </div>
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
  {
    question: "When will I get access to the course?",
    answer: "Instantly! Once your payment is successfully processed, you will receive an email with your login credentials and immediate access to the learning dashboard and community."
  },
  {
    question: "Is my payment secure?",
    answer: "Yes, absolutely. We use industry-standard encryption and secure payment gateways like Razorpay to ensure your transaction details are 100% protected."
  },
  {
    question: "What is your refund policy?",
    answer: "We offer a 14-day no-questions-asked money-back guarantee. If you're not satisfied with the course for any reason, just send us an email and we'll refund your full amount."
  },
  {
    question: "Do I get a certificate after completion?",
    answer: "Yes, every Vydhra bootcamp includes an ISO-certified digital certificate of completion that you can add to your LinkedIn profile and resume."
  },
  {
    question: "Can I pay in installments?",
    answer: "Currently, we only offer one-time payments for our bootcamps to keep the process simple and focused on learning. However, we are working on EMI options for future cohorts."
  }
];
