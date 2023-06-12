import { RoughNotation } from "react-rough-notation";
import styles from "./contact.module.css";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { toast } from "react-hot-toast";

function Contact() {
    const { ref, inView } = useInView();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const message = { name, email, content };

        const response = await fetch("/api/messages", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(message),
        });
        const resContent = await response.json();
        if (response.ok)
            toast.success("Your message was successfully sent!", {
                style: { fontSize: "18.5px", fontWeight: 500 },
            });
        else {
            toast.error(
                "Could not send your message. Check the console for more details",
                {
                    style: { fontSize: "18.5px", fontWeight: 500 },
                }
            );
            console.error(resContent);
        }
    };
    return (
        <section className={styles.section} id="contact">
            <h2>
                Send me a{" "}
                <RoughNotation
                    color="#ff715b"
                    animationDelay={100}
                    show={inView}
                    type="underline"
                    strokeWidth={13}
                    animationDuration={2000}
                    iterations={8}
                >
                    message
                </RoughNotation>
            </h2>
            <a ref={ref} href="mailto:alaaben0810@gmail.com">
                alaaben0810@gmail.com
            </a>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.flex}>
                    <div className={styles.input_container}>
                        <label htmlFor="name">Name</label>
                        <input
                            maxLength={64}
                            required
                            id="name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className={styles.input_container}>
                        <label htmlFor="email">Email</label>
                        <input
                            maxLength={64}
                            required
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </div>
                <div className={styles.input_container}>
                    <label htmlFor="content">Message</label>
                    <textarea
                        required
                        maxLength={2600}
                        id="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    ></textarea>
                </div>
                <div className={styles.contact_btn_wrapper}>
                    <button type="submit">Submit message</button>
                    <button type="submit" tabIndex={-1}>
                        Submit message
                    </button>
                </div>
            </form>
        </section>
    );
}

export default Contact;
