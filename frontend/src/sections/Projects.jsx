import { Link } from "react-router-dom";
import { ArrowUpRight, Github } from "lucide-react";
import Reveal from "@/components/Reveal";
import { PROJECTS } from "@/data/projects";

const Projects = () => (
    <section id="work" data-testid="projects-section" className="border-b border-border">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
            <Reveal>
                <div className="flex flex-wrap items-end justify-between gap-6">
                    <div>
                        <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">02 — Selected work</p>
                        <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
                            Five projects, <em className="text-primary">five decisions</em> shipped.
                        </h2>
                    </div>
                    <a
                        href="https://github.com/BrijKumbhani"
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid="projects-github-link"
                        className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground underline decoration-primary underline-offset-8 transition-colors duration-200 hover:text-primary"
                    >
                        All repositories <ArrowUpRight size={14} />
                    </a>
                </div>
            </Reveal>

            <div className="mt-14 border-t border-border" data-testid="projects-list">
                {PROJECTS.map((p, i) => (
                    <Reveal key={p.slug} delay={0.05}>
                        <article
                            data-testid={`project-card-${p.slug}`}
                            className="group grid gap-6 border-b border-border py-10 md:grid-cols-12 md:gap-10"
                        >
                            <Link
                                to={`/projects/${p.slug}`}
                                data-testid={`project-thumb-link-${p.slug}`}
                                className="block overflow-hidden border border-border md:col-span-4"
                            >
                                <div className="aspect-[4/3] overflow-hidden">
                                    <img
                                        src={p.thumbnail}
                                        alt={p.title}
                                        loading="lazy"
                                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                    />
                                </div>
                            </Link>
                            <div className="md:col-span-8">
                                <div className="flex items-baseline gap-4">
                                    <span className="font-mono text-xs text-muted-foreground">
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">
                                        {p.category}
                                    </span>
                                </div>
                                <Link to={`/projects/${p.slug}`} data-testid={`project-title-link-${p.slug}`}>
                                    <h3 className="mt-2 font-display text-3xl font-semibold tracking-tight transition-colors duration-200 group-hover:text-primary md:text-4xl">
                                        {p.title}
                                    </h3>
                                </Link>
                                <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
                                    {p.hook}
                                </p>
                                <div className="mt-5 flex flex-wrap gap-2">
                                    {p.tags.map((t) => (
                                        <span key={t} className="border border-border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <div className="mt-6 flex flex-wrap items-center gap-5">
                                    <Link
                                        to={`/projects/${p.slug}`}
                                        data-testid={`project-case-link-${p.slug}`}
                                        className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] underline decoration-primary underline-offset-8 transition-colors duration-200 hover:text-primary"
                                    >
                                        Read case study <ArrowUpRight size={14} />
                                    </Link>
                                    <a
                                        href={p.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        data-testid={`project-github-link-${p.slug}`}
                                        className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors duration-200 hover:text-primary"
                                    >
                                        <Github size={14} /> GitHub
                                    </a>
                                    {p.demo && (
                                        <a
                                            href={p.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            data-testid={`project-demo-link-${p.slug}`}
                                            className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors duration-200 hover:text-primary"
                                        >
                                            Live demo <ArrowUpRight size={14} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </article>
                    </Reveal>
                ))}
            </div>
        </div>
    </section>
);

export default Projects;
