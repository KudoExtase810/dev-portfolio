import "@/styles/normalize.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }: AppProps) {
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
