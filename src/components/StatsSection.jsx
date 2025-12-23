import { motion } from "motion/react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Scale, FileText, Users, Award } from "lucide-react";

export function StatsSection() {
  const { ref, isVisible } = useScrollAnimation();

  const stats = [
    {
      icon: Scale,
      label: "Proven Legal Expertise",
      description:
        "Led by senior advocates with deep expertise in taxation, corporate, and regulatory laws."
    },
    {
      icon: FileText,
      label: "End-to-End Compliance",
      description:
        "Complete GST, Income Tax, incorporation, filings, audits, and statutory compliance support."
    },
    {
      icon: Users,
      label: "Client-Centric Advisory",
      description:
        "Personalized legal and tax strategies aligned with each client’s business objectives."
    },
    {
      icon: Award,
      label: "Commitment to Excellence",
      description:
        "Driven by integrity, transparency, and the highest professional standards."
    }
  ];

  return (
    <section
      ref={ref}
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0B1F3B] to-[#08162B] overflow-hidden"
    >
      {/* Background Glow Effects */}
      <motion.div
        className="absolute top-[-120px] left-[-120px] w-[420px] h-[420px] bg-[#8B6F3D]/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 14, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-[-140px] right-[-140px] w-[500px] h-[500px] bg-[#8B6F3D]/10 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2] }}
        transition={{ duration: 16, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Divider */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="h-[3px] w-32 mx-auto bg-gradient-to-r from-transparent via-[#8B6F3D] to-transparent" />
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                whileHover={{ y: -10 }}
                className="
                  group relative p-8 rounded-2xl
                  bg-white/5 backdrop-blur-xl
                  border border-white/10
                  text-center
                  shadow-lg hover:shadow-2xl
                  transition-all duration-300
                "
              >
                {/* Icon */}
                <motion.div
                  className="mx-auto mb-6 flex items-center justify-center w-16 h-16 rounded-full bg-[#8B6F3D]/20"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  whileHover={{ rotate: 360 }}
                >
                  <Icon size={30} className="text-[#8B6F3D]" />
                </motion.div>

                {/* Text */}
                <h4 className="text-lg font-semibold text-[#F7F9FC] mb-3">
                  {stat.label}
                </h4>
                <p className="text-sm text-[#F7F9FC]/80 leading-relaxed">
                  {stat.description}
                </p>

                {/* Hover Accent Line */}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] w-0 bg-[#8B6F3D] transition-all duration-500 group-hover:w-16" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
