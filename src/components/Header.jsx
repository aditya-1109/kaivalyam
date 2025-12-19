import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
   
            <section className='flex flex-row sticky md:mt-15 top-0 z-20 justify-between w-full px-4  items-center bg-linear-to-l from-[#000] to-[#011226]'>
                <div className='flex lg:hidden '>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                        <line x1="3" y1="6" x2="21" y2="6" stroke="white" stroke-width="2" stroke-linecap="round" />
                        <line x1="3" y1="12" x2="21" y2="12" stroke="white" stroke-width="2" stroke-linecap="round" />
                        <line x1="3" y1="18" x2="21" y2="18" stroke="white" stroke-width="2" stroke-linecap="round" />
                    </svg>

                </div>
                <div className='flex flex-col -gap-2 justify-center items-start'>
                    <p className='text-[#deae41] text-[20px] lg:text-[40px] font-bold font-askan-bold'>

                        KAIVALYAM
                    </p>

                    <p className='text-[#deae41] text-[10px] lg:text-[20px] font-askan-bold'>

                        TAX CONSULTING
                    </p>

                </div>

                <div className='hidden  lg:flex flex-row gap-10 text-white font-bold'>
                    <p className='cursor-pointer hover:scale-[1.1] hover:text-blue-500'>Home</p>
                    <p className='cursor-pointer hover:scale-[1.1] hover:text-blue-500'>About US</p>
                    <p className='cursor-pointer hover:scale-[1.1] hover:text-blue-500'>Registration</p>
                    <p className='cursor-pointer hover:scale-[1.1] hover:text-blue-500'>Compliances</p>
                    <p className='cursor-pointer hover:scale-[1.1] hover:text-blue-500'>Careers</p>
                    <p className='cursor-pointer hover:scale-[1.1] hover:text-blue-500'>Blogs</p>
                    <p className='cursor-pointer hover:scale-[1.1] hover:text-blue-500'>Contact us</p>
                </div>

                <button className='flex bg-linear-to-r from-[#deae41] to-[#e6c370] text-white font-bold px-4 py-2 rounded-lg'>Get It</button>
            </section>

  );
}