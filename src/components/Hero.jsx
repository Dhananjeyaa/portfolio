import "../styles/hero.css"
import { motion } from "framer-motion"

 export default function Hero(){
    return(
        <section className="hero" id="hero">
            <div className="hero-content">

                {/* LEFT TEXT */}
                <motion.div
                className="hero-text"
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                >
                <p className="intro">Hey, I'm Arun</p>

                <h1>
                    MERN Stack Developer <br />
                    <span>Real-Time & Secure Applications</span>
                </h1>

                <p className="desc">
                    I build scalable backend systems using Node.js, Express, MongoDB
                    and modern React applications with real-time features.
                </p>

                <div className="buttons">
                    <a href="#contact">Get in touch</a>
                    <a href="#projects">View Projects</a>
                    <a href="/Arun_MERN_Resume.pdf" download className="outline">
                    Download Resume
                    </a>
                </div>
                </motion.div>

                {/* RIGHT IMAGE */}
                <motion.div
                    className="hero-image"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    >

                    {/* Actual Image */}
                    <motion.img
                        src="/ArunPic1.jpeg"
                        alt="Arun"
                        className="profile-img"
                        animate={{ y: [0, -12, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />
                </motion.div>

            </div>
        </section>
    )
 }
