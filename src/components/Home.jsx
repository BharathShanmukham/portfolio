import { motion } from "motion/react";
import { useMemo } from "react";

export default function Home() {
  const particles = useMemo(
    () =>
      Array.from({ length: 150 }).map(() => ({
        width: Math.random() * 3 + 1,
        height: Math.random() * 3 + 1,
        top: Math.random() * 100,
        left: Math.random() * 100,
        x: Math.random() * 40 - 20,
        y: Math.random() * 40 - 20,
        duration: Math.random() * 6 + 4,
      })),
    []
  );

  const handleScroll = () => {
    setTimeout(() => {
      const nextSection = document.getElementById("about");
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center bg-[#171717] text-white font-poppins overflow-hidden px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20"
      aria-label="Home Section"
    >
      <div
        className="absolute inset-0 bg-noise opacity-10 pointer-events-none"
        style={{ backgroundImage: "url('/portfolio/noise-texture.png')" }}
      ></div>

      <div className="absolute inset-0">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full shadow-lg"
            style={{
              width: `${particle.width}px`,
              height: `${particle.height}px`,
              top: `${particle.top}%`,
              left: `${particle.left}%`,
            }}
            animate={{
              x: [0, particle.x, 0],
              y: [0, particle.y, 0],
              opacity: [1, 0.7, 1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <motion.div
        className="z-10 text-center max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="text-5xl md:text-7xl font-bold text-white">
          Hi, I’m <span className="text-purple-400">Bharath</span>
        </h1>
        <p className="text-xl md:text-2xl mt-4 text-gray-300">
          Experienced XR Developer & Mechanical Engineer | Enthusiastic Data Analyst & Front-end Developer
        </p>
        <p className="text-lg mt-2 text-gray-400">
          Combining creativity, engineering, and technology to bring ideas to life.
        </p>

        <motion.button
          whileHover={{
            scale: 1.05,
            borderColor: "#8b5cf6",
            boxShadow: "0px 0px 15px rgba(139, 92, 246, 0.7)",
            backgroundColor: "rgba(139, 92, 246, 0.2)",
            rotate: 1,
          }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 px-6 py-2 border-2 border-purple-500 text-purple-400 font-semibold rounded-lg transition-transform hover:shadow-purple-500 hover:scale-[1.05] bg-transparent backdrop-blur-md"
          onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
        >
          Let’s Connect
        </motion.button>
      </motion.div>

      <div className="absolute bottom-10 flex justify-center w-full">
        <motion.div
          className="flex items-center justify-center cursor-pointer"
          animate={{ y: [0, 10, 0], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          onClick={handleScroll}
        >
          <img src="/portfolio/scroll-down-icon.png" alt="Scroll Down" className="w-12 h-12 animate-pulse" />
        </motion.div>
      </div>
    </section>
  );
}
