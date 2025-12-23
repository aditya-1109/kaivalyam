import { motion } from 'motion/react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function ServicesSection() {
  const { ref, isVisible } = useScrollAnimation();
  const services = [

    {
      title: "Goods and Services Tax (GST)",
      items: [
        "GST Registration, Amendment, and Cancellation",
        "Filing of GSTR-1, GSTR-3B, GSTR-9 and GSTR-9C",
        "Handling GST Notices, Show Cause Notices, and Departmental Proceedings",
        "GST Audit and Verification Support",
        "Input Tax Credit (ITC) Advisory and Disputes",
        "E-Way Bill Detention and Seizure Matters",
        "GST Appeals under Section 107 of the CGST Act"
      ],
      svg: <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24">
    <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
        <path d="M8.487 21h7.026a4 4 0 0 0 3.808-5.224l-1.706-5.306A5 5 0 0 0 12.855 7h-1.71a5 5 0 0 0-4.76 3.47l-1.706 5.306A4 4 0 0 0 8.487 21M15 3q-1 4-3 4T9 3z"/>
        <path d="M14 11h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3H10m2-7v1m0 6v1"/>
    </g>
</svg>
    },
    {
      title: "Income Tax Advisory and Compliance",
      items: [
        "Income Tax Return Filing for Individuals and Businesses",
        "Handling Notices under Sections 139(9), 143(1), 142(1), and 148",
        "AIS/TIS Reconciliation and Mismatch Resolution",
        "Advisory on Tax Assessments and Proceedings"
      ],
      svg: <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48">
    <path fill="currentColor" fill-rule="evenodd" d="M34 4c-5.523 0-10 4.477-10 10v9a1 1 0 0 0 1 1h9c5.523 0 10-4.477 10-10S39.523 4 34 4Zm-8 10a8 8 0 1 1 8 8h-8v-8ZM7 11.778c0-.426.352-.778.778-.778H14c.425 0 .778.352.778.778c0 2.326.372 4.562 1.06 6.652a.784.784 0 0 1-.198.8l-4.425 4.425l.33.647c2.656 5.222 6.934 9.48 12.15 12.152l.648.332l4.426-4.426a.768.768 0 0 1 .782-.187l.01.003a21.28 21.28 0 0 0 6.661 1.064c.426 0 .778.352.778.778v6.204a.783.783 0 0 1-.778.778C20.082 41 7 27.919 7 11.778ZM7.778 9A2.783 2.783 0 0 0 5 11.778C5 29.023 18.977 43 36.222 43A2.783 2.783 0 0 0 39 40.222v-6.204a2.783 2.783 0 0 0-2.778-2.778a19.28 19.28 0 0 1-6.028-.961a2.768 2.768 0 0 0-2.839.667l-3.389 3.389a25.94 25.94 0 0 1-10.302-10.3l3.39-3.39a2.784 2.784 0 0 0 .691-2.82l-.002-.007l-.002-.007a19.198 19.198 0 0 1-.963-6.033A2.783 2.783 0 0 0 14 9H7.778ZM29 13h4V9h2v4h4v2h-4v4h-2v-4h-4v-2Z" clip-rule="evenodd"/>
</svg>
    },
    {
      title: "Litigation and Appellate Practice",
      items: [
        "Drafting of Replies, Objections, and Written Submissions",
        "Representation before Appellate Authorities",
        "Advisory on Recovery Proceedings and Stay Matters",
        "Legal Opinions on Interpretational Issues"
      ],
      svg: <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 16 16">
    <path fill="currentColor" d="M8.75.75V2h.985c.304 0 .603.08.867.231l1.29.736c.038.022.08.033.124.033h2.234a.75.75 0 0 1 0 1.5h-.427l2.111 4.692a.75.75 0 0 1-.154.838l-.53-.53l.529.531l-.001.002l-.002.002l-.006.006l-.006.005l-.01.01l-.045.04c-.21.176-.441.327-.686.45C14.556 10.78 13.88 11 13 11a4.498 4.498 0 0 1-2.023-.454a3.544 3.544 0 0 1-.686-.45l-.045-.04l-.016-.015l-.006-.006l-.004-.004v-.001a.75.75 0 0 1-.154-.838L12.178 4.5h-.162c-.305 0-.604-.079-.868-.231l-1.29-.736a.245.245 0 0 0-.124-.033H8.75V13h2.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1 0-1.5h2.5V3.5h-.984a.245.245 0 0 0-.124.033l-1.289.737c-.265.15-.564.23-.869.23h-.162l2.112 4.692a.75.75 0 0 1-.154.838l-.53-.53l.529.531l-.001.002l-.002.002l-.006.006l-.016.015l-.045.04c-.21.176-.441.327-.686.45C4.556 10.78 3.88 11 3 11a4.498 4.498 0 0 1-2.023-.454a3.544 3.544 0 0 1-.686-.45l-.045-.04l-.016-.015l-.006-.006l-.004-.004v-.001a.75.75 0 0 1-.154-.838L2.178 4.5H1.75a.75.75 0 0 1 0-1.5h2.234a.249.249 0 0 0 .125-.033l1.288-.737c.265-.15.564-.23.869-.23h.984V.75a.75.75 0 0 1 1.5 0Zm2.945 8.477c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L13 6.327Zm-10 0c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L3 6.327Z"/>
</svg>
    },
    {
      title: "Accounting and Bookkeeping",
      items: [
        "Day-to-Day Bookkeeping and Ledger Maintenance",
        "Bank and Ledger Reconciliation",
        "Preparation of Trial Balance and Financial Statements",
        "Compliance-Oriented Accounting Support"
      ],
      svg: <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24">
    <path fill="currentColor" d="M5 17v-7h2v7H5Zm6 0v-7h2v7h-2Zm-9 4v-2h20v2H2Zm15-4v-7h2v7h-2ZM2 8V6l10-5l10 5v2H2Z"/>
</svg>
    },
    {
      title: "TDS Compliance",
      items: [
        "TDS Registration and Advisory",
        "Quarterly TDS Return Filing (24Q, 26Q, 27Q)",
        "TDS Corrections, Defaults, and Justification Reports",
        "Advisory on Applicable TDS Provisions and Rates"
      ],
      svg:<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24">
    <path fill="currentColor" d="M17 8H7v2h4v7h2v-7h4V8ZM4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"/>
</svg>
    },
    {
      title: "Business and Regulatory Registrations",
      items: [
        "Company Registration (Private Limited, LLP, OPC)",
        "Proprietorship and Partnership Setup",
        "MSME (Udyam) Registration",
        "Trademark Registration and Advisory",
        "FSSAI Registration and Licensing"
      ],
      svg: <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512">
    <path fill="currentColor" d="M432 176H320V64a48 48 0 0 0-48-48H80a48 48 0 0 0-48 48v416a16 16 0 0 0 16 16h104a8 8 0 0 0 8-8v-71.55c0-8.61 6.62-16 15.23-16.43A16 16 0 0 1 192 416v72a8 8 0 0 0 8 8h264a16 16 0 0 0 16-16V224a48 48 0 0 0-48-48ZM98.08 431.87a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79Zm0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79Zm0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79Zm0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79Zm0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79Zm80 240a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79Zm0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79Zm0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79Zm0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79Zm80 320a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79Zm0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79Zm0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79Zm0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79Zm0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79ZM444 464H320V208h112a16 16 0 0 1 16 16v236a4 4 0 0 1-4 4Z"/>
    <path fill="currentColor" d="M400 400a16 16 0 1 0 16 16a16 16 0 0 0-16-16Zm0-80a16 16 0 1 0 16 16a16 16 0 0 0-16-16Zm0-80a16 16 0 1 0 16 16a16 16 0 0 0-16-16Zm-64 160a16 16 0 1 0 16 16a16 16 0 0 0-16-16Zm0-80a16 16 0 1 0 16 16a16 16 0 0 0-16-16Zm0-80a16 16 0 1 0 16 16a16 16 0 0 0-16-16Z"/>
</svg>
    }
  ];

  return (
    <section id="services" className=" py-20  px-4 sm:px-6 lg:px-8 bg-linear-to-l from-[#000] to-[#011226]" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="border-b-2 border-white pb-4 mb-12"
          initial={{ opacity: 0, x: -50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl text-white md:text-4xl font-askan">Services</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="bg-white border-2 flex justify-center items-center flex-col relative border-black rounded-2xl p-6  text-black hover:shadow-xl transition-shadow duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <h3
  className="
    relative mb-4 pb-3
     font-bold text-xl
    text-gray-900
    border-b border-gray-300
    transition-all duration-300 ease-out

    group-hover:text-indigo-600
    group-hover:tracking-wide
    after:content-['']
    after:absolute after:left-0 after:bottom-0
    after:h-[2px] after:w-0
    after:bg-gradient-to-r after:from-indigo-500 after:via-purple-500 after:to-pink-500
    after:transition-all after:duration-500

    group-hover:after:w-full
  "
>
  {service.title}
</h3>  

<div className='w-30 h-30 lg:w-40 lg:h-40  absolute opacity-20'>{service.svg}</div>


<ul className="space-y-3">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start text-sm">
                    <span className="mr-3 mt-1 flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}