import React from "react";
import { getimageUrl } from "../../utils/utils";
import styles from "./ProjectCard.module.css";
export const ProjectCard=({
    project: { title, imageSrc, description, skills, demo, source},
}) => {
    return (
 <div className={styles.container}>
            <img src={getimageUrl(imageSrc)}
                alt={`image of ${title}`} className={styles.image} />
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <div className={styles.links}>
        <a href={demo} className={styles.link}>Demo</a>
        <a href={source} className={styles.link}>Source</a>
        </div>
     </div>
    );
};