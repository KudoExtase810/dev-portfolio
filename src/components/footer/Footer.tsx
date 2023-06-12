import styles from "./footer.module.css";
import { ImGithub } from "react-icons/im";
import { BsLinkedin, BsEnvelopeAtFill } from "react-icons/bs";

function Footer() {
    return (
        <footer className={styles.footer}>
            <p>&copy; 2023 - Built with love 💖 by Alaa Ben.</p>

            <ul>
                <li>
                    <a target="_blank" href="https://github.com/kudoextase810">
                        <ImGithub size={32} />
                    </a>
                </li>
                <li>
                    <a target="_blank" href="/https://linkedin.com">
                        <BsLinkedin size={32} />
                    </a>
                </li>
                <li>
                    <a target="_blank" href="mailto:alaaben0810@gmail.com">
                        <BsEnvelopeAtFill size={32} />
                    </a>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;
