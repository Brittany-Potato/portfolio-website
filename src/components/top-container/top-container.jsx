import React from "react"; // No longer need useState
import styles from "./top-container.module.css";
// You can remove Menu and X if they are not used elsewhere
// import {Menu, X} from 'lucide-react'; 

export default function MainContainer() {
  // We no longer need the state or toggle function, so they can be deleted.

  return (
    <div className={styles.outsideContainer}>
      <div className={styles.titleDiv}>
        <h1 className={styles.wholeTitle}>
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

      <img src="/images/T.gif" alt="" className={styles.tatoLogo}/>
      <img src="/images/border.png" alt="" className={styles.leafBranchOne}/>
      <img src="/images/border.png" alt="" className={styles.leafBranchTwo}/>
    </div>
  );
}