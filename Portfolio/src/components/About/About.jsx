import React from "react";
import { getimageUrl } from "../../utils/utils";
import styles from "./About.module.css";
export const About=()=>{
    return(
    <section className={styles.container}>
<div id="about">
<h2 className={styles.title}>About Me</h2>  
 <img
  src={getimageUrl("about/aboutimage.png")} alt="about me image of me" className={styles.aboutimage}
  />

<p className={styles.content}> 
I'm currently a student at a coding bootcamp set to finish this August. I'm eager to expand my strengths and address my weaknesses while exploring the vast landscape of coding.
Beyond coding, I find fulfillment in weightlifting and staying active. I also love immersing myself in gripping shows that keep me on the edge of my seat. Thanks for reading!
</p>

</div>
    </section>
);
};