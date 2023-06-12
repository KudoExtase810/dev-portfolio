import Typewriter from "typewriter-effect";
import styles from "./header.module.css";
import { BsLinkedin, BsEnvelopeAtFill } from "react-icons/bs";
import { ImGithub } from "react-icons/im";
import { RoughNotation } from "react-rough-notation";

function Header() {
    return (
        <section className={styles.section}>
            <header className={`${styles.header}`}>
                <h1>
                    <span>Hi, I&rsquo;m Alaa,</span>{" "}
                    <span>
                        A{" "}
                        <Typewriter
                            component="span"
                            options={{
                                strings: [
                                    "Software Engineer",
                                    "Fullstack Developer",
                                ],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </span>
                </h1>
                <ul className={styles.socials}>
                    <li>
                        <a
                            target="_blank"
                            href="https://github.com/kudoextase810"
                        >
                            <ImGithub size={32} />
                        </a>
                    </li>
                    <li>
                        <a target="_blank" href="https://linkedin.com">
                            <BsLinkedin size={32} />
                        </a>
                    </li>
                    <li>
                        <a target="_blank" href="mailto:alaaben0810@gmail.com">
                            <BsEnvelopeAtFill size={32} />
                        </a>
                    </li>
                </ul>
                <p>
                    I am fully self-taught. I like making JAM stack apps, and
                    I'm always trying to learn more and keep up with the latest
                    technologies in order to bring something to{" "}
                    <RoughNotation
                        type="crossed-off"
                        show
                        animationDuration={2000}
                        strokeWidth={1}
                        color="#ff715b"
                    >
                        the
                    </RoughNotation>{" "}
                    your table ⭐
                </p>
            </header>
        </section>
    );
}

export default Header;
