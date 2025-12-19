import { motion } from 'motion/react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function WhyChooseUsSection() {
  const { ref, isVisible } = useScrollAnimation();

  const reasons = [
    "Senior-Advocate–Level Drafting and Representation",
    "Law-Centric and Compliance-Oriented Approach",
    "Integrated Advisory Covering Litigation and Compliance",
    "Personalized Attention to Each Matter",
    "Ethical, Transparent, and Professional Practice"
  ];

  return (
    <section id="why-choose-us" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" ref={ref}>
      {/* Decorative Background Elements */}
      <motion.div 
        className="absolute top-20 left-0 w-72 h-72 bg-black/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-0 w-96 h-96 bg-black/5 rounded-full blur-3xl"
        animate={{
          scale: [1.3, 1, 1.3],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="border-b-2 border-black pb-4 mb-12"
          initial={{ opacity: 0, x: -50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl text-black font-askan md:text-4xl">Why Choose Us</h2>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4 text-black">
            {reasons.map((reason, index) => (
              <motion.div 
                key={index} 
                className="flex items-start bg-white/50 backdrop-blur-sm p-4 rounded border-l-4 border-black hover:bg-white hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ x: 10 }}
              >
                <span className="text-xl mr-4 flex-shrink-0">✓</span>
                <p className="pt-1">{reason}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative h-96 overflow-hidden border-2 border-black"
          >
            <img 
              src="https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY1OTUzMjA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Professional Workspace"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        </div>

        <motion.p 
          className="leading-relaxed mt-12 p-6 bg-black text-white border-2 border-black max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          We focus not only on resolving current issues but also on preventing future legal and regulatory exposure.
        </motion.p>
      </div>
    </section>
  );
}