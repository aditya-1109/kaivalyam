import { motion } from "motion/react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export function WhyChooseUsSection() {
  const { ref, isVisible } = useScrollAnimation();

  const reasons = [
    "Senior-Advocate–Level Drafting and Representation",
    "Law-Centric and Compliance-Oriented Approach",
    "Integrated Advisory Covering Litigation and Compliance",
    "Personalized Attention to Each Matter",
    "Ethical, Transparent, and Professional Practice",
  ];

  return (
    <section
      id="features"
      ref={ref}
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#F7F9FC] overflow-hidden"
    >
      {/* Subtle Decorative Blobs */}
      <motion.div
        className="absolute top-16 left-0 w-80 h-80 bg-[#0B1F3B]/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-16 right-0 w-96 h-96 bg-[#8B6F3D]/10 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <motion.div
          className="border-b border-[#8B6F3D]/40 pb-4 mb-14"
          initial={{ opacity: 0, x: -40 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-[#0B1F3B]">
            Why Choose Us
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Reasons */}
          <div className="space-y-5">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ x: 6 }}
                className="
                  flex items-start gap-4 p-5
                  bg-white
                  border border-[#0B1F3B]/10
                  border-l-4 border-l-[#8B6F3D]
                  rounded-xl
                  shadow-sm hover:shadow-md
                  transition-all duration-300
                "
              >
                <span className="text-[#8B6F3D] text-lg font-semibold mt-0.5">
                  ✓
                </span>
                <p className="text-[#2B2B2B] leading-relaxed">
                  {reason}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="
              relative h-96 overflow-hidden
              rounded-2xl
              border border-[#0B1F3B]/15
              shadow-md
            "
          >
            <img
              src="bg4.webp"
              alt="Professional Office Workspace"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        </div>

        {/* Bottom Highlight */}
        <motion.p
          className="
            mt-14 max-w-4xl p-6
            bg-[#0B1F3B]
            text-[#F7F9FC]
            border-l-4 border-[#8B6F3D]
            rounded-lg
            leading-relaxed
          "
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          We focus not only on resolving current issues but also on preventing
          future legal and regulatory exposure.
        </motion.p>
      </div>
    </section>
  );
}
