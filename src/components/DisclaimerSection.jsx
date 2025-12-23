import { motion } from "motion/react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export function DisclaimerSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="
        relative py-16 px-4 sm:px-6 lg:px-8
        bg-gradient-to-b from-[#F8FAFC] to-[#EEF2F7]
        border-t border-black/10
      "
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Decorative line */}
          <div className="h-[2px] w-24 mx-auto mb-6 bg-gradient-to-r from-transparent via-black/40 to-transparent" />

          <motion.h4
            className="mb-4 text-xl font-semibold text-black"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            Disclaimer
          </motion.h4>

          <motion.p
            className="text-sm leading-relaxed text-black/70"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            The information provided on this website is for general informational
            purposes only and does not constitute legal or professional advice.
            Specific advice should be obtained after a detailed consultation
            based on the facts of each case.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
