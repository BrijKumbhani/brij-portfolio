import { useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Lenis from "lenis";
import { Toaster } from "@/components/ui/sonner";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import Writing from "@/pages/Writing";
import WritingPost from "@/pages/WritingPost";
import ProjectCase from "@/pages/ProjectCase";

let lenis = null;
export const scrollToId = (id) => {
    if (lenis) lenis.scrollTo(id, { offset: -72, duration: 1.2 });
};

const ScrollManager = () => {
    const { pathname, hash } = useLocation();
    useEffect(() => {
        if (hash) {
            const t = setTimeout(() => scrollToId(hash), 120);
            return () => clearTimeout(t);
        }
        if (lenis) lenis.scrollTo(0, { immediate: true });
        window.scrollTo(0, 0);
    }, [pathname, hash]);
    return null;
};

function App() {
    useEffect(() => {
        lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
        let raf;
        const loop = (time) => {
            lenis.raf(time);
            raf = requestAnimationFrame(loop);
        };
        raf = requestAnimationFrame(loop);
        return () => {
            cancelAnimationFrame(raf);
            lenis.destroy();
            lenis = null;
        };
    }, []);

    return (
        <div className="App min-h-screen bg-background text-foreground">
            <div className="grain-overlay" aria-hidden="true" />
            <BrowserRouter>
                <ScrollManager />
                <Nav />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects/:slug" element={<ProjectCase />} />
                    <Route path="/writing" element={<Writing />} />
                    <Route path="/writing/:slug" element={<WritingPost />} />
                    <Route path="*" element={<Home />} />
                </Routes>
                <Footer />
            </BrowserRouter>
            <Toaster position="bottom-right" />
        </div>
    );
}

export default App;
