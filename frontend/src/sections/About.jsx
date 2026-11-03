import Reveal from "@/components/Reveal";

const SKILL_GROUPS = [
    { label: "Languages", items: ["Python", "SQL", "R", "C"] },
    { label: "Data & BI", items: ["Pandas", "NumPy", "Power BI", "Excel"] },
    { label: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB"] },
    { label: "ML / Stats", items: ["scikit-learn", "Statistics", "EDA", "Seaborn"] },
    { label: "Engineering", items: ["Git", "ETL Pipelines", "API Integration"] },
    { label: "Working style", items: ["Analytical rigour", "Stakeholder focus"] },
];

const EXPERIENCE = [
    {
        role: "Data Analytics Intern",
        company: "Infotact Solutions",
        period: "Oct – Nov 2025",
        detail: "Analysed data with Python, SQL and Excel; built BI dashboards and automated reporting workflows to save time and improve accuracy.",
    },
    {
        role: "Data Visualization Intern",
        company: "Excelerate (Global)",
        period: "Jun – Jul 2025",
        detail: "Explored real-world datasets and presented insights as clear visual stories, collaborating in a global, cross-cultural team.",
    },
];

const EDUCATION = [
    {
        degree: "MSc Data Science",
        school: "University of Greenwich, London",
        period: "2026 – present",
    },
    {
        degree: "B.Tech Computer Science & Engineering",
        school: "LDRP Institute of Technology and Research, Gandhinagar",
        period: "2022 – 2026 · CGPA 7.39",
    },
];

const About = () => (
    <section id="about" data-testid="about-section" className="border-b border-border">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 md:grid-cols-12 md:px-10 md:py-32">
            <div className="md:col-span-5">
                <Reveal>
                    <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">01 — About</p>
                    <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
                        Numbers first, <em className="text-primary">narrative</em> always.
                    </h2>
                </Reveal>
                <Reveal delay={0.1}>
                    <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground" data-testid="about-bio">
                        <p>
                            I'm Brij — a Computer Engineering graduate now completing my MSc in Data
                            Science at the University of Greenwich. I work across the full arc of a
                            data problem: pulling it from messy sources, modelling it honestly, and
                            presenting it so a non-technical stakeholder can act on it.
                        </p>
                        <p>
                            I've built an end-to-end stock-market ETL pipeline (Python, APIs,
                            PostgreSQL), SQL-driven analyses and interactive BI dashboards — the
                            common thread is that everything ends in a decision, not just a chart.
                            Two internships in data analytics and visualisation taught me to ship
                            work that's reproducible and honest about what the data can't say.
                        </p>
                        <p>
                            I'm currently open to <span className="text-foreground">part-time data roles in the UK</span> under
                            my student visa work allowance, and available <span className="text-foreground">full-time from September 2027</span> after
                            graduation. If you're hiring for either horizon, I'd love to talk.
                        </p>
                    </div>
                </Reveal>

                <Reveal delay={0.2}>
                    <div className="mt-12 border border-border" data-testid="about-experience">
                        <p className="border-b border-border px-5 py-4 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
                            Experience
                        </p>
                        <div className="divide-y divide-border">
                            {EXPERIENCE.map((e) => (
                                <div key={e.role} className="px-5 py-5" data-testid={`experience-${e.role.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
                                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                                        <p className="font-display text-xl font-semibold">{e.role}</p>
                                        <p className="font-mono text-xs text-muted-foreground">{e.period}</p>
                                    </div>
                                    <p className="mt-0.5 font-mono text-xs uppercase tracking-[0.15em] text-primary">{e.company}</p>
                                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.detail}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Reveal>

                <Reveal delay={0.25}>
                    <div className="mt-8 border border-border" data-testid="about-education">
                        <p className="border-b border-border px-5 py-4 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
                            Education
                        </p>
                        <div className="divide-y divide-border">
                            {EDUCATION.map((e) => (
                                <div key={e.degree} className="px-5 py-5" data-testid={`education-${e.degree.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
                                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                                        <p className="font-display text-xl font-semibold">{e.degree}</p>
                                        <p className="font-mono text-xs text-muted-foreground">{e.period}</p>
                                    </div>
                                    <p className="mt-1 text-sm text-muted-foreground">{e.school}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Reveal>
            </div>

            <div className="md:col-span-7">
                <Reveal delay={0.15}>
                    <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">Skills taxonomy</p>
                </Reveal>
                <div className="mt-6 divide-y divide-border border border-border" data-testid="skills-taxonomy">
                    {SKILL_GROUPS.map((group, i) => (
                        <Reveal key={group.label} delay={0.1 + i * 0.06}>
                            <div className="grid gap-3 px-5 py-5 md:grid-cols-4 md:px-7">
                                <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground md:pt-1.5">
                                    {group.label}
                                </p>
                                <div className="flex flex-wrap gap-2 md:col-span-3">
                                    {group.items.map((skill) => (
                                        <span
                                            key={skill}
                                            data-testid={`skill-chip-${skill.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                                            className="border border-border bg-background px-3 py-1.5 font-mono text-xs uppercase tracking-[0.12em] transition-colors duration-200 hover:border-primary hover:text-primary"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

export default About;
