import { motion } from 'motion/react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Scale, FileText, Users, Award } from 'lucide-react';

export function StatsSection() {
  const { ref, isVisible } = useScrollAnimation();

 const stats = [
  {
    icon: Scale,
    label: 'Proven Legal Expertise',
    description:
      'Led by experienced Senior Advocates with deep knowledge of corporate, taxation, and regulatory laws, ensuring reliable and compliant legal solutions.'
  },
  {
    icon: FileText,
    label: 'End-to-End Compliance Services',
    description:
      'Comprehensive support across GST, Income Tax, company incorporation, filings, audits, and ongoing statutory compliance under one roof.'
  },
  {
    icon: Users,
    label: 'Client-Centric Approach',
    description:
      'We deliver personalized advisory and strategic guidance tailored to each client’s business goals, industry challenges, and growth plans.'
  },
  {
    icon: Award,
    label: 'Commitment to Excellence',
    description:
      'Driven by integrity, transparency, and professional ethics, we uphold the highest standards of service quality and confidentiality.'
  }
];


  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black text-white" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center hover:shadow-lg hover:shadow-gray-400 rounded-lg hover:scale-[1.01] p-2"
              initial={{ opacity: 0, y: 100 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: index * 0.1 }}
            >
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 mb-4  rounded-full"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <stat.icon size={40} />
              </motion.div>
              <h4 className="mb-2">{stat.label}</h4>
              <p className="text-sm opacity-80">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
