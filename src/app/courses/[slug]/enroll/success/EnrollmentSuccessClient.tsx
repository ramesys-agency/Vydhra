"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Icon from "@/components/common/Icon";

interface ReceiptData {
  paymentId: string;
  razorpayPaymentId: string;
  amount: number;
  currency?: string;
  currencySymbol?: string;
  discountAmount?: number;
  couponCode?: string | null;
  courseName: string;
  courseImage: string;
  courseCategory: string;
  studentName: string;
  studentEmail: string;
  studentPhone: string;
  studentCountry: string;
  paidAt: string;
  whatsappGroupUrl?: string | null;
}

const FALLBACK_WHATSAPP_URL = process.env.NEXT_PUBLIC_WHATSAPP_GROUP_URL || "https://chat.whatsapp.com/";

export default function EnrollmentSuccessClient({ slug }: { slug: string }) {
  const router = useRouter();
  const [receipt, setReceipt] = useState<ReceiptData | null>(null);
  const [downloading, setDownloading] = useState(false);
  const receiptRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem("enrollmentReceipt");
    if (!stored) {
      router.replace(`/courses/${slug}/enroll`);
      return;
    }
    try {
      setReceipt(JSON.parse(stored));
    } catch {
      router.replace(`/courses/${slug}/enroll`);
    }
  }, [router, slug]);

  const handleDownload = async () => {
    if (!receipt) return;
    setDownloading(true);

    try {
      // Build a printable receipt HTML and trigger browser print-to-PDF
      const printWindow = window.open("", "_blank", "width=800,height=900");
      if (!printWindow) {
        alert("Please allow pop-ups to download the receipt.");
        setDownloading(false);
        return;
      }

      const paidDate = new Date(receipt.paidAt).toLocaleString("en-US", {
        dateStyle: "long",
        timeStyle: "short",
      });

      const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8"/>
  <title>Payment Receipt – Vydhra</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Segoe UI', Arial, sans-serif; background: #fff; color: #111; padding: 40px; }
    .header { display: flex; justify-content: space-between; align-items: center; border-bottom: 3px solid #f97316; padding-bottom: 24px; margin-bottom: 32px; }
    .brand { font-size: 28px; font-weight: 900; color: #f97316; letter-spacing: -1px; }
    .receipt-no { font-size: 12px; color: #666; text-align: right; }
    .receipt-no span { display: block; font-size: 16px; font-weight: 700; color: #111; }
    .success-badge { background: #dcfce7; color: #16a34a; border: 2px solid #16a34a; border-radius: 100px; display: inline-flex; align-items: center; gap: 8px; padding: 8px 20px; font-weight: 700; font-size: 14px; margin-bottom: 28px; }
    h2 { font-size: 22px; font-weight: 800; margin-bottom: 20px; }
    .table { width: 100%; border-collapse: collapse; margin-bottom: 32px; }
    .table td { padding: 12px 16px; border: 1px solid #e5e7eb; font-size: 14px; }
    .table td:first-child { font-weight: 600; color: #666; width: 40%; background: #f9fafb; }
    .amount-row td { font-size: 18px; font-weight: 800; }
    .amount-row td:last-child { color: #f97316; }
    .footer { margin-top: 40px; padding-top: 24px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #999; text-align: center; }
    .footer strong { color: #f97316; }
    @media print { body { padding: 20px; } }
  </style>
</head>
<body>
  <div class="header">
    <div class="brand">VYDHRA</div>
    <div class="receipt-no">
      Payment Receipt<br/>
      <span>#${receipt.razorpayPaymentId}</span>
    </div>
  </div>

  <div class="success-badge">✓ Payment Successful</div>

  <h2>Enrollment Receipt</h2>

  <table class="table">
    <tr><td>Student Name</td><td>${receipt.studentName}</td></tr>
    <tr><td>Email</td><td>${receipt.studentEmail}</td></tr>
    <tr><td>Phone</td><td>${receipt.studentPhone}</td></tr>
    <tr><td>Country</td><td>${receipt.studentCountry}</td></tr>
    <tr><td>Course Enrolled</td><td>${receipt.courseName}</td></tr>
    <tr><td>Category</td><td>${receipt.courseCategory}</td></tr>
    <tr><td>Payment Date</td><td>${paidDate}</td></tr>
    <tr><td>Payment Method</td><td>Razorpay (Online)</td></tr>
    <tr><td>Razorpay Payment ID</td><td>${receipt.razorpayPaymentId}</td></tr>
    ${receipt.couponCode ? `<tr><td>Coupon Applied</td><td>${receipt.couponCode} (–${receipt.currencySymbol ?? "$"}${(receipt.discountAmount ?? 0).toLocaleString("en-US")} off)</td></tr>` : ""}
    <tr class="amount-row"><td>Amount Paid</td><td>${receipt.currencySymbol ?? "$"}${receipt.amount.toLocaleString("en-US")}</td></tr>
  </table>

  <div class="footer">
    <p>Thank you for enrolling with <strong>Vydhra</strong>. Keep this receipt for your records.</p>
    <p style="margin-top:8px">Questions? Email us at <strong>support@vydhra.com</strong></p>
  </div>

  <script>window.onload = function(){ window.print(); };<\/script>
</body>
</html>`;

      printWindow.document.write(html);
      printWindow.document.close();
    } catch (err) {
      console.error("Download error:", err);
    } finally {
      setDownloading(false);
    }
  };

  if (!receipt) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const paidDate = new Date(receipt.paidAt).toLocaleString("en-US", {
    dateStyle: "long",
    timeStyle: "short",
  });

  return (
    <div className="min-h-screen pt-20 pb-20 bg-background relative overflow-hidden">
      {/* Glow bg */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[40%] bg-green-500/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[30%] h-[30%] bg-primary/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        {/* Success hero */}
        <div className="text-center mb-12">
          <div className="w-24 h-24 bg-green-500/15 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
            <div className="w-16 h-16 bg-green-500/25 rounded-full flex items-center justify-center">
              <Icon name="check_circle" size={40} className="text-green-500" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight">
            You&apos;re <span className="text-green-500">Enrolled!</span> 🎉
          </h1>
          <p className="text-muted-foreground text-lg mt-4 max-w-xl mx-auto">
            Welcome to <span className="text-primary font-bold">{receipt.courseName}</span>. Your payment was
            successful and your spot is confirmed!
          </p>
        </div>

        {/* Receipt card */}
        <div ref={receiptRef} className="bg-card border border-border rounded-[2rem] overflow-hidden shadow-2xl mb-8">
          {/* Receipt header */}
          <div className="bg-gradient-to-r from-primary/20 to-orange-500/10 p-8 border-b border-border">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-primary mb-1">Payment Receipt</p>
                <p className="font-mono text-sm text-muted-foreground">{receipt.razorpayPaymentId}</p>
              </div>
              <div className="flex items-center gap-2 bg-green-500/15 text-green-600 dark:text-green-400 px-4 py-2 rounded-full text-sm font-black border border-green-500/30">
                <Icon name="check_circle" size={16} />
                PAID
              </div>
            </div>
          </div>

          {/* Course */}
          <div className="p-8 border-b border-border">
            <div className="flex gap-5 items-center">
              <div className="w-20 h-14 relative rounded-xl overflow-hidden shrink-0">
                <Image src={receipt.courseImage} alt={receipt.courseName} fill className="object-cover" />
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {receipt.courseCategory}
                </span>
                <h3 className="text-xl font-black mt-2">{receipt.courseName}</h3>
              </div>
            </div>
          </div>

          {/* Details grid */}
          <div className="p-8 grid md:grid-cols-2 gap-6">
            {[
              { label: "Student Name", value: receipt.studentName, icon: "person" },
              { label: "Email", value: receipt.studentEmail, icon: "email" },
              { label: "Phone", value: receipt.studentPhone, icon: "phone" },
              { label: "Country", value: receipt.studentCountry, icon: "language" },
              { label: "Payment Date", value: paidDate, icon: "calendar_today" },
              { label: "Payment Method", value: "Razorpay (Online)", icon: "credit_card" },
            ].map((row) => (
              <div key={row.label}>
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1 flex items-center gap-1">
                  <Icon name={row.icon} size={12} className="text-primary" />
                  {row.label}
                </p>
                <p className="font-bold text-sm">{row.value}</p>
              </div>
            ))}
          </div>

          {/* Amount summary */}
          <div className="px-8 pb-8 border-t border-border pt-6">
            {receipt.couponCode && (
              <div className="flex justify-between text-sm mb-3 text-green-500 font-medium">
                <span>Coupon Discount ({receipt.couponCode})</span>
                <span>–{receipt.currencySymbol ?? "$"}{(receipt.discountAmount ?? 0).toLocaleString("en-US")}</span>
              </div>
            )}
            <div className="flex justify-between items-center">
              <span className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Total Paid</span>
              <span className="text-3xl font-black text-primary">{receipt.currencySymbol ?? "$"}{receipt.amount.toLocaleString("en-US")}</span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="grid md:grid-cols-2 gap-4 mb-10">
          {/* Download receipt */}
          <button
            onClick={handleDownload}
            disabled={downloading}
            className="flex items-center justify-center gap-3 bg-card border-2 border-border hover:border-primary py-5 rounded-2xl font-black text-base transition-all hover:scale-[1.02] active:scale-95 group"
          >
            {downloading ? (
              <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin" />
            ) : (
              <Icon name="download" size={20} className="text-primary group-hover:animate-bounce" />
            )}
            {downloading ? "Preparing..." : "Download Receipt"}
          </button>

          {/* WhatsApp group */}
          <a
            href={receipt.whatsappGroupUrl || FALLBACK_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-green-500 text-white py-5 rounded-2xl font-black text-base hover:bg-green-600 transition-all hover:scale-[1.02] active:scale-95 no-underline"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Join WhatsApp Group
          </a>
        </div>

        {/* Thank you note */}
        <div className="bg-card/50 border border-border rounded-3xl p-8 text-center">
          <Icon name="favorite" size={28} className="text-primary mx-auto mb-4" />
          <h3 className="text-xl font-black mb-3">Thank You for Choosing Vydhra!</h3>
          <p className="text-muted-foreground leading-relaxed">
            We&apos;re thrilled to have you on board. A confirmation email has been sent to{" "}
            <span className="text-primary font-bold">{receipt.studentEmail}</span>. Join the
            WhatsApp group above to stay updated on class schedules, resources, and community
            announcements.
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <Link
              href="/"
              className="flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-primary transition-colors no-underline"
            >
              <Icon name="home" size={16} /> Back to Home
            </Link>
            <span className="text-border">|</span>
            <Link
              href="/courses"
              className="flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-primary transition-colors no-underline"
            >
              <Icon name="school" size={16} /> Browse More Courses
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
