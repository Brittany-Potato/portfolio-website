import React from "react";
import styles from "./main-container.module.css";

export default function mainContainer() {
  return (
    <div className={styles.outsideContainer}>
      <div className={styles.titleDiv}>
        <h1 className={styles.title}>
          {"Coding with Brittany".split("").map((char, index) => (
            <span
              key={index}
              className={styles.title}
              style={{ animaltionDelay: `${index * 0.1}s` }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>
      </div>
    </div>
  );
}
