const post = {
    slug: "netflix-eda-findings",
    title: "EDA on Netflix: 3 counterintuitive findings",
    date: "2026-05-28",
    excerpt: "I expected a global, movie-heavy, fresh catalogue. The data disagreed on all three counts.",
    tags: ["EDA", "Python", "Pandas"],
    content: `
I ran a full exploratory analysis on the public Netflix catalogue dataset (~8,800 titles) expecting to confirm three assumptions. The data politely declined all of them. Here's what actually showed up.

## Finding 1: TV is eating the catalogue

Movies still outnumber TV shows roughly 7:3 in total titles, so I assumed growth would look the same. Plot titles added per year by type and the story flips: **TV show additions grew far faster than movies from 2016 onward**, and in the peak years the gap narrows dramatically.

The strategy reads clearly once you see the curve — retention-friendly series are the growth lever, not one-off films.

\`\`\`python
added = (df.assign(year_added=df["date_added"].dt.year)
           .groupby(["year_added", "type"])
           .size().unstack(fill_value=0))
added.plot(kind="bar", stacked=True)
\`\`\`

## Finding 2: "Global" is narrower than it sounds

Netflix markets itself as a global catalogue, so I expected a long, flat tail of production countries. The \`country\` field is multi-valued (a title can be co-produced), so after exploding it and counting:

- The **United States alone accounts for the largest share by far**
- The top 5 countries cover the majority of all titles
- The tail exists, but it's a tail — dozens of countries contribute a handful of titles each

The catalogue is internationalising, but from a heavily US-anchored base. "Global" is a direction, not a description.

## Finding 3: "New on Netflix" rarely means new

This one genuinely surprised me. I compared \`release_year\` against \`year_added\`:

\`\`\`python
df["lag"] = df["date_added"].dt.year - df["release_year"]
df["lag"].describe()   # median lag is multiple years, not months
\`\`\`

The **median title arrives on Netflix years after its release**. Same-year additions are the exception, concentrated in Netflix Originals. The catalogue is mostly a licensed back-catalogue business with a fast-growing originals slice on top — a very different shape from the "always fresh" impression the homepage gives.

## What I took away

EDA isn't about making charts; it's about letting the data argue with your assumptions. All three findings were things I would have stated confidently *before* looking. The full notebook — including the missing-data profile and how I handled multi-valued genre fields — is linked from the project page.
`,
};

export default post;
