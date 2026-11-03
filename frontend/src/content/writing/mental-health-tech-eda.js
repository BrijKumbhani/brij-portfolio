const post = {
    slug: "mental-health-tech-eda",
    title: "Uncovering mental health trends in the technology sector via EDA",
    date: "2026-04-10",
    excerpt: "What anonymised survey data reveals about treatment-seeking, workplace support, and remote work in tech — and where company policy actually moves the needle.",
    tags: ["EDA", "Python", "PostgreSQL", "Power BI"],
    content: `
As a data scientist, I firmly believe knowledge is only as good as the stories we can learn from the data. During my MSc in Data Science at the University of Greenwich — and through recent internships in industry — I kept finding myself reflecting on company culture and how rarely it's examined with the same rigour we apply to revenue data. So I built an end-to-end exploratory analysis of mental health in the technology sector.

## The question behind the project

Using real-world anonymised survey data alongside global benchmark data from Kaggle, I set out to understand how **company infrastructure, remote working, and job roles** affect how tech employees feel — and, more importantly, whether they feel safe seeking help.

## How I built it

The pipeline mirrors how I'd run this analysis in a real team:

1. **Python + Pandas** for ingestion, cleaning and feature engineering — normalising inconsistent survey responses, handling missing values, and encoding the categorical messiness that comes free with every questionnaire.
2. **PostgreSQL** as the analytical store — structuring the cleaned data into queryable tables so the exploration was reproducible SQL rather than notebook archaeology.
3. **Power BI** for the final layer — an interactive dashboard so the findings are explorable by a People/HR team, not locked in my charts.

\`\`\`python
# treatment-seeking by whether the employer offers mental health benefits
support = (df.groupby("benefits")["treatment"]
             .value_counts(normalize=True)
             .unstack())
\`\`\`

Across **15+ charts**, a few patterns stood out clearly:

- **Benefits on paper change behaviour.** Employees at companies offering mental health benefits were markedly more likely to have sought treatment — policy signals safety.
- **Perceived anonymity matters as much as the benefit itself.** Where employees doubted confidentiality, treatment-seeking stayed low even with benefits in place.
- **Remote work cuts both ways.** It reduced some stressors while amplifying isolation for others — the effect varied sharply by role and seniority, which is exactly the kind of nuance a company-wide policy misses.

## What I took away

The dataset answers "how are people feeling" only indirectly — what it really measures is **whether the environment makes it safe to say so**. That's a data story worth telling carefully: the goal isn't to surveil wellbeing, it's to show leadership where infrastructure and culture intersect. The full dashboard and notebooks are on the project page.
`,
};

export default post;
