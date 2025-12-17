"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

function TypingText({ text }: { text: string }) {
    const [displayText, setDisplayText] = useState("");
    const speed = 4500/text.length; 

    useEffect(() => {
        let index = 0;
        setDisplayText("");

        const interval = setInterval(() => {
            setDisplayText((prev) => prev + text[index]);
            index++;

            if (index === text.length) {
                clearInterval(interval);
            }
        }, speed);

        return () => clearInterval(interval);
    }, [text]);

    return (
        <p className="text-white font-bold font-askan text-4xl w-[70%] flex flex-wrap">
            {displayText}
        </p>
    );
}



export default function HomePage() {

    const [headerIndex, setHeaderIndex] = useState(1)

    useEffect(() => {
        const inter = setInterval(() => {
            setHeaderIndex(prev => prev + 1 > 3 ? 1 : prev + 1);
        }, 5000);


        return () => clearInterval(inter);
    }, []);
    return (
        <div className='w-full h-full flex flex-col  bg-linear-to-l from-[#2d2d2d] via-[#5d5d5d] to-[#2a2a2a]'>
            <section className='hidden md:flex flex-row justify-between w-full px-4  items-center'>
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
            <section className='flex flex-row sticky top-0 justify-between w-full px-4  items-center bg-linear-to-l from-[#000] to-[#011226]'>
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

            <section className='flex flex-row w-full p-4 justify-between items-center'>
                {[1, 2, 3].map((item, index) => (
                    headerIndex === item &&
                    <div key={index} className='flex flex-row animate-upndown justify-between items-center w-full'>

                        <div className='w-[50%] flex flex-col justify-center items-start gap-2'>
                            <h1 className='flex flex-row gap-2 justify-start items-center'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="10" stroke="white" stroke-width="2" />
                                    <path d="M7 12.5L10.5 16L17 9"
                                        stroke="white"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>

                                <p className='text-white font-bold font-askan text-lg'>{item===1 ? "Company Register" : item ===2 ? "Account Service" : "Tex Paayment"}</p>

                              
                            </h1>

                              <TypingText
                                    text={
                                        item === 1
                                            ? "Start Your Business Journey with Seamless Company Registration"
                                            : item === 2
                                                ? "Smart Accounting Solutions That Keep Your Business on Track"
                                                : "Hassle-Free Tax Payments, Done Right and On Time"
                                    }
                                />

                        </div>

                        <div className='w-[50%] flex justify-center items-center'>
                            <Image src={item === 1 ? "/header2.png" : item === 2 ? "/header3.webp" : "/header4.webp"} alt='header' width={300} height={300} className='w-[80%] aspect-square' />
                        </div>
                    </div>
                ))}
            </section>
        </div>
    )
}
