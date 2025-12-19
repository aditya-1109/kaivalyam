import { motion } from 'motion/react';

export function HeroSection() {
  return (
    <>

    <section className='hidden absolute top-0 md:flex flex-row justify-between w-full px-4  items-center'>
                <div className='flex flex-col w-full md:flex-row justify-between items-center py-2 text-[#fff] font-bold'>
                    <p className='flex flex-row gap-2 '>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#1A73E8">
                            <path d="M4 6h16c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2z" stroke="white" stroke-width="2" />
                            <path d="M22 8l-10 6L2 8" stroke="white" stroke-width="2" />
                        </svg>

                        KaivalyamTaxConsulting@gmail.com</p>
                    <p>4/35 First Floor, Bazar gali, Visvas Nagar, Shahdara, Delhi-32</p>
                    <p className='border border-[#353d48] rounded-lg px-4 py-2'>+91-8800937784</p>
                </div>
            </section>

     <section id="home" className="relative pt-16  pb-16 px-4 sm:px-6 lg:px-8 bg-black text-white overflow-hidden">
     
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1762341117487-dbc411bcf574?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMG9mZmljZXxlbnwxfHx8fDE3NjU5NzQyNTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Professional Office"
          className="w-full h-full object-cover opacity-20"
        />
       
      </div>


       
      {/* Animated Decorative Elements */}
      <motion.div 
        className="absolute top-1/4 right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-3xl">
          <motion.p 
            className="mb-4 opacity-90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.9, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Tax, Legal & Regulatory Advisory
          </motion.p>
          
          <motion.h1 
            className="mb-8 text-4xl md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Trusted Tax and Compliance Advisory
          </motion.h1>
          
          <motion.p 
            className="mb-12 text-xl opacity-90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.9, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            GST | Income Tax | Litigation | Accounting | Regulatory Registrations
          </motion.p>
        </div>
        
        <motion.div 
          className="space-y-6 max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-lg leading-relaxed">
            Kaivalyam Tax Consulting is an Indian tax and compliance advisory firm providing integrated legal, tax, and regulatory solutions to businesses and individuals.
          </p>
          
          <p className="text-lg leading-relaxed">
            Led by a senior advocate, the firm advises and represents clients in GST and Income Tax matters, departmental proceedings, audits, and appellate litigation. Alongside litigation and advisory, we support businesses through accurate bookkeeping, statutory filings, and essential regulatory registrations.
          </p>
          
          <p className="text-lg leading-relaxed">
            Our practice is grounded in statutory compliance, legal interpretation, and procedural accuracy, ensuring that every engagement is legally sustainable and commercially sound.
          </p>
        </motion.div>
      </div>
    </section>
    </>
   
  );
}