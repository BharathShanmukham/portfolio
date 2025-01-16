import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { IoMdMenu, IoMdClose } from "react-icons/io";

export default function NavigationBar() {
    const [activeSection, setActiveSection] = useState("home");
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
            const sections = ["home", "about", "experience", "skills", "projects", "education", "contact"];
            sections.forEach((id) => {
                const section = document.getElementById(id);
                if (section) {
                    const rect = section.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(id);
                    }
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleSmoothScroll = (event, sectionId) => {
        event.preventDefault();
        const section = document.getElementById(sectionId);
        if (section) {
            window.scrollTo({
                top: section.offsetTop - 60,
                behavior: "smooth",
            });
        }
    };

    return (
        <motion.nav
            className={`fixed top-0 left-0 w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-4 z-50 transition-all ${
                scrolled ? "bg-[#171717]/90 backdrop-blur-md shadow-lg" : "bg-[#171717]"
            }`}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="hidden md:flex justify-center space-x-6 text-white font-poppins text-sm sm:text-base">
                {["home", "about", "experience", "skills", "projects", "education", "contact"].map((section) => (
                    <li key={section} className="list-none">
                        <a
                            href={`#${section}`}
                            onClick={(e) => handleSmoothScroll(e, section)}
                            className={`relative transition-all duration-300 ${
                                activeSection === section ? "text-purple-400" : "text-gray-300"
                            } hover:text-purple-400`}
                        >
                            {section.charAt(0).toUpperCase() + section.slice(1)}
                            {activeSection === section && (
                                <motion.div
                                    className="absolute left-0 right-0 h-1 bg-purple-400 rounded-full bottom-[-5px]"
                                    layoutId="activeIndicator"
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                />
                            )}
                        </a>
                    </li>
                ))}
            </div>

            <div className="md:hidden flex justify-between items-center">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white text-2xl">
                    {isMenuOpen ? <IoMdClose /> : <IoMdMenu />}
                </button>
            </div>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className="absolute top-full left-0 w-full bg-[#171717]/95 backdrop-blur-md shadow-lg p-6 text-center md:hidden"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                        <ul className="space-y-4 text-white font-poppins text-lg">
                            {["home", "about", "experience", "skills", "projects", "education", "contact"].map((section) => (
                                <li key={section}>
                                    <a
                                        href={`#${section}`}
                                        onClick={(e) => handleSmoothScroll(e, section)}
                                        className={`block transition-all duration-300 ${
                                            activeSection === section ? "text-purple-400" : "text-gray-300"
                                        } hover:text-purple-400`}
                                    >
                                        {section.charAt(0).toUpperCase() + section.slice(1)}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
