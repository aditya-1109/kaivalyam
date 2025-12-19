import { MapPin, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function ContactSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-black text-white" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="border-b-2 border-white pb-4 mb-12"
          initial={{ opacity: 0, x: -50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl">Contact</h2>
        </motion.div>
        
        <div className="max-w-4xl">
          <motion.h3 
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Kaivalyam Tax Consulting
          </motion.h3>
          
          <div className="space-y-6">
            <motion.div 
              className="flex items-start group"
              initial={{ opacity: 0, x: -20 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <MapPin className="mr-4 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" size={24} />
              <div>
                <p className="mb-2">4/35 First Floor, Bazar Gali, Vishwas Nagar,</p>
                <p>Shahdara, Delhi – 110032</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex items-start group"
              initial={{ opacity: 0, x: -20 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Clock className="mr-4 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" size={24} />
              <div>
                <p className="mb-1">Office Hours:</p>
                <p className="opacity-90">Monday to Saturday | 10:30 AM – 6:30 PM</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}