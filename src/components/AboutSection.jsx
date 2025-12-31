import { motion } from "motion/react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#F7F9FC] overflow-hidden"
    >

      <svg xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1024 1024"
        className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[60vh] opacity-15 pointer-events-none " >
        <g>
          <animateTransform attributeName="transform" type="translate" from="0 -20" to="0 20" dur="12s" repeatCount="indefinite" direction="alternate" />
          <animateTransform attributeName="transform" type="rotate" from="0 512 512" to="360 512 512" dur="120s" repeatCount="indefinite" additive="sum" />
          <path fill="black" d="M1006 1006q-18 18-43 18t-43-18L471 557L366 662v1q18 18 18 43.5T366 750t-43.5 18t-43.5-18L18 489Q0 471 0 445.5T18 402t43.5-18t43.5 18l1 1l297-297l-1-1q-18-18-18-43.5T402 18t43.5-18T489 18l261 261q18 18 18 43.5T750 366t-43.5 18t-43.5-18l-1-1l-105 105l449 450q18 18 18 43t-18 43zM337 250l-86 87l181 181l86-86z" />
        </g>
      </svg>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] rounded-full bg-[#0B1F3B]/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="border-b border-[#8B6F3D]/40 pb-4 mb-16"
          initial={{ opacity: 0, x: -40 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-[#0B1F3B]">
            About Kaivalyam Tax Consulting
          </h2>
        </motion.div>

        {/* Image + Content */}
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[420px] overflow-hidden rounded-xl border border-[#8B6F3D]/30 shadow-sm"
          >
            <img
              src="bg3.webp"
              alt="Professional office workspace"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />

            {/* Image overlay */}
            <div className="absolute inset-0 bg-[#0B1F3B]/10" />
          </motion.div>

          {/* Content */}
          <motion.div
            className="space-y-6 text-[#2B2B2B]"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="leading-relaxed text-lg">
              Kaivalyam Tax Consulting is founded and led by{" "}
              <span className="font-semibold text-[#0B1F3B]">
                Adv. Rohit
              </span>
              , a practicing advocate specializing in GST and Income Tax laws.
            </p>

            <p className="leading-relaxed text-lg">
              The firm operates on the principle that taxation and compliance are
              fundamentally legal functions requiring careful statutory
              interpretation and procedural precision. We assist clients in
              compliance, audits, investigations, and dispute resolution.
            </p>

            {/* Highlight Box */}
            <div className="pl-6 border-l-4 border-[#8B6F3D] space-y-3 py-3 bg-[#0B1F3B]/5 rounded-r-md">
              <p className="font-medium text-[#0B1F3B]">
                Each matter is approached with:
              </p>
              <ul className="space-y-2">
                <li>• Detailed factual and legal analysis</li>
                <li>• Strict adherence to statutory provisions</li>
                <li>• Jurisprudence-backed drafting and representation</li>
              </ul>
            </div>

            <p className="leading-relaxed text-lg">
              Our objective is to deliver solutions that are legally sustainable,
              procedurally sound, and aligned with the client’s commercial
              realities.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
