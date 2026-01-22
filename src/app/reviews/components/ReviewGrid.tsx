import React from "react";
import ReviewCard from "./ReviewCard";

const reviews = [
  {
    name: "Alex Johnson",
    course: "Advanced UI/UX Masterclass",
    text: "The curriculum was incredibly thorough. I went from knowing nothing to landing a junior role in 3 months! The feedback from mentors was the most valuable part.",
    rating: 5,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCFCuVrmz5d_-2irOoMeZA6k2kNSSIVIyBDwZIJoVpnb9EyH-Xp8XGHLE8xd42NTEImjDfj7-qDR96zLKLn0Amx1ENe5FWvjQ-nAusp2uP278R0dZP3B90Hf_ngo0dph1n176_X8RKtQCIb_elPYBzoOpI-QZ51WKAkLpG7hG8CnLTzzTAcit4_t4BuxWOGdToo3kq65dAaMerLkwko39XDhwlHcuiLlAmt7rW4K4fLgZ6pMyugeL46aGgZlN4cSA1BhWrUB53NZw6X",
    verified: true,
  },
  {
    name: "Sarah Chen",
    course: "Full-stack React Boot Camp",
    text: "I tried several online platforms but DesignEd is different. The projects are actually representative of what you do in a real studio. The React course took me from basic HTML to building complex dashboards. High quality content and great community support.",
    rating: 5,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGKBNAT7zE19M1U5KnWqSuk3rwpPi6EBPTvd_5ZhGR1zfYpqsNcXMoTaOmqTjnncdG4D_DDNaaXAiT858DBnfyVQJYqN7Y8v1Z27yjxjh5cdKIq05XLFHHTWwis0Ylm_EDnQw4GbW_KicC3wKR4oyzB7BgUrKHKtwjXUwGyhfnYDb6d-s2QIh0q3O-iwW8cYODIW3DftV8OOco1swnvnG9PhRKMDrb9rapKy3OAOipKE7fD_zWx2Brs-LYSxDkp_H01eEpZ0TkxgF8",
  },
  {
    name: "Marcus Thorne",
    course: "Logo Design Fundamentals",
    text: "Truly world-class training that focuses on the 'why' and not just the 'how' of brand identity. I've recommended this to my entire creative team.",
    rating: 5,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBix_NoEXKTpA_IhxzxbxRD57MqoFgls-zC7ONJOel71OwFwXgliYC-oQrLxL2r_0MHmXIpOZXnXIqki0bTH-w6ct8ZKBpDnjT7evawGzIq3fNwi7r2j4A8JlA2agKwONmiVwKNhR8jSCy0dG95Cy_z89-JjDnI8iR4PGSfQnJ-OekhrAhgcrk5jBrGQ_cU9ZPGwHLZ0eJYxAykAkHvswgcaCYXGqHM98p_tkS5XoEKoclqyoson7zWZrMjpqfoqwpdGnnCw43-zOwL",
  },
  {
    name: "Elena Rodriguez",
    course: "Product Design Strategy",
    text: "The mentorship aspect is what sets this platform apart. Direct feedback from industry pros is priceless. I finally feel confident talking to stakeholders about business goals.",
    rating: 4.5,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAEmzTW0dZx2mQ7h-BDws39P4cTu93pWrDYbcAyX2QZ3ZeYFPPQFZFceAVOTog-84Ye2wVx_JGtDGEbPr5szvZYQHJmjYIymD4LejvWmPlmw4tgbO7V7pjjSxO-9fVPO8KYlpKA7MrmgdLxqvuriKGIALRPw-XrZhBw2FMHOACkHYlNIreQnpLqzRiS6YEjsEPSqumm0PfdJa8iAgzQI7P4MzHOOmU05jvtnPVT9zfvzr3-idwU7AAaXItS2_IVYSvsoMZ5cXb83HKp",
    verified: true,
  },
  {
    name: "David Kim",
    course: "Interaction Design 101",
    text: "A must-have for anyone serious about design. The level of detail in the case studies is unmatched. I loved how we broke down micro-interactions step-by-step.",
    rating: 5,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD8mUKSs6nh6TRzQW8vsaseaXmRs29zFpYSNrtMdb7ez4NpzKbBKAHv5Q4AQoXAu4x5gTvzrz98_CJwNnnJ7nqJpoGOa7hFeJFiQVH5-8kqEYwBu-q9lMBkTK4hslZLv7W6la3zY6TttvI2VKj5RNT_Q4ahjeGrlblG0wnv0vn5fldjWRGAWDROKLDvdSIEwbCYNOLTNCK-F7OJMJFJy3c8CxiS3WZNfBxv9htcM9Tg51t-3SElKNI3nq9N76zWgMfp-oeVg_Dsprg-",
  },
  {
    name: "Jessica Walsh",
    course: "Motion Graphics for Designers",
    text: "Incredible pacing. I never felt overwhelmed even though the software was new to me. The assets provided for practice are top-tier. Best investment I've made this year for my career growth.",
    rating: 5,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDj62Y_9N4L8sYo0DV55jiXoQZpvvbRyVbCjs8frzfYH3bvAUbkVkNSC3xar25Gc3hBwLIgXE88YfQxg0pmshAL257JZh6xWf7MYTdBmbLnVb3F3oQkW9B1y82xdPPCRQFVqGIsFHT6gnY1q_uF0e-KgXlmYEzlS-0-8GJvNbngJOCmgI_uUgcc7_V8O2Qcz128gJRtS3Sgy7Vf92c1GP1z6ookEsydoHgto_v1uEJDuFep3gvuBvtXwnCDqMH3qoiWdQXYK4njKUpX",
    verified: true,
  },
];

export default function ReviewGrid() {
  return (
    <div className="columns-1 md:columns-2 lg:columns-3 gap-6 py-6">
      {reviews.map((r, idx) => (
        <ReviewCard key={idx} {...r} />
      ))}
    </div>
  );
}
