"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

export default function WhatsAppButton() {
  const pathname = usePathname();

  // Create professional pre-configured message based on page
  let message = "";
  const courseMatch = pathname?.match(/^\/courses\/([^/]+)/);

  if (courseMatch && courseMatch[1]) {
    const slug = courseMatch[1];
    const courseName = slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    message = `Hi Vydhra,\n\nI hope you are doing well. I would like to make an enquiry regarding the "${courseName}" course. Could you please share more details about the curriculum, upcoming batch schedules, and enrollment options?\n\nThank you!`;
  } else {
    message = `Hi Vydhra,\n\nI hope you are doing well. I would like to make an enquiry regarding your courses. Could you please share more details about the curriculum, upcoming batch schedules, and enrollment options?\n\nThank you!`;
  }

  const whatsappUrl = `https://wa.me/917980624524?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-[88px] lg:bottom-6 right-6 z-40 rounded-full shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center cursor-pointer"
      aria-label="Chat on WhatsApp"
    >
      <Image
        src="/whatsapp-svg.svg"
        alt="Chat on WhatsApp"
        width={48}
        height={48}
        className="w-12 h-12"
      />
    </a>
  );
}

