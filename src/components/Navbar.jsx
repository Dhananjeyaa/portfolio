import "../styles/navbar.css"
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar(){
    const [open, setOpen] = useState(false);
    return(
        <nav className="navbar">
         <div className="nav-container">
        <div className="logo">Arun<span>achalam</span></div>

        {/* Desktop Menu */}
        <ul className="nav-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* Hamburger */}
        <div className="hamburger" onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      <ul className={`mobile-menu ${open ? "show" : ""}`}>
        <li><a href="#hero" onClick={() => setOpen(false)}>Home</a></li>
        <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
        <li><a href="#skills" onClick={() => setOpen(false)}>Skills</a></li>
        <li><a href="#projects" onClick={() => setOpen(false)}>Projects</a></li>
        <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
      </ul>

        </nav>
    )
}