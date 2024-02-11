import Image from "next/image";
import styles from "./projects.module.css";
import Link from "next/link";

interface props {
    project: Project;
}

function SingleProject({ project }: props) {
    return (
        <li className={styles.project}>
            <div>
                <div>
                    {!project.isUnfinished ? (
                        project.role
                    ) : (
                        <span className={styles.unfinished_note}>
                            Still Under Development
                        </span>
                    )}
                </div>
                <h3>{project.name} </h3>
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
            <a href={project.link} target="_blank" className={styles.img_link}>
                <Image
                    src={project.image}
                    alt={project.name}
                    unoptimized
                    width={480}
                    height={420}
                />
            </a>
        </li>
    );
}

export default SingleProject;
