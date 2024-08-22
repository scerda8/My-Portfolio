import React from "react";
import styles from "./Hero.module.css";
import resume from "../../../assets/Resume/myresume.pdf";

export const Hero = () => {
  return (
    <section id="home" className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, my name is Shandy Cerda</h1>
        <p className={styles.description}>
          I am a full-stack developer, Welcome to my Portfolio!
        </p>
        <a href="mailto:cerdashandy@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
        <a
          href={resume}
          download={'resume'}
          className={styles.resumeBtn}
        >
          Download My Resume
        </a>
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
      </div>
    </section>
  );
};
