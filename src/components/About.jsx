import { motion } from "motion/react";
import { useState } from "react";

// Card Component for Reusability
function Card({ title, description, icon }) {
    return (
        <motion.div
            className="bg-[#1E1E1E] p-6 rounded-lg shadow-lg border border-purple-500 hover:shadow-purple-500 hover:scale-[1.05] transition-transform"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, ease: "easeInOut" }}
        >
            <div className="flex items-center mb-4">
                {icon && <img src={icon} alt="Icon" className="w-8 h-8 mr-4" />}
                <h3 className="text-lg font-semibold text-white">{title}</h3>
            </div>
            <p className="text-gray-300 mt-2">{description}</p>
        </motion.div>
    );
}

export default function About() {
    return (
        <>
            <section 
                id="about"
                className="relative flex flex-col md:flex-row items-center justify-between bg-[#171717] text-white font-poppins overflow-hidden px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-16" 
                style={{ minHeight: "fit-content" }}
                aria-label="About Me Section"
            >
                {/* Background Textures */}
                <div 
                    className="absolute inset-0 bg-noise opacity-10 pointer-events-none"
                    style={{ backgroundImage: "url('./src/assets/Images/noise-texture.png')" }}
                ></div>

                {/* Left Section: Profile Image */}
                <div 
                    className="w-full md:w-1/2 flex justify-center items-center relative mb-8 md:mb-0" 
                    aria-label="Profile Image"
                >
                    <motion.div
                        className="relative flex items-center justify-center group w-80 h-80 sm:w-96 sm:h-96 rounded-full transition-transform duration-300 hover:shadow-xl hover:shadow-purple-500"
                        initial={{ opacity: 0, scale: 0.85 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <img
                            src="./src/assets/Images/profile.png"
                            alt="Bharath M S"
                            className="w-full h-full object-cover rounded-full z-10"
                            loading="lazy"
                        />
                    </motion.div>
                </div>

                {/* Right Section: About Content */}
                <div className="w-full md:w-1/2 flex flex-col text-left px-4 lg:px-8">
                    <motion.h2
                        className="text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-400 mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                    >
                        About Me
                    </motion.h2>
                    <motion.p
                        className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                    >
                        Transitioning from Mechanical Engineering to XR Development, I've cultivated a unique blend of technical expertise and creative problem-solving abilities. My journey represents the intersection of physical engineering principles and cutting-edge virtual experiences.
                    </motion.p>

                    <motion.div
                        className="grid gap-6"
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.2,
                                },
                            },
                        }}
                    >
                        <Card
                            title="Technical Expertise"
                            description="Proficient in Unity, WebXR, Hololens, 3D Modeling, React.js, and Three.js"
                            icon="./src/assets/Icons/technical.png"
                        />

                        <Card
                            title="Global Collaboration"
                            description="Experience working with international teams, focusing on operational efficiencies and innovative solutions"
                            icon="./src/assets/Icons/collaboration.png"
                        />

                        <Card
                            title="Cross-disciplinary Approach"
                            description="Combining mechanical engineering principles with modern XR development practices"
                            icon="./src/assets/Icons/cross-disciplinary.png"
                        />
                    </motion.div>
                </div>
            </section>
        </>
    );
}
