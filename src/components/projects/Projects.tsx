import { RoughNotation } from "react-rough-notation";
import projects from "../../data/projects";
import styles from "./projects.module.css";
import SingleProject from "./SingleProject";
import { useInView } from "react-intersection-observer";
function Projects() {
    const { ref, inView } = useInView();

    return (
        <section className={styles.section} id="projects">
            <h2 ref={ref}>
                <RoughNotation
                    animationDelay={100}
                    animationDuration={2000}
                    iterations={4}
                    type="highlight"
                    show={inView}
                    color="#ff715b"
                >
                    Projects
                </RoughNotation>
            </h2>
            <div>
                <ul>
                    {projects.map((project, index) => (
                        <SingleProject key={index} project={project} />
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default Projects;
