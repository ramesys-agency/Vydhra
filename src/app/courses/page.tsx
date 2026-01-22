import React from "react";
import Navbar from "@/components/layout/Navbar";
import MobileNav from "@/components/layout/MobileNav";
import FilterSidebar from "@/components/courses/FilterSidebar";
import CourseCard from "@/components/courses/CourseCard";
import Newsletter from "@/components/common/Newsletter";
import Footer from "@/components/layout/Footer";

const courses = [
  {
    title: "Webflow Masterclass: From Zero to Pro",
    category: "Web Design",
    description: "Master the art of visual web development with the most powerful tool on the market today.",
    price: "€499,00",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBnXzm2Kf3j9bERb1rtP32C7IcexoCwPcaWiICgT0i5d6zZIsG3_LKf1DvMDxxUYyj2k8qDa4Rdq21XH83F63MqQa4qGCHTcEbxKfxMapyAVNCgK_1qc7L9IJtBVKcVNp4NYpGM32cqy45wyrHl1TLvrrXxL3KpsRxJ6h0dJg6VT5-zH9ZdUQla_8QfQewRIHM4w-30n8phVaxV4rloJWZrEGDK40q6cVTVAOJvIjGzCZDr_4-Y0iHX79-bUHHVcSV3AJgmy7xjptMu",
  },
  {
    title: "Modern JavaScript for Designers",
    category: "Development",
    description: "The essential programming knowledge every modern web designer needs to build interaction.",
    price: "€299,00",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDpcJ4b6A-7mXYKa4F7hQhsQogIkLINCATCB7acHQtekROKTYtPyzb7XHQ_RV1-Oy6TaibejnJZB7AFZE9Lq6WkQ0oiGAJ8QXTq4RtXDQwr6vhTQXpWHmH0DXgz2BnRr_YEwHCJCXf9PWBxtXH8UHuz_pE2PQIXi1oSk9puNcx1UC_hMHdiuEyHT6efc40J2HXo_DQ_0yQsRv0Dl0FJ6b_6Ey1DSSz32PxMeFRq3ka33aiydgxo4umR5Zi5GrrvwntuA4biBmQIYy4I",
  },
  {
    title: "Freelance Web Design Strategy",
    category: "Marketing",
    description: "How to land premium clients, manage projects, and scale your design business to 6-figures.",
    price: "€349,00",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCqhKCx1j8HKWDDFhyANdjH1vcZQeIP388GzFkuJDcJ_Lj6qYc07HvYWno-07IUpb2cyxtKPofyrDBar3-OtiQDFRBgAaT2Cce4_YFAqezWygC6F-BD40T2zbN3I5gDjupwbW1R1mRvb1lJQFJ1s59By1QMLAQTxT7p3560h6himhQ51R7yEaxGqiMeH_SkT-YTTvW9_geSbcb-na6CrpwutGfFP5PvZ0LSy7GGjwAs3RpQic7b5WxtqFZsdPomPNT5f8FYU_7nmdCG",
  },
  {
    title: "SEO for Web Designers",
    category: "Marketing",
    description: "Learn the secrets of search engine optimization to give your clients more value than ever.",
    price: "€199,00",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD8qup8XEWk1-474CN50mOTRbKQrGEWHlupeoFsXRP-6YxMg2FoLSf6LpMXL5bothnH2N1Q4z0ANagM4VV-EdmUCElu0J0Jzfxc9hfbPCuKGR9HjHMIE2ziIed_aP4oDDv3xDBPsHazDlhGpHg1NhhzrI46KDzSaCD7jmhFPl3XgsumLgT9f6U_X_NSDFMuHqc8K6OD2-Ua9SzXkMaQpDSd622j8ExK551CRW7Iebb0FzVKmxy4-jJm08VZSXgrwEpHx3n-2t297jty",
  },
  {
    title: "Advanced Motion & Interactions",
    category: "Web Design",
    description: "Bring your websites to life with complex animations and immersive user experiences.",
    price: "€399,00",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAyWKAI6dMimUp-Z8VY8mw5XLHuNiKEwmbRJYrKs8KmnxMnVa-kgZM22O4UL6FnQBwm2Tf_tyb5ZSXXWYJm6rtuW2LnTSThlBSbQDaQ4al3-5SFQpekLolXFXhBAJrY0NZzp1fuvKnHF6NaXFT4WisuLkRgvY4edjjZY258aaspBpy-491lCkNP6x4OoZJC1QdlHOcmv3NDk0wGDCnF7oHF20Nj86oeWoQg58lqPQgyS_tOyoUu9HxtPlwSliLFhlETeJWOLCwAOBFO",
  },
  {
    title: "React for UI Designers",
    category: "Development",
    description: "Bridging the gap between design systems and code with React and Tailwind CSS.",
    price: "€249,00",
    originalPrice: "€450",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBz6ybDU2MX3zFPbafB27bHwjRW8h9VKOaQKaEQNt5mIGCstHAZb4mezj_yOc6-0OtUz9omYVxsv1TebMdUwHOGTGJ6HoifnjmpBHLo9NzHmYx84GKsgs7Ahah0Umw2kZ8fgRkVI7Icr0UBT8dm_Vy9J5NQRypfPji0dexrBYvNvcMyBx496BNTmlbnoiLNHPYnSUJxkDSfPu4YS5qHcSt-RwA5VgWM43n_wgaeoeSsQkYbYnniTysCJRkV9TBEJtRXFM0nWFxYIC6Z",
  },
];

export default function CoursesPage() {
  return (
    <div className="min-h-screen">
      <main className="max-w-[1440px] mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row gap-12">
          <FilterSidebar />
          <div className="flex-grow">
            <div className="mb-12">
              <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight text-primary leading-none mb-6">
                Wähle deinen <br />
                Weg zum Erfolg
              </h1>
              <p className="text-gray-500 dark:text-gray-400 max-w-2xl text-lg">
                Lerne von Experten, wie du professionelle Webseiten entwirfst,
                strukturierst und veröffentlichst. Unsere Kurse sind praxisnah
                und direkt anwendbar.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {courses.map((course) => (
                <CourseCard key={course.title} {...course} />
              ))}
            </div>
            <Newsletter />
          </div>
        </div>
      </main>
      <Footer />
      <MobileNav />
    </div>
  );
}
