import React from 'react'
import styles from '../Cards/cardOne.module.css';

export default function cardOne() {


    return (
        <div className={styles.contactInformation}>
            <div className={styles.titleDiv}>
                <h2 className={styles.title}>Relevant links & contact</h2>
            </div>
            <div className={styles.contactMe}>
                <h2 className={styles.subTitle}>Github: <br /> <a href="https://github.com/Brittany-Potato">Brittany-Potato</a></h2>
                <h2 className={styles.subTitle}>Email: <br /> <a href="mailto:brittanyit.nz@gmail.com">BrittanyIT</a></h2>
                <h2 className={styles.subTitle}>LinkedIn: <br /> <a href="https://www.linkedin.com/in/brittany-cahill-carnaby-a85294124">Brittany</a></h2>
            </div>
            <div className={styles.titleDiv}>
                <h2 className={styles.title}>Tech Stack</h2>
                <ul className={styles.list}>
                    <h3>Languages</h3>
                    <li>JavaScript</li>
                    <li>Python</li>
                    <li>HTML & CSS</li>
                </ul>
                <ul className={styles.list}>
                    <h3>Frontend Libraries</h3>
                    <li>React</li>
                </ul>
                <ul className={styles.list}>
                    <h3>Backend Libraries</h3>
                    <li>Node.js</li>
                </ul>
                <ul className={styles.list}>
                    <h3>Databases</h3>
                    <li>NoSQL: MongoDB</li>
                    <li>SQL: MySQL</li>
                    <li>Familiar with vector Databases</li>
                </ul>
                <ul className={styles.list}>
                    <h3>AI & Bot Development</h3>
                    <li>Discord.js</li>
                    <li>Gemini SDK</li>
                    <li>tmi.js</li>
                </ul>
                <ul className={styles.list}>
                    <h3>Cloud & AI Platforms</h3>
                    <li>Microsoft Azure</li>
                </ul>
                <ul className={styles.list}>
                    <h3>Version Control</h3>
                    <li>Git</li>
                    <li>GitHub</li>
                </ul>
                <ul className={styles.list}>
                    <h3>Developer Tools</h3>
                    <li>Postman</li>
                </ul>
            </div>
        </div>
    )
}
