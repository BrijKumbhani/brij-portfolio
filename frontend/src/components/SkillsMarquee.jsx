import Marquee from "react-fast-marquee";

const ITEMS = [
    "Python", "SQL", "R", "Pandas", "NumPy", "scikit-learn", "Power BI",
    "Tableau", "PostgreSQL", "MongoDB", "ETL Pipelines", "Statistics", "EDA", "Git",
];

const SkillsMarquee = () => (
    <div
        data-testid="skills-marquee"
        className="overflow-hidden border-y border-border bg-secondary/60 py-6"
        aria-hidden="true"
    >
        <Marquee speed={28} gradient={false} pauseOnHover>
            {ITEMS.map((item) => (
                <span key={item} className="mx-8 flex items-center gap-8 md:mx-12 md:gap-12">
                    <span className="font-display text-3xl font-light italic text-muted-foreground md:text-4xl">
                        {item}
                    </span>
                    <span className="h-2 w-2 bg-primary" />
                </span>
            ))}
        </Marquee>
    </div>
);

export default SkillsMarquee;
