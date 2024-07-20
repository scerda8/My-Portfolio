// import React,{useState} from "react";
import React from "react";
import styles from "./Navbar.module.css";
import AnchorLink from "react-anchor-link-smooth-scroll";


export const Navbar=()=>{
// const [menuOpen,setMenuOpen]=useState(false);

    return(
     <nav className={styles.nav}>
        <a className={styles.title} href="/">
        Portfolio👩🏻‍💻
        </a>
    <div className="navbar">
        <nav>
        <ul className="nav-menu">
        {/* <AnchorLink href='#home'/><button>Home</button><AnchorLink/> */}
        <AnchorLink href='#about'><button>About Me</button></AnchorLink>
        <AnchorLink href="#projects"><button>Projects</button></AnchorLink>
        <AnchorLink href="#socials"><button>Social Network</button></AnchorLink>
        <AnchorLink href="#contactbox"><button>Contact Me</button></AnchorLink>
        <AnchorLink href="#resume"><button>Resume</button></AnchorLink>
    </ul>
            </nav>
        </div>
        </nav>
    );
};