import { motion } from 'motion/react';

export function Footer() {
  return (
    <footer className="py-6 px-4 sm:px-6 lg:px-8 bg-[#08162B] text-white border-t border-white/20">
      <div className="max-w-7xl mx-auto text-center">
        <motion.p 
          className="text-sm opacity-75"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.75 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          © {new Date().getFullYear()} Kaivalyam Tax Consulting. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
}