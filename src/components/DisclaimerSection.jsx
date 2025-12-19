import { motion } from 'motion/react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function DisclaimerSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-secondary border-t-2 border-black" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl text-black">
          <motion.h4 
            className="mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Disclaimer
          </motion.h4>
          <motion.p 
            className="text-sm leading-relaxed text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            The information provided on this website is for general informational purposes only and does not constitute legal or professional advice. Specific advice should be obtained after a detailed consultation based on the facts of each case.
          </motion.p>
        </div>
      </div>
    </section>
  );
}