import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import Reveal from "@/components/Reveal";
import Meta from "@/components/Meta";
import { PROJECTS } from "@/data/projects";

const SECTIONS = [
    ["problem", "Problem"],
    ["dataset", "Dataset"],
    ["approach", "Approach"],
    ["result", "Result & insight"],
];

const ProjectCase = () => {
    const { slug } = useParams();
    const idx = PROJECTS.findIndex((p) => p.slug === slug);
    const project = PROJECTS[idx];

    if (!project) {
        return (
            <main data-testid="project-case-missing" className="mx-auto max-w-3xl px-5 pt-40 pb-32 text-center">
                <h1 className="font-display text-4xl font-semibold">Project not found.</h1>
                <Link to="/#work" data-testid="project-case-back-link" className="mt-6 inline-block font-mono text-xs uppercase tracking-[0.2em] underline decoration-primary underline-offset-8">
                    Back to projects
                </Link>
            </main>
        );
    }

    const next = PROJECTS[(idx + 1) % PROJECTS.length];
    const cs = project.caseStudy;

    return (
        <main data-testid="project-case-page" className="pt-32 md:pt-40">
            <Meta title={project.title} description={project.hook} />
            <div className="mx-auto max-w-7xl px-5 pb-24 md:px-10">
                <Reveal>
                    <Link
                        to="/#work"
                        data-testid="project-case-back-link"
                        className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors duration-200 hover:text-primary"
                    >
                        <ArrowLeft size={14} /> All projects
                    </Link>
                    <div className="mt-8 flex flex-wrap items-center gap-4">
                        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">{project.category}</span>
                        <span className="h-px w-8 bg-border" />
                        <span className="font-mono text-xs text-muted-foreground">Case study {String(idx + 1).padStart(2, "0")} / {String(PROJECTS.length).padStart(2, "0")}</span>
                    </div>
                    <h1 className="mt-4 max-w-4xl font-display text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl" data-testid="project-case-title">
                        {project.title}
                    </h1>
                    <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{project.hook}</p>
                    <div className="mt-8 flex flex-wrap items-center gap-5">
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="project-case-github-link"
                            className="flex items-center gap-2 border border-foreground px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] transition-colors duration-200 hover:bg-foreground hover:text-background"
                        >
                            <Github size={14} /> View on GitHub
                        </a>
                        {project.demo && (
                            <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                data-testid="project-case-demo-link"
                                className="flex items-center gap-2 bg-primary px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-primary-foreground transition-colors duration-200 hover:bg-foreground hover:text-background"
                            >
                                Live demo <ArrowUpRight size={14} />
                            </a>
                        )}
                    </div>
                </Reveal>
            </div>

            <Reveal delay={0.1}>
                <div className="border-y border-border">
                    <div className="mx-auto max-w-7xl px-5 md:px-10">
                        <div className="aspect-[16/7] overflow-hidden">
                            <img
                                src={project.thumbnail}
                                alt={project.title}
                                data-testid="project-case-hero-image"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </Reveal>

            <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-12 md:px-10 md:py-28">
                <div className="md:col-span-4">
                    <Reveal>
                        <div className="border border-border" data-testid="project-case-stack">
                            <p className="border-b border-border px-5 py-4 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
                                Stack
                            </p>
                            <ul className="divide-y divide-border">
                                {cs.stack.map((s) => (
                                    <li key={s} className="px-5 py-3.5 font-mono text-sm">
                                        {s}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Reveal>
                </div>
                <div className="md:col-span-8">
                    <div className="space-y-14" data-testid="project-case-body">
                        {SECTIONS.map(([key, label], i) => (
                            <Reveal key={key} delay={0.05 * i}>
                                <section data-testid={`project-case-section-${key}`}>
                                    <div className="flex items-baseline gap-4">
                                        <span className="font-mono text-xs text-primary">{String(i + 1).padStart(2, "0")}</span>
                                        <h2 className="font-display text-3xl font-semibold tracking-tight">{label}</h2>
                                    </div>
                                    <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
                                        {cs[key]}
                                    </p>
                                </section>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </div>

            <div className="border-t border-border">
                <Link
                    to={`/projects/${next.slug}`}
                    data-testid="project-case-next-link"
                    className="group mx-auto flex max-w-7xl items-center justify-between px-5 py-12 md:px-10"
                >
                    <div>
                        <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">Next case study</p>
                        <p className="mt-2 font-display text-3xl font-semibold tracking-tight transition-colors duration-200 group-hover:text-primary md:text-5xl">
                            {next.title}
                        </p>
                    </div>
                    <ArrowUpRight size={36} className="text-primary transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2" />
                </Link>
            </div>
        </main>
    );
};

export default ProjectCase;
