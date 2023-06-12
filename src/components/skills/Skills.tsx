import styles from "./skills.module.css";
import Image from "next/image";
import compdude from "../../../public/images/compdudegif.gif";
import skills from "../../data/skills.json";
import SingleSkill from "./SingleSkill";
import { RoughNotation } from "react-rough-notation";
import { useInView } from "react-intersection-observer";

function Skills() {
    const { ref, inView } = useInView();
    return (
        <section className={styles.section} id="skills">
            <h2>
                <RoughNotation
                    animationDelay={100}
                    animationDuration={2000}
                    iterations={4}
                    type="highlight"
                    show={inView}
                    color="#ff715b"
                >
                    My Skills
                </RoughNotation>
            </h2>
            <div>
                <Image
                    src={compdude}
                    width={310}
                    height={385}
                    alt="a guy on a computer"
                />
                <div>
                    <ul>
                        {skills.map((skill, index) => (
                            <SingleSkill key={index} skill={skill} />
                        ))}
                    </ul>
                    <h3>I love building stuff 🛠️💡</h3>
                    <p ref={ref}>
                        As a child, I enjoyed disassembling non-functional
                        objects and using their parts to create something new,
                        it was my way of expressing my creativity. <br /> Today,
                        that same passion of problem-solving and exploring how
                        things work remains within me and coding is just what I
                        chose to use that passion for.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Skills;
