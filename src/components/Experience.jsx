import { motion, AnimatePresence } from "motion/react";
import React, { useState, useEffect, useRef } from "react";

export default function Experience() {
    const [activeExperience, setActiveExperience] = useState(null);
    const timelineRef = useRef(null);

    const experiences = [
        {
            company: "HCL Tech",
            role: "Senior Software Engineer (XR Developer)",
            duration: "Feb 2022 - Present",
            location: "Chennai",
            achievements: [
                "Designed and deployed XR applications for Hololens, focusing on replacement procedures, calibration, alignment, and system overview processes.",
                "Collaborated with SMEs from Milpitas, Taiwan, and Israel to create customized XR solutions for diverse operational needs.",
                "Expertise in Autodesk 3ds Max, Pixyz, Photoshop, Windchill Creo, and Enovia for CAD-integrated XR content development.",
                "Developed an Excel-based tracker to streamline XR project workflows and enhance team efficiency.",
                "Conducted independent research in Unity to create Android XR applications, advancing team capabilities in immersive tech.",
                "Proficient in Creo and SolidWorks with hands-on experience in 3D modeling and design for manufacturing.",
                "Skilled in New Product Development, GD&T, ECO processes, and lifecycle management tools (Enovia)."
            ]
        },
        {
            company: "Frigate",
            role: "Design Intern",
            duration: "Jan 2021 - Mar 2021",
            location: "Remote",
            achievements: [
                "Prepared CNC cutting templates and modelled components in SolidWorks.",
                "Managed several projects, ensuring timely completion and adherence to quality standards."
            ]
        }
    ];

    useEffect(() => {
        if (activeExperience) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [activeExperience]);

    return (
        <section id="experience" className="relative bg-[#171717] text-white font-poppins px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-16">
            <div
                className="absolute inset-0 bg-noise opacity-10 pointer-events-none"
                style={{ backgroundImage: "url('/portfolio/noise-texture.png')" }}
            ></div>

            <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h2 className="text-3xl sm:text-4xl font-bold text-purple-400">Experience</h2>
            </motion.div>

            <div className="relative max-w-screen-lg mx-auto">
                <div
                    ref={timelineRef}
                    className="border-l-4 border-purple-500 absolute left-1/2 transform -translate-x-1/2"
                    style={{ height: "100%" }}
                ></div>
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        className={`relative flex items-center w-full my-8 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
                    >
                        <div className="absolute w-4 h-4 bg-purple-500 rounded-full left-1/2 transform -translate-x-1/2"></div>
                        <div className="bg-[#1E1E1E]/95 p-6 rounded-lg shadow-lg border border-purple-500 w-5/12 cursor-pointer transition-transform transform hover:scale-105 hover:shadow-purple-500 opacity-90" onClick={() => setActiveExperience(exp)}>
                            <h3 className="text-lg font-semibold text-white mb-2">{exp.company}</h3>
                            <p className="text-sm text-gray-400">{exp.duration} - {exp.location}</p>
                            <h4 className="text-md font-semibold text-blue-400 mt-4">{exp.role}</h4>
                            <p className="text-sm text-gray-500 mt-4 italic">Click to learn more</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {activeExperience && (
                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 sm:p-8 overflow-y-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setActiveExperience(null)}
                    >
                        <motion.div
                            className="bg-[#1E1E1E] p-4 sm:p-8 rounded-lg shadow-lg border border-purple-500 w-full max-w-lg sm:w-11/12 md:w-2/3 lg:w-1/2 relative max-h-[90vh] overflow-y-auto"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="absolute top-2 right-2 text-white text-xl hover:text-gray-400"
                                onClick={() => setActiveExperience(null)}
                            >
                                ×
                            </button>
                            <h3 className="text-2xl font-bold text-purple-400 mb-4">{activeExperience.company}</h3>
                            <p className="text-sm text-gray-400">{activeExperience.duration} - {activeExperience.location}</p>
                            <h4 className="text-lg font-semibold text-blue-400 mt-4">{activeExperience.role}</h4>
                            <ul className="list-disc pl-6 space-y-2 text-gray-300 mt-4">
                                {activeExperience.achievements.map((achievement, idx) => (
                                    <li key={idx}>{achievement}</li>
                                ))}
                            </ul>
                            <button
                                className="mt-6 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition w-full sm:w-auto"
                                onClick={() => setActiveExperience(null)}
                            >
                                Close
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
