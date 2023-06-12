import Image from "next/image";
import froggerShot from "../../../public/images/frogger-sc.png";
import ovenglowShot from "../../../public/images/ovenglow-sc.png";
import styles from "./projects.module.css";

interface props {
    project: {
        name: string;
        tools: string[];
        link: string;
        role: string;
        description: string;
    };
}

function SingleProject({ project }: props) {
    const images = {
        "Bug Tracker": froggerShot,
        Ovenglow: ovenglowShot,
    };
    return (
        <li className={styles.project}>
            <div>
                <div>{project.role}</div>
                <h3>{project.name}</h3>
                <ul>
                    {project.tools.map((tool, index) => (
                        <li key={index}>{tool}</li>
                    ))}
                </ul>
                <div className={styles.desc}>
                    <div className={styles.animated_btn_wrapper}>
                        <a target="_blank" href={project.link}>
                            View project
                        </a>
                        <a tabIndex={-1} target="_blank" href={project.link}>
                            View project
                        </a>
                    </div>
                    <p>{project.description}</p>
                </div>
            </div>
            <a href={project.link} target="_blank">
                <Image
                    src={images[project.name as "Ovenglow" | "Bug Tracker"]}
                    alt={project.name}
                    quality={100}
                    width={425}
                    height={420}
                />
            </a>
        </li>
    );
}

export default SingleProject;
