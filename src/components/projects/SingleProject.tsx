import type { StaticImageData } from "next/image";
import Image from "next/image";
import styles from "./projects.module.css";
import Link from "next/link";

interface props {
    project: {
        name: string;
        tools: string[];
        link: string;
        role: string;
        description: string;
        image: StaticImageData;
    };
}

function SingleProject({ project }: props) {
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
                        <Link target="_blank" href={project.link}>
                            View project
                        </Link>
                        <Link tabIndex={-1} target="_blank" href={project.link}>
                            View project
                        </Link>
                    </div>
                    <p>{project.description}</p>
                </div>
            </div>
            <a href={project.link} target="_blank">
                <Image
                    src={project.image}
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
