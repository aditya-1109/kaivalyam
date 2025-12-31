import { motion } from "motion/react";

export function HeroSection() {

  const goWhatsapp = () => {
  const phoneNumber = "+918800937784"; 
  const message = "Hello! I would like to know more about your services.";

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  window.open(whatsappUrl, "_blank");
};

  return (
    <>
      {/* Top Info Bar */}
      <section className="hidden absolute top-0 md:flex w-full px-6 py-2 z-20 bg-[#0B1F3B] text-[#F7F9FC]">
        <div className="flex w-full justify-between items-center text-sm font-medium opacity-90">
          <p className="flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 6h16c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2z"
                stroke="#8B6F3D"
                strokeWidth="2"
              />
              <path
                d="M22 8l-10 6L2 8"
                stroke="#8B6F3D"
                strokeWidth="2"
              />
            </svg>
            KaivalyamTaxConsulting@gmail.com
          </p>

          <p>4/35 First Floor, Bazar Gali, Vishwas Nagar, Delhi-32</p>

          <p className="border border-[#8B6F3D]/40 rounded-md px-4 py-1">
            +91-8800937784
          </p>
        </div>
      </section>

      {/* Hero Section */}
      <section
        id="home"
        className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-[#0B1F3B] text-[#F7F9FC] overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="bg1.webp"
            alt="Professional Office"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-[#0B1F3B]/30" />
        </div>

        {/* Decorative Accent Glow */}
        <motion.div
          className="absolute top-1/4 right-10 w-72 h-72 bg-[#8B6F3D]/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <motion.p
              className="mb-4 text-[#8B6F3D] tracking-wide uppercase text-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Tax, Legal & Regulatory Advisory
            </motion.p>

            <motion.h1
              className="mb-8 text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Trusted Tax & Compliance Advisory for Sustainable Growth
            </motion.h1>

            <motion.p
              className="mb-12 text-lg text-[#F7F9FC]/85"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              GST • Income Tax • Litigation • Accounting • Regulatory Registrations
            </motion.p>
          </div>

          {/* Description */}
          <motion.div
            className="max-w-4xl space-y-6 text-[#F7F9FC]/85"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-lg leading-relaxed">
              Kaivalyam Tax Consulting is an Indian tax and compliance advisory
              firm delivering integrated legal, tax, and regulatory solutions to
              businesses and individuals.
            </p>

            <p className="text-lg leading-relaxed">
              Led by a senior advocate, the firm advises and represents clients in
              GST and Income Tax matters, departmental proceedings, audits, and
              appellate litigation, supported by accurate bookkeeping and
              statutory compliance.
            </p>

            <p className="text-lg leading-relaxed">
              Our approach is grounded in statutory interpretation, procedural
              precision, and commercial practicality—ensuring legally sound and
              reliable outcomes.
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <button onClick={()=> goWhatsapp()} className="bg-[#8B6F3D] text-[#0B1F3B] px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition">
              Schedule a Consultation
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
