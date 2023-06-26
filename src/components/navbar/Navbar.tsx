import styles from "./navbar.module.css";
import { LuMenu } from "react-icons/lu";
import { CgClose } from "react-icons/cg";
import { useState } from "react";
function Navbar() {
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => setShowMenu(!showMenu);

    const links = [
        { name: "projects", to: "#projects" },
        { name: "skills", to: "#skills" },
        { name: "contact", to: "#contact" },
        { name: "resume", to: "/resume.pdf" },
    ];
    return (
        <nav className={styles.navbar}>
            <button aria-label="toggle menu" onClick={toggleMenu}>
                {showMenu ? (
                    <CgClose size={32} color="whitesmoke" />
                ) : (
                    <LuMenu size={32} color="whitesmoke" />
                )}
            </button>
            <ul className={!showMenu ? styles.hidden : undefined}>
                {links.map((link, index) => (
                    <li key={index}>
                        <a href={link.to}>{link.name}</a>
                        <div></div>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navbar;
