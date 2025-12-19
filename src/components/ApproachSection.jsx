import { motion } from 'motion/react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function ApproachSection() {
  const { ref, isVisible } = useScrollAnimation();

  const steps = [
    "Understanding the Client's Business and Legal Position",
    "Identification of Tax and Regulatory Risks",
    "Strategy Based on Statutory Provisions and Case Law",
    "Accurate Drafting, Filing, and Representation",
    "Ongoing Advisory and Compliance Support"
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="border-b-2 border-black pb-4 mb-12"
          initial={{ opacity: 0, x: -50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl text-black">Our Approach</h2>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-black">
            {steps.map((step, index) => (
              <motion.div 
                key={index} 
                className="flex items-start group"
                initial={{ opacity: 0, x: -30 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div 
                  className="flex-shrink-0 w-10 h-10 bg-black text-white flex items-center justify-center mr-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span>{index + 1}</span>
                </motion.div>
                <p className="pt-2">{step}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative h-96 lg:h-full min-h-[400px] overflow-hidden border-2 border-black"
          >
            <img 
              src="https://images.unsplash.com/photo-1758518731462-d091b0b4ed0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWdhbCUyMGRvY3VtZW50cyUyMG9mZmljZXxlbnwxfHx8fDE3NjU5ODEwNDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Legal Documentation"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}