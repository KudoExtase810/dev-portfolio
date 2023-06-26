import styles from "./navbar.module.css";
import { LuMenu } from "react-icons/lu";
import { CgClose } from "react-icons/cg";
import { useState } from "react";
function Navbar() {
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => setShowMenu(!showMenu);

    const links = [
        { name: "projects", to: "#projects", target: "_self" },
        { name: "skills", to: "#skills", target: "_self" },
        { name: "contact", to: "#contact", target: "_self" },
        { name: "resume", to: "/resume.pdf", target: "_blank" },
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
                        <a href={link.to} target={link.target} >{link.name}</a>
                        <div></div>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navbar;
