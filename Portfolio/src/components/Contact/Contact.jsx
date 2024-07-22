import React from "react";
import { getimageUrl } from "../../utils/utils";
import styles from "./Contact.module.css";

export const Contact= () =>{
    return(
        <footer id="contact" className={styles.container}>
            <div id="socials" className={styles.text}>
                <h2>Social Networks</h2>
                {/* <p>Feel free to reach out to me!</p> */}
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getimageUrl("contact/emailicon.png")} alt="email icon"/>
                    <a href="mailto:cerdashandy@gmail.com">cerdashandy@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img src={getimageUrl("contact/github.png")} alt="github icon"/>
                    <a href="https://github.com/scerda8">https://github.com/scerda8</a>
                </li>
                <li className={styles.link}>
                    <img src={getimageUrl("contact/linkedinicon.png")} alt="email icon"/>
                    <a href="https://www.linkedin.com/in/shandy-cerda-34b619164/">https://www.linkedin.com/in/shandy-cerda-34b619164/</a>
                </li>
            </ul>
        </footer>
       
    );
};