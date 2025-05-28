import React, {useState} from "react";
import styles from "./second-container.module.css";
import {Menu, X} from 'lucide-react';

export default function secondContainer() {
  return (
    <div className={styles.mainContainer}>
        <div className={styles.cardsDiv}>
            <div className={styles.cardOne}>

            </div>
            <div className={styles.cardTwo}>

            </div>
            <div className={styles.introCard}>
                                <h3 className={styles.introTitle}>Who am I?</h3>
                <p className={styles.introParagraph}> 27 years old Full stack developer & level 5 student with Mission Ready. Working with HTML, CSS and JavaScript.
                    and a knowledge of react and node.js. I have undertaken a variety of projects that can be found on my github, from missions
                    given by Mission ready, to a discord bot and a growing "dictionary" of JavaScript.</p>
                <img src="/images/tatoandeevee.jpg" alt="" className={styles.displayPicture}/>
            </div>
        </div>
    </div>
  )
}
