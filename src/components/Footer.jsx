import { motion } from "motion/react";

function ContactItem({ icon, title, value, link }) {
    return (
        <motion.div 
            className="flex items-center space-x-4 bg-transparent p-2 w-full md:w-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <img src={icon} alt={title} className="w-8 h-8" />
            <div>
                <p className="text-gray-400 text-sm">{title}</p>
                {link ? (
                    <a href={link} target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-400">{value}</a>
                ) : (
                    <p className="text-white">{value}</p>
                )}
            </div>
        </motion.div>
    );
}

export default function Footer() {
    return (
        <footer id="contact" className="relative bg-gradient-to-b from-[#1E1E1E] to-[#111111] text-white font-poppins px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-8">
            <motion.div 
                className="text-center mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h2 className="text-2xl sm:text-3xl font-bold text-purple-400">Contact Me</h2>
            </motion.div>
            
            <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                <ContactItem icon="./src/assets/Icons/email.png" title="Email" value="bharath.nimme@gmail.com" />
                <ContactItem icon="./src/assets/Icons/phone.png" title="Phone" value="+91 6381406329" />
                <ContactItem icon="./src/assets/Icons/linkedin.png" title="LinkedIn" value="LinkedIn Profile" link="https://www.linkedin.com/in/bharath-m-s-88ba17190" />
            </div>
        </footer>
    );
}
