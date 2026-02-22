import { use, useEffect, useRef, useState } from "react";
import { Home, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const [increasing, setIncreasing] = useState(false);
  const dimension = window.innerWidth;

  const goWhatsapp = () => {
    const phoneNumber = "+918800937784";
    const message = "Hello! I would like to know more about your services.";

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (increasing) {

        setScrollY((prev) => {
          if (prev > 100) {
            clearInterval(interval);
            return prev;
          }
          else {
            return prev + 5;
          }
        });
      } else {
        setScrollY((prev) => {
          if (prev < 0) {
            clearInterval(interval);
            return prev;
          }
          else {
            return prev - 5;
          }
        });
      }
    }, 50);

    return () => clearInterval(interval);
  }, [increasing]);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        !buttonRef.current.contains(e.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  console.log(scrollY);

  return (
    <header className="sticky top-0 z-20 lg:mt-10 bg-linear-to-l from-black to-[#011226]">
      <section className="flex items-center justify-between w-full px-4 py-1">

        {/* Mobile Menu Button */}
        <div className="flex flex-row justify-start items-center gap-2">



          {/* Logo */}
          <div className="flex flex-col">
            <p className="text-[#deae41] text-[22px] lg:text-[40px] font-bold">
              KAIVALYAM
            </p>
            <p className="text-[#deae41] text-[10px] lg:text-[18px] tracking-wide">
              TAX CONSULTING
            </p>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex gap-8 text-white font-semibold">
          {[
            ["Home", "#"],
            ["About Us", "#about"],
            ["Services", "#services"],
            ["Features", "#features"],
            ["Approach", "#approaches"],
            ["Contact Us", "#contact"],
          ].map(([label, link]) => (
            <a
              key={label}
              href={link}
              className="hover:text-blue-500 transition-transform hover:scale-105"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        {dimension >= 768 ?
          <button onClick={() => goWhatsapp()} className="bg-[#8B6F3D] z-60 text-[#0B1F3B] px-2 py-1 text-sm lg:text-lg lg:px-6 lg:py-3 rounded-lg font-semibold hover:opacity-90 transition">
            Schedule a Consultation
          </button>
          :
          <button onClick={() => setIncreasing(!increasing)} className=" text-[#0B1F3B] z-60 px-2 py-1 text-sm rounded-lg font-semibold hover:opacity-90 transition">
            <Menu size={20} color="white" />
          </button>
        }

      </section>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            ref={menuRef}
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.25 }}
            className="lg:hidden fixed top-14 left-0 w-[60vw] h-screen bg-white text-black p-6 flex flex-col gap-4 shadow-lg"
          >
            {[
              ["Home", "#"],
              ["About Us", "#about"],
              ["Services", "#services"],
              ["Features", "#features"],
              ["Approach", "#approaches"],
              ["Contact Us", "#contact"],
            ].map(([label, link]) => (
              <a
                key={label}
                href={link}
                onClick={() => setIsMenuOpen(false)}
                className="font-medium hover:text-blue-600"
              >
                {label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>

      <div
        className="fixed inset-0 z-50 overflow-hidden"
        style={{ height: `${scrollY}vh` }}
      >
        {/* Background Image */}
        <img
          src="/bg2.webp"
          alt="Background"
          className="absolute inset-0 w-[100vw] h-[100vh] object-cover scale-105"
        />

        {/* Gradient + Blur Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/75 to-black/90 backdrop-blur-sm" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-6">

          {/* Navigation Links */}
          <div className="flex flex-col items-center space-y-8 text-2xl md:text-3xl font-light tracking-wide">
            {[
              ["Home", "#"],
              ["About Us", "#about"],
              ["Services", "#services"],
              ["Features", "#features"],
              ["Approach", "#approaches"],
              ["Contact Us", "#contact"],
            ].map(([label, link], index) => (
              <a
                key={label}
                href={link}
                onClick={() => setIsMenuOpen(false)}
                className="relative group transition-all duration-300 hover:text-[#C6A85A]"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {label}

                {/* Elegant underline animation */}
                <span className="absolute left-0 -bottom-2 w-0 h-[1px] bg-[#C6A85A] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-24 h-[1px] bg-white/30 my-10"></div>

          {/* CTA Button */}
          <button
            onClick={() => goWhatsapp()}
            className="px-8 py-3 rounded-full bg-[#C6A85A] text-[#0B1F3B] font-semibold tracking-wide text-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
          >
            Schedule a Consultation
          </button>
        </div>
      </div>
    </header>
  );
}
