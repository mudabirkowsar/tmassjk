// 'use client';

// import React, { useRef } from 'react';
// import { motion, useScroll, useSpring, useInView } from 'framer-motion';
// import {
//     HiOutlineRocketLaunch,
//     HiOutlineUsers,
//     HiOutlineAcademicCap,
//     HiOutlineBuildingLibrary,
//     HiOutlineGlobeAlt
// } from "react-icons/hi2";

// const timelineData = [
//     {
//         year: "2011 - 2012",
//         title: "The Visionary Movement",
//         description: "Maulvi Ashraf Gauri initiated a visionary movement to promote Sufi teachings through a structured system of modern and religious sciences.",
//         icon: <HiOutlineRocketLaunch />,
//     },
//     {
//         year: "2013 - 2015",
//         title: "Gathering of Scholars",
//         description: "Personalities like Maulana Mushtaq Ahmad Khan, Asadullah Misbahi, and Pir Syed Hamidullah Haqqani joined to strengthen the intellectual foundation.",
//         icon: <HiOutlineUsers />,
//     },
//     {
//         year: "2017 - 2018",
//         title: "NIOS Registration",
//         description: "Successfully registered 49+ Madrasas with NIOS, achieving a major milestone in standardizing the educational framework in Jammu & Kashmir.",
//         icon: <HiOutlineAcademicCap />,
//     },
//     {
//         year: "2019 - 2023",
//         title: "Higher Education Reach",
//         description: "Introduction of the Sufi syllabus in Kashmir University, BGSBU, and IUST, alongside incorporation into 40+ colleges region-wide.",
//         icon: <HiOutlineBuildingLibrary />,
//     },
//     {
//         year: "Modern Era",
//         title: "Continuous Transformation",
//         description: "Expanding the mission to ensure every corner of the region has access to education that harmonizes the heart and the mind.",
//         icon: <HiOutlineGlobeAlt />,
//     }
// ];

// const TimelineItem = ({ data, index }) => {
//     const ref = useRef(null);
//     const isInView = useInView(ref, { once: true, margin: "-100px" });

//     return (
//         <div ref={ref} className="relative mb-12 md:mb-24 last:mb-0">
//             {/* CENTRAL ICON - Fixed Position on Mobile, Alternating on Desktop */}
//             <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 z-20">
//                 <motion.div
//                     initial={{ scale: 0, rotate: -45 }}
//                     animate={isInView ? { scale: 1, rotate: 0 } : {}}
//                     transition={{ duration: 0.5, type: "spring" }}
//                     className="w-10 h-10 md:w-14 md:h-14 bg-white border-[3px] border-brand-primary rounded-xl shadow-lg flex items-center justify-center text-brand-primary text-xl md:text-2xl"
//                 >
//                     {data.icon}
//                 </motion.div>
//             </div>

//             {/* CONTENT CARD */}
//             <div className={`flex flex-col md:flex-row w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
//                 {/* SIDE 1: Text Content */}
//                 <motion.div
//                     initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
//                     animate={isInView ? { opacity: 1, x: 0 } : {}}
//                     transition={{ duration: 0.7, delay: 0.2 }}
//                     className={`w-full md:w-[45%] pl-20 md:pl-0 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}
//                 >
//                     <div className="bg-white p-6 md:p-8 rounded-[32px] shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
//                         <span className="text-brand-primary font-bold font-serif text-lg mb-2 block">
//                             {data.year}
//                         </span>
//                         <h3 className="text-xl md:text-2xl font-bold text-[#1e293b] mb-3">
//                             {data.title}
//                         </h3>
//                         <p className="text-brand-gray text-base md:text-lg leading-relaxed">
//                             {data.description}
//                         </p>
//                     </div>
//                 </motion.div>

//                 {/* SIDE 2: Spacer for Desktop */}
//                 <div className="hidden md:block md:w-[10%]"></div>
//                 <div className="hidden md:block md:w-[45%]"></div>
//             </div>
//         </div>
//     );
// };

// function TimeLinePage() {
//     const containerRef = useRef(null);

//     // Progress Line Animation logic
//     const { scrollYProgress } = useScroll({
//         target: containerRef,
//         offset: ["start center", "end center"]
//     });

//     const scaleY = useSpring(scrollYProgress, {
//         stiffness: 100,
//         damping: 30,
//         restDelta: 0.001
//     });

//     return (
//         <section className="bg-brand-background py-16 md:py-28 px-4 overflow-hidden" ref={containerRef}>
//             <div className="max-w-6xl mx-auto">

//                 {/* TITLE HEADER */}
//                 <div className="text-center max-w-3xl mx-auto mb-20">
//                     <motion.span
//                         initial={{ opacity: 0 }}
//                         whileInView={{ opacity: 1 }}
//                         className="text-brand-primary font-bold uppercase tracking-[0.25em] text-xs md:text-sm mb-4 block"
//                     >
//                         Our Evolution
//                     </motion.span>
//                     <motion.h2
//                         initial={{ opacity: 0, y: 20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         className="text-4xl md:text-6xl font-serif text-[#1e293b] leading-tight"
//                     >
//                         The Timeline of <span className="italic text-brand-primary">Our Legacy</span>
//                     </motion.h2>
//                 </div>

//                 {/* TIMELINE CONTAINER */}
//                 <div className="relative px-2">

//                     {/* VERTICAL LINE (Desktop: Center | Mobile: Left) */}
//                     <div className="absolute left-[35px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gray-200 md:-translate-x-1/2">
//                         <motion.div
//                             style={{ scaleY, originY: 0 }}
//                             className="absolute top-0 left-0 right-0 bottom-0 bg-brand-primary shadow-[0_0_10px_rgba(0,109,62,0.5)]"
//                         />
//                     </div>

//                     {/* MAPPING DATA */}
//                     <div className="relative z-10">
//                         {timelineData.map((item, index) => (
//                             <TimelineItem key={index} data={item} index={index} />
//                         ))}
//                     </div>

//                 </div>

//                 {/* FINAL STAT CARD */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 40 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.8 }}
//                     className="mt-24 p-8 md:p-14 bg-brand-primary rounded-[40px] text-white text-center shadow-2xl relative overflow-hidden"
//                 >
//                     {/* Subtle decoration */}
//                     <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>

//                     <h4 className="text-2xl md:text-3xl font-bold mb-4">A Movement Still Growing</h4>
//                     <p className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
//                         What started as a single visionary movement by Maulvi Ashraf Gauri in 2011 has now
//                         become a cornerstone of educational excellence across the entire state.
//                     </p>
//                 </motion.div>

//             </div>
//         </section>
//     );
// }

// export default TimeLinePage;

import React from 'react';
import {
    HiOutlineRocketLaunch,
    HiOutlineUsers,
    HiOutlineAcademicCap,
    HiOutlineBuildingLibrary,
    HiOutlineGlobeAlt,
    HiChevronRight
} from "react-icons/hi2";

const timelineData = [
    {
        year: "2011",
        title: "Foundation of the Movement",
        description: "Maulvi Ashraf Gauri initiated a visionary movement to promote Sufi teachings through a structured system of modern and religious sciences, addressing a long-standing educational gap in the region.",
        icon: <HiOutlineRocketLaunch />,
        status: "Visionary Phase"
    },
    {
        year: "2013",
        title: "Intellectual Consolidation",
        description: "Distinguished scholars including Maulana Mushtaq Ahmad Khan and Pir Syed Hamidullah Haqqani joined the executive council, formalizing the intellectual and theological foundation of the movement.",
        icon: <HiOutlineUsers />,
        status: "Strategic Growth"
    },
    {
        year: "2017",
        title: "National Standardization",
        description: "A landmark achievement was reached with the registration of 49+ Madrasas under the National Institute of Open Schooling (NIOS), providing students with recognized academic certification.",
        icon: <HiOutlineAcademicCap />,
        status: "Official Recognition"
    },
    {
        year: "2019",
        title: "Higher Education Integration",
        description: "Successful introduction of the Sufi syllabus in premier institutions including Kashmir University, BGSBU, and IUST, bridging the gap between traditional and modern academia.",
        icon: <HiOutlineBuildingLibrary />,
        status: "Academic Impact"
    },
    {
        year: "Present",
        title: "Regional Sustainability",
        description: "Expanding the network to over 40+ colleges across Jammu & Kashmir, ensuring a sustainable future where spiritual depth and intellectual rigor are accessible to all.",
        icon: <HiOutlineGlobeAlt />,
        status: "Ongoing Mission"
    }
];

function TimelinePage() {
    return (
        <section className="bg-brand-background py-24 md:py-32 px-6 lg:px-20 font-sans border-t border-gray-100">
            <div className="max-w-7xl mx-auto">

                {/* --- PROFESSIONAL HEADER --- */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-24 md:mb-40 items-end">
                    <div className="md:col-span-8">
                        <span className="text-brand-primary font-bold uppercase tracking-[0.3em] text-xs mb-6 block">
                            Historical Record
                        </span>
                        <h2 className="text-5xl md:text-7xl font-serif text-[#1e293b] leading-[1.05] tracking-tight">
                            The Evolution of <br />
                            <span className="italic text-brand-primary">Educational Reform</span>
                        </h2>
                    </div>
                    <div className="md:col-span-4 lg:pl-10">
                        <p className="text-gray-500 text-lg border-l-2 border-brand-primary pl-6 py-2">
                            A chronological documentation of the movement established to harmonize 
                            spiritual heritage with modern academic excellence.
                        </p>
                    </div>
                </div>

                {/* --- THE LEDGER TIMELINE --- */}
                <div className="border-t border-gray-200">
                    {timelineData.map((item, index) => (
                        <div key={index} className="group border-b border-gray-100 py-12 md:py-20 hover:bg-brand-background/50 transition-colors duration-500">
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                                
                                {/* 1. The Year Column */}
                                <div className="md:col-span-2">
                                    <div className="flex flex-col">
                                        <span className="text-4xl md:text-5xl font-serif font-bold text-brand-primary leading-none mb-3">
                                            {item.year}
                                        </span>
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                                            {item.status}
                                        </span>
                                    </div>
                                </div>

                                {/* 2. The Title & Description Column */}
                                <div className="md:col-span-7">
                                    <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                                        {/* Icon - Minimalist Style */}
                                        <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-brand-primary group-hover:border-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all shrink-0">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#1e293b] mb-6">
                                                {item.title}
                                            </h3>
                                            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* 3. The CTA Column (Desktop Only) */}
                                <div className="md:col-span-3 flex justify-end items-center h-full pt-4 md:pt-0">
                                    <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-brand-primary group/btn transition-colors">
                                        Archive Details 
                                        <HiChevronRight className="text-sm group-hover/btn:translate-x-1 transition-transform" />
                                    </button>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

                {/* --- CLOSING STATEMENT --- */}
                <div className="mt-32 md:mt-48 flex flex-col md:flex-row justify-between items-center gap-12 p-12 md:p-20 bg-[#1e293b] rounded-3xl text-white relative overflow-hidden">
                    {/* Decorative Geometric Overlay */}
                    <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
                         style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
                    </div>
                    
                    <div className="relative z-10 max-w-2xl">
                        <h4 className="text-3xl md:text-5xl font-serif font-medium mb-6">A Legacy defined by <span className="italic text-brand-accent">Service.</span></h4>
                        <p className="text-white/60 text-lg">
                            This timeline represents over a decade of dedication to the students 
                            of Jammu & Kashmir. We invite you to join us as we continue to write 
                            the future of Sufi-led educational excellence.
                        </p>
                    </div>

                    <div className="relative z-10">
                        <button className="px-12 py-5 bg-brand-primary text-white font-bold rounded-xl hover:bg-brand-accent transition-all shadow-2xl shadow-black/20">
                            Partner With Us
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default TimelinePage;