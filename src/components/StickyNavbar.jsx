import React, { useEffect, useState } from "react";
import { Shield } from "lucide-react";

const StickyNavbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`bg-white fixed top-0 left-0 w-full z-50 shadow-lg border-b border-gray-100 transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Blue Lejhro Logo */}
        <img
  src="/public/images/lejhro_logo_blue.png"
  alt="Lejhro Logo"
  className="h-7 w-auto"
/>

        {/* Let's Talk button */}
        <a
          href="#"
          className="text-blue-600 font-medium hover:underline hover:text-blue-700 transition"
        >
          Let’s Talk →
        </a>
      </div>
    </header>
  );
};

export default StickyNavbar;
