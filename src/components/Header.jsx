import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

    const goWhatsapp = () => {
  const phoneNumber = "+918800937784"; 
  const message = "Hello! I would like to know more about your services.";

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  window.open(whatsappUrl, "_blank");
};

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

  return (
    <header className="sticky top-0 z-20 lg:mt-10 bg-linear-to-l from-black to-[#011226]">
      <section className="flex items-center justify-between w-full px-4 py-1">
        
        {/* Mobile Menu Button */}
        <button
          ref={buttonRef}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="lg:hidden text-white"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* Logo */}
        <div className="flex flex-col">
          <p className="text-[#deae41] text-[22px] lg:text-[40px] font-bold">
            KAIVALYAM
          </p>
          <p className="text-[#deae41] text-[10px] lg:text-[18px] tracking-wide">
            TAX CONSULTING
          </p>
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
        <button onClick={()=> goWhatsapp()} className="bg-[#8B6F3D] text-[#0B1F3B] px-2 py-1 text-sm lg:text-lg lg:px-6 lg:py-3 rounded-lg font-semibold hover:opacity-90 transition">
              Schedule a Consultation
            </button>
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
    </header>
  );
}
