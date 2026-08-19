import { useState, useEffect } from "react"
import "../styles/hero.css"
import { motion, AnimatePresence } from "framer-motion"

export default function Hero() {
    const roles = [
        "MERN Stack Developer",
        "MERN Stack Developer specializing in Node.js, Express & Real-Time Applications"
    ]

    const [roleIndex, setRoleIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % roles.length)
        }, 4000)
        return () => clearInterval(interval)
    }, [])

    return (
        <section className="hero" id="hero">
            <div className="hero-content">

                {/* LEFT TEXT */}
                <motion.div
                    className="hero-text"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.span
                        className="intro"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        Hey, I'm Arun
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        MERN Stack Developer <br />
                        <div className="dynamic-role-container">
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={roleIndex}
                                    className="glow-text dynamic-role"
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -15 }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                >
                                    {roles[roleIndex]}
                                </motion.span>
                            </AnimatePresence>
                        </div>
                    </motion.h1>

                    <motion.p
                        className="desc"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                    >
                        I build robust, secure, and scalable backend systems using Node.js/Express,
                        MongoDB combined with modern React frontends
                        to deliver premium web solutions.
                    </motion.p>

                    <motion.div
                        className="buttons"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                    >
                        <a href="#contact" className="btn-primary"><span>Get in touch</span></a>
                        <a href="#projects" className="btn-outline"><span>View Projects</span></a>
                        <a href={`${import.meta.env.BASE_URL}Arunachalam_Resume.pdf`} download className="btn-outline">
                            <span>Download Resume</span>
                        </a>
                    </motion.div>
                </motion.div>

                {/* RIGHT IMAGE */}
                <motion.div
                    className="hero-image"
                    initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    {/* Floating Wrapper */}
                    <motion.div
                        className="hero-image-wrapper"
                        animate={{ y: [0, -10, 0] }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        {/* Spinning outer dashed border */}
                        <div className="glowing-ring"></div>

                        {/* Profile Image Container */}
                        <div className="profile-img-container">
                            <img
                                src={`${import.meta.env.BASE_URL}ArunPic1.jpeg`}
                                alt="Arun"
                                className="profile-img"
                            />
                        </div>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    )
}
