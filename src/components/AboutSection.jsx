import { motion } from 'motion/react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8" ref={ref}>

      <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 1024 1024"
  className="
    absolute
    top-1/2 left-1/2
    -translate-x-1/2 -translate-y-1/2
    w-[70vw] h-[60vh]
    opacity-15
    pointer-events-none
  "
>
  <g>
    {/* Slow floating animation */}
    <animateTransform
      attributeName="transform"
      type="translate"
      from="0 -20"
      to="0 20"
      dur="12s"
      repeatCount="indefinite"
      direction="alternate"
    />

    {/* Slow rotation for abstract feel */}
    <animateTransform
      attributeName="transform"
      type="rotate"
      from="0 512 512"
      to="360 512 512"
      dur="120s"
      repeatCount="indefinite"
      additive="sum"
    />

    <path
      fill="black"
      d="M1006 1006q-18 18-43 18t-43-18L471 557L366 662v1q18 18 18 43.5T366 750t-43.5 18t-43.5-18L18 489Q0 471 0 445.5T18 402t43.5-18t43.5 18l1 1l297-297l-1-1q-18-18-18-43.5T402 18t43.5-18T489 18l261 261q18 18 18 43.5T750 366t-43.5 18t-43.5-18l-1-1l-105 105l449 450q18 18 18 43t-18 43zM337 250l-86 87l181 181l86-86z"
    />
  </g>
</svg>

      <div className="max-w-7xl mx-auto">
        <motion.div
          className="border-b-2 border-black pb-4 mb-12"
          initial={{ opacity: 0, x: -50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl text-black font-askan md:text-4xl">About Kaivalyam Tax Consulting</h2>
        </motion.div>

        {/* Image and Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-96 lg:h-full min-h-[400px] overflow-hidden border-2 border-black"
          >
            <img
              src="https://images.unsplash.com/photo-1765020553734-2c050ddb9494?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbnN1bHRhdGlvbiUyMG1lZXRpbmd8ZW58MXx8fHwxNzY1OTU5NTg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Business Consultation"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          <motion.div
            className="space-y-6 text-black"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="leading-relaxed">
              Kaivalyam Tax Consulting is founded and led by <strong>Adv. Rohit</strong>, a practicing advocate specializing in GST and Income Tax laws.
            </p>

            <p className="leading-relaxed">
              The firm operates with the understanding that taxation and compliance are legal functions requiring careful interpretation of statutes, rules, and judicial precedents. We assist clients not only in meeting compliance requirements but also in managing legal exposure arising from audits, investigations, and disputes.
            </p>

            <div className="pl-6 border-l-4 border-black space-y-3 py-2">
              <p className="leading-relaxed">Each matter is approached with:</p>
              <ul className="space-y-2 list-none">
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Detailed factual and legal analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Strict adherence to statutory provisions</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Jurisprudence-backed drafting and representation</span>
                </li>
              </ul>
            </div>

            <p className="leading-relaxed">
              Our objective is to provide clear, lawful, and defensible solutions aligned with the client's business realities.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}