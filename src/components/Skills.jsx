import { motion } from "motion/react";

// Skill Card Component
function SkillCard({ title, skills, icon }) {
    return (
        <motion.div
            className="bg-[#1E1E1E] p-6 rounded-lg shadow-lg border border-purple-500 transition-transform hover:shadow-purple-500"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="flex flex-col items-center mb-4">
                <img src={icon} alt="Category Icon" className="w-12 h-12 mb-4" />
                <h3 className="text-lg font-semibold text-white text-center">{title}</h3>
            </div>
            <ul className="space-y-4">
                {skills.map((skill, index) => (
                    <li
                        key={index}
                        className="bg-[#252525] p-3 rounded-md hover:bg-gray-500 transition-colors"
                    >
                        <div className="flex items-center justify-between">
                            <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                            <div className="w-2/3 bg-gray-700 h-2 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-gradient-to-r from-purple-400 to-blue-500"
                                    style={{ width: `${skill.level}%` }}
                                ></div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </motion.div>
    );
}

export default function Skills() {
    // Skill Data
    const skillCategories = [
        {
            title: "XR Development",
            icon: "/portfolio/xr-icon.png",
            skills: [
                { name: "Unity", level: 90 },
                { name: "WebXR", level: 80 },
                { name: "C#", level: 85 },
                { name: "Meta Quest", level: 75 },
                { name: "Hololens", level: 80 },
            ],
        },
        {
            title: "Front-End Development",
            icon: "/portfolio/frontend-icon.png",
            skills: [
                { name: "React.js", level: 85 },
                { name: "Tailwind CSS", level: 80 },
                { name: "Three.js", level: 75 },
                { name: "HTML", level: 90 },
                { name: "CSS", level: 85 },
            ],
        },
        {
            title: "Design Tools",
            icon: "/portfolio/design-icon.png",
            skills: [
                { name: "3ds Max", level: 90 },
                { name: "Blender", level: 80 },
                { name: "SolidWorks", level: 85 },
                { name: "Creo", level: 80 },
                { name: "Photoshop", level: 75 },
            ],
        },
        {
            title: "Project Management",
            icon: "/portfolio/management-icon.png",
            skills: [
                { name: "Global Collaboration", level: 85 },
                { name: "Excel Automation", level: 80 },
                { name: "Six Sigma", level: 75 },
                { name: "Agile", level: 85 },
                { name: "Kanban", level: 80 },
            ],
        },
    ];

    return (
        <section 
        id="skills"    
        className="relative bg-[#171717] text-white font-poppins px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-16"
            aria-label="Skills Section"
        >
            {/* Background Noise Texture */}
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
                <h2 className="text-3xl sm:text-4xl font-bold text-purple-400">Skills</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-screen-lg mx-auto">
                {skillCategories.map((category, index) => (
                    <SkillCard
                        key={index}
                        title={category.title}
                        icon={category.icon}
                        skills={category.skills}
                    />
                ))}
            </div>
        </section>
    );
}
