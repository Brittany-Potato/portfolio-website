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
        </div>    
    </div>
  )
}
