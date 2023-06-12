import Head from "next/head";
import Skills from "@/components/skills/Skills";
import Projects from "@/components/projects/Projects";
import Contact from "@/components/contact/Contact";
import Header from "@/components/header/header";

export default function Home() {
    return (
        <>
            <Head>
                <title>Alaa Ben | Portfolio</title>
                <meta
                    name="description"
                    content="fullstack developer portfolio"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <Skills />
            <Projects />
            <Contact />
        </>
    );
}
