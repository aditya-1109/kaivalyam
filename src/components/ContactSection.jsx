import { MapPin, Clock, Mail, Phone } from "lucide-react";
import { motion } from "motion/react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export function ContactSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0B1F3B] via-[#0E264A] to-[#08162B] text-white overflow-hidden"
    >
      {/* Background Accents */}
      <motion.div
        className="absolute -top-24 -left-24 w-96 h-96 bg-[#8B6F3D]/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-[#8B6F3D]/10 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2] }}
        transition={{ duration: 14, repeat: Infinity }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-sm tracking-widest uppercase text-[#8B6F3D] mb-3">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold">
            Contact Kaivalyam Tax Consulting
          </h2>
          <div className="mt-6 h-[3px] w-24 mx-auto bg-gradient-to-r from-[#8B6F3D] to-transparent" />
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {/* Address */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -6 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all"
          >
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-full bg-[#8B6F3D]/20 flex items-center justify-center">
                <MapPin className="text-[#8B6F3D]" size={22} />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Office Address</h4>
                <p className="text-white/80 leading-relaxed">
                  4/35 First Floor, Bazar Gali,<br />
                  Vishwas Nagar, Shahdara,<br />
                  Delhi – 110032
                </p>
              </div>
            </div>
          </motion.div>

          {/* Office Hours */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
            whileHover={{ y: -6 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all"
          >
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-full bg-[#8B6F3D]/20 flex items-center justify-center">
                <Clock className="text-[#8B6F3D]" size={22} />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Office Hours</h4>
                <p className="text-white/80">
                  Monday to Saturday<br />
                  10:30 AM – 6:30 PM
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Callout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-20 text-center"
        >
          <p className="inline-block px-8 py-4 bg-gradient-to-r from-[#8B6F3D] to-[#A98A52] text-[#0B1F3B] font-semibold rounded-full shadow-xl">
            Professional advice. Legally sound. Business-focused.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
