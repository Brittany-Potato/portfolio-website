import React, {useState} from "react";
import styles from "./main-container.module.css";
import {Menu, X} from 'lucide-react';

export default function MainContainer() {

  //* Hamburger menu
const [isOpen, setIsOpen] = useState(false);

const toggleMenu = () => setIsOpen(!isOpen)





  return (
    <div className={styles.outsideContainer}>
      <div className={styles.titleDiv}>

         {/* Creating hamburger menu */}
        <div className={styles.hamburgerMenu}>

           {/* Hamburger Icon */}
            <button onClick={toggleMenu} className={styles.hamburgerIcon}>
              {isOpen ? <X size={28} /> : <Menu className={styles.menuIcon}/>}
            </button>
            
            {isOpen && (
              <div className={styles.menuItems}>
                <a href="https://github.com/Brittany-Potato" className={styles.hamburgerLink}>Github profile</a>
                <a href="" className={styles.hamburgerLink}></a>
                <a href="" className={styles.hamburgerLink}></a>
              </div>
            )}
        </div>
        <h1 className={styles.wholeTitle}>
           {/* Mapping title to animate each letter */}
          {"Coding with Tato".split("").map((char, index) => (
            <span
              key={index}
              className={styles.title}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>
      </div>

       {/* Logo and leaf branches on each side of the title */}
      <img src="/images/T.gif" alt="" className={styles.tatoLogo}/>
      <img src="/images/border.png" alt="" className={styles.leafBranchOne}/>
      <img src="/images/border.png" alt="" className={styles.leafBranchTwo}/>
    </div>
  );
}
