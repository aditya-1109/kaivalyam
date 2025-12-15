import React from 'react'

export default function HomePage() {
  return (
    <div className='w-full h-screen flex flex-col  bg-linear-to-l from-[#879ec0] via-[#c9cfda] to-[#2d5685]'>
        <section  className='hidden md:flex flex-row justify-between w-full px-4  items-center bg-linear-to-l from-[#879ec0] via-[#c9cfda] to-[#2d5685]'>
            <div className='flex flex-col w-full md:flex-row justify-between items-center py-2 text-[#353d48] font-bold'>
                <p className='flex flex-row gap-2 '>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#1A73E8">
  <path d="M4 6h16c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2z" stroke="white" stroke-width="2"/>
  <path d="M22 8l-10 6L2 8" stroke="white" stroke-width="2"/>
</svg>

                    KaivalyamTaxConsulting@gmail.com</p>
                <p>4/35 First Floor, Bazar gali, Visvas Nagar, Shahdara, Delhi-32</p>
                <p className='border border-[#353d48] rounded-lg px-4 py-2'>+91-8800937784</p>
            </div>
        </section>
        <section className='flex flex-row sticky top-0 justify-between w-full px-4  items-center bg-linear-to-l from-[#1a2f4e] to-[#011226]'>
           <div className='flex lg:hidden '>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
  <line x1="3" y1="6" x2="21" y2="6" stroke="white" stroke-width="2" stroke-linecap="round"/>
  <line x1="3" y1="12" x2="21" y2="12" stroke="white" stroke-width="2" stroke-linecap="round"/>
  <line x1="3" y1="18" x2="21" y2="18" stroke="white" stroke-width="2" stroke-linecap="round"/>
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

            <div className='hidden lg:flex flex-row gap-4 text-white gap-2 font-bold'>
                <p>Home</p>
                <p>About US</p>
                <p>Registration</p>
                <p>Compliances</p>
                <p>Careers</p>
                <p>Blogs</p>
                <p>Contact us</p>
            </div>

            <button className='flex bg-linear-to-r from-[#deae41] to-[#e6c370] text-white font-bold px-4 py-2 rounded-lg'>Get It</button>
        </section>
    </div>
  )
}
