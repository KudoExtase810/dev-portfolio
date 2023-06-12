import "@/styles/normalize.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }: AppProps) {
    const [width, setWidth] = useState(0);
    useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    }, []);

    return (
        <>
            <main>
                <Toaster />
                <Navbar />
                <Component {...pageProps} />
            </main>
            <Footer />
        </>
    );
}
