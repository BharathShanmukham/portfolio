import { motion } from "motion/react";

function EduCertCard({ title, subtitle, description }) {
    return (
        <motion.div
            className="bg-[#1E1E1E] p-6 rounded-lg shadow-lg border border-purple-500 transition-transform hover:shadow-purple-500 hover:scale-105"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
            <p className="text-blue-400">{subtitle}</p>
            <p className="text-gray-300 text-sm mt-1">{description}</p>
        </motion.div>
    );
}

export default function EducationCertifications() {
    const education = {
        title: "Bachelor's in Mechanical Engineering",
        subtitle: "Government College of Technology",
        description: "GPA: 8.5"
    };

    const certifications = [
        {
            title: "Lean Six Sigma Yellow Belt",
            subtitle: "MSME Certification"
        },
        {
            title: "Innovative Champion Award",
            subtitle: "HCL Technologies"
        },
        {
            title: "Tractor Design Competition - Runner-Up",
            subtitle: "SAE India"
        }
    ];

    return (
        <section id="education" className="relative bg-[#171717] text-white font-poppins px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-16" aria-label="Education & Certifications Section">
            <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none" style={{ backgroundImage: "url('./src/assets/Images/noise-texture.png')" }}></div>

            <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8, ease: "easeOut" }}>
                <h2 className="text-3xl sm:text-4xl font-bold text-purple-400">Education & Certifications</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-screen-lg mx-auto">
                <div className="bg-[#1E1E1E] p-6 rounded-lg border border-purple-500">
                    <div className="flex items-center mb-4">
                        <img src="./src/assets/Icons/education.png" alt="Education Icon" className="w-10 h-10 mr-4" />
                        <h3 className="text-xl font-semibold text-white">Education</h3>
                    </div>
                    <EduCertCard {...education} />
                </div>
                <div className="bg-[#1E1E1E] p-6 rounded-lg border border-purple-500">
                    <div className="flex items-center mb-4">
                        <img src="./src/assets/Icons/certification.png" alt="Certification Icon" className="w-10 h-10 mr-4" />
                        <h3 className="text-xl font-semibold text-white">Certifications & Awards</h3>
                    </div>
                    <div className="space-y-4">
                        {certifications.map((cert, index) => (
                            <EduCertCard key={index} {...cert} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
