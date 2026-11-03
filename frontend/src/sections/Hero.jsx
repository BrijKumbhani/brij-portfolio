import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { scrollToId } from "@/App";

const line = {
    hidden: { y: "110%" },
    show: (i) => ({
        y: "0%",
        transition: { duration: 0.9, delay: 0.15 + i * 0.13, ease: [0.22, 1, 0.36, 1] },
    }),
};

const Hero = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
    const watermarkY = useTransform(scrollYProgress, [0, 1], [0, 180]);
    const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

    return (
        <section
            ref={ref}
            data-testid="hero-section"
            className="relative overflow-hidden border-b border-border pt-32 md:pt-40"
        >
            <motion.span
                style={{ y: watermarkY, opacity: fade }}
                aria-hidden="true"
                className="pointer-events-none absolute -right-6 top-24 select-none font-display text-[11rem] font-light italic leading-none text-primary/10 md:text-[19rem]"
            >
                Bk
            </motion.span>

            <div className="relative mx-auto max-w-7xl px-5 md:px-10">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    data-testid="hero-overline"
                    className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground"
                >
                    Brij Kumbhani — Data Science Portfolio
                </motion.p>

                <h1 className="mt-6 font-display font-semibold leading-[0.92] tracking-tighter">
                    <span className="mask-line">
                        <motion.span custom={0} variants={line} initial="hidden" animate="show" className="text-[17vw] md:text-[10.5rem]">
                            Data
                        </motion.span>
                    </span>
                    <span className="mask-line">
                        <motion.span custom={1} variants={line} initial="hidden" animate="show" className="text-[17vw] italic text-primary md:text-[10.5rem]">
                            Scientist
                        </motion.span>
                    </span>
                </h1>

                <div className="mt-10 grid items-end gap-10 pb-20 md:grid-cols-12 md:pb-28">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="flex flex-col gap-8 md:col-span-5"
                    >
                        <div className="relative w-fit" data-testid="hero-headshot">
                            <div className="absolute -left-3 -top-3 h-full w-full border border-primary" aria-hidden="true" />
                            <div className="relative overflow-hidden border border-foreground">
                                <img
                                    src="/brij-headshot.png"
                                    alt="Brij Kumbhani"
                                    className="h-64 w-52 object-cover object-top md:h-80 md:w-64"
                                    loading="eager"
                                />
                            </div>
                            <p className="absolute -bottom-4 left-4 bg-primary px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-primary-foreground">
                                Brij Kumbhani
                            </p>
                        </div>
                        <p
                            data-testid="hero-subline"
                            className="max-w-md text-base leading-relaxed text-muted-foreground md:text-lg"
                        >
                            MSc Data Science @ University of Greenwich.
                            Open to part-time roles in the UK now, and full-time from September 2027.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
                        className="flex flex-wrap items-center gap-4 self-end md:col-span-7 md:justify-end"
                    >
                        <button
                            type="button"
                            data-testid="hero-view-projects-button"
                            onClick={() => scrollToId("#work")}
                            className="group flex items-center gap-3 bg-primary px-7 py-4 font-mono text-xs uppercase tracking-[0.2em] text-primary-foreground transition-colors duration-200 hover:bg-foreground hover:text-background"
                        >
                            View Projects
                            <ArrowDown size={14} className="transition-transform duration-300 group-hover:translate-y-1" />
                        </button>
                        <a
                            href="/Brij_Kumbhani_CV.pdf"
                            download
                            data-testid="hero-download-cv-button"
                            className="flex items-center gap-3 border border-foreground px-7 py-4 font-mono text-xs uppercase tracking-[0.2em] transition-colors duration-200 hover:bg-foreground hover:text-background"
                        >
                            Download CV
                            <Download size={14} />
                        </a>
                        <a
                            href="mailto:brijkumbhani101@gmail.com"
                            data-testid="hero-email-button"
                            className="flex items-center gap-3 px-2 py-4 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground underline decoration-primary underline-offset-8 transition-colors duration-200 hover:text-primary"
                        >
                            Email me
                            <Mail size={14} />
                        </a>
                    </motion.div>
                </div>
            </div>

            <div className="border-t border-border">
                <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-border md:grid-cols-4">
                    {[
                        ["Base", "London, UK"],
                        ["Degree", "MSc Data Science"],
                        ["Focus", "ETL · BI · EDA"],
                        ["Status", "Open to work · PT now, FT Sept 2027"],
                    ].map(([k, v], i) => (
                        <motion.div
                            key={k}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.9 + i * 0.08 }}
                            className="px-5 py-5 md:px-10"
                            data-testid={`hero-stat-${k.toLowerCase().replace(/\s/g, "-")}`}
                        >
                            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{k}</p>
                            <p className="mt-1 font-display text-lg font-medium md:text-xl">{v}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;
