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
            {/* <form className="contact-right"></form>
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder="Enter your name" name="name"></input>
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder="Enter your email" name="email"/>
            <label htmlFor="">Write your message here</label>
            <textarea name="message" rows="8" placeholder="Enter your message"></textarea>
            <button type="submit" className="contact-submit">Submit</button> */}
        </footer>
       
    );
};