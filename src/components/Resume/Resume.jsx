import React from "react";
import styles from './Resume.module.css';

export const Resume=()=>{
    return(
<section className={styles.container}>
    <div id="resume" className="top">
    <h2 className={styles.header}>Resume</h2>
    <h3 className={styles.title}>Front-end Proficiencies</h3>
    <ul className={styles.skills}>
    <li>HTML</li>
    <li>CSS</li>
    <li>Javascript</li>
    <li>Bootstrap</li>
    <li>React</li>
    </ul>
    <h3 className={styles.title}>Back-end Proficiencies</h3>
    <ul className={styles.skills}>
        <li>Node</li>
        <li>PostgresSQL,Sequelize</li>
        <li>MongoDB</li>
        <li>Express</li>
    </ul>
    </div>
</section>
    );
};