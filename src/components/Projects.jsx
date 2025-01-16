import { motion } from "motion/react";

// Project Card Component
function ProjectCard({ title, description, image, link }) {
    return (
        <motion.div
            className="bg-[#1E1E1E] p-6 rounded-lg shadow-lg border border-purple-500 transition-transform hover:shadow-purple-500 hover:scale-105"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="flex flex-col items-center mb-4">
                <img src={image} alt={title} className="w-full h-48 object-cover rounded-md" />
                <h3 className="text-lg font-semibold text-white mt-4 text-center">{title}</h3>
            </div>
            <p className="text-gray-300 text-sm text-center">{description}</p>
            {link && (
                <a href={link} target="_blank" rel="noopener noreferrer" className="block mt-4 text-purple-400 hover:underline text-center">
                    View Project
                </a>
            )}
        </motion.div>
    );
}

export default function Projects() {
    // Project Data
    const projectList = [
        {
            title: "WebGL Material Editor",
            description: "A versatile product configurator enabling users to explore and modify materials on any 3D model.",
            image: "./src/assets/Images/material-editor.png",
            link: "https://bharathshanmukham.github.io/MaterialEditor/",
        },
        {
            title: "More Projects Coming Soon",
            description: "Exciting new projects are on the way. Stay tuned!",
            image: "./src/assets/Images/coming-soon.png",
            link: "",
        }
    ];

    return (
        <section 
        id="projects"
            className="relative bg-[#171717] text-white font-poppins px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-16"
            aria-label="Projects Section"
        >
            {/* Background Noise Texture */}
            <div 
                className="absolute inset-0 bg-noise opacity-10 pointer-events-none"
                style={{ backgroundImage: "url('./src/assets/Images/noise-texture.png')" }}
            ></div>

            <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h2 className="text-3xl sm:text-4xl font-bold text-purple-400">Projects</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-lg mx-auto">
                {projectList.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        link={project.link}
                    />
                ))}
            </div>
        </section>
    );
}
