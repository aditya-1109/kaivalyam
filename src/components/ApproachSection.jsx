import { motion } from "motion/react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export function ApproachSection() {
  const { ref, isVisible } = useScrollAnimation();

  const steps = [
    {
      title: "Business & Legal Assessment",
      desc: "We begin by understanding the client’s commercial structure, transactions, and legal standing."
    },
    {
      title: "Risk Identification",
      desc: "Tax exposure, regulatory gaps, and compliance vulnerabilities are identified with precision."
    },
    {
      title: "Statutory Strategy",
      desc: "Solutions are designed strictly in line with statutory provisions and judicial precedents."
    },
    {
      title: "Execution & Representation",
      desc: "Drafting, filings, replies, and representations are handled with accuracy and clarity."
    },
    {
      title: "Ongoing Advisory",
      desc: "We support long-term compliance and provide proactive legal guidance."
    }
  ];

  return (
    <section
      id="approaches"
      ref={ref}
      className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#F8FAFD] overflow-hidden"
    >
      {/* Background Design */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(90deg,#000_1px,transparent_1px),linear-gradient(#000_1px,transparent_1px)] [background-size:24px_24px]" />

      <motion.div
        className="absolute top-32 left-0 w-80 h-80 bg-[#0B1F3B]/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-0 w-96 h-96 bg-[#8B6F3D]/20 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2] }}
        transition={{ duration: 14, repeat: Infinity }}
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-[#0B1F3B]">
            Our Strategic Approach
          </h2>
          <p className="mt-4 text-[#4B5563] max-w-2xl mx-auto">
            A structured, law-centric methodology designed to deliver clarity,
            compliance, and defensible outcomes.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-[#8B6F3D] via-[#0B1F3B] to-[#8B6F3D] -translate-x-1/2" />

          <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative flex ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                {/* Card */}
                <div className="w-full z-10 md:w-[46%] bg-white/70 backdrop-blur-lg border border-[#0B1F3B]/15 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                  <h3 className="text-xl font-semibold text-[#0B1F3B] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[#2B2B2B] leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Dot */}
                <span className="absolute left-1/2 top-8 -translate-x-1/2 w-5 h-5 rounded-full bg-[#8B6F3D] border-4 border-white shadow-md" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-24 text-center"
        >
          <p className="inline-block px-8 py-4 bg-[#0B1F3B] text-white rounded-full text-sm tracking-wide shadow-lg">
            Precision • Compliance • Legal Certainty
          </p>
        </motion.div>
      </div>
    </section>
  );
}
