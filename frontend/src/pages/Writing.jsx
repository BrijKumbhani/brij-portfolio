import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import Meta from "@/components/Meta";
import POSTS, { readingTime } from "@/content/writing";

const Writing = () => (
    <main data-testid="writing-page" className="pt-32 md:pt-40">
        <Meta title="Writing" description="Notes from the notebook — honest writeups on data engineering, exploratory analysis and findings that contradicted what I believed. By Brij Kumbhani." />
        <div className="mx-auto max-w-7xl px-5 pb-24 md:px-10 md:pb-32">
            <Reveal>
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">Writing</p>
                <h1 className="mt-4 font-display text-5xl font-semibold leading-tight tracking-tight md:text-6xl">
                    Notes from the <em className="text-primary">notebook</em>.
                </h1>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                    Short, honest writeups on data engineering, analysis and the occasional
                    finding that contradicted what I believed.
                </p>
            </Reveal>

            <div className="mt-16 border-t border-border" data-testid="writing-list">
                {POSTS.map((post, i) => (
                    <Reveal key={post.slug} delay={0.05}>
                        <Link
                            to={`/writing/${post.slug}`}
                            data-testid={`writing-list-item-${post.slug}`}
                            className="group grid gap-4 border-b border-border py-10 transition-colors duration-200 hover:bg-secondary/40 md:grid-cols-12 md:items-baseline md:gap-8 md:px-4"
                        >
                            <span className="font-mono text-xs text-muted-foreground md:col-span-1">
                                {String(i + 1).padStart(2, "0")}
                            </span>
                            <div className="md:col-span-8">
                                <h2 className="font-display text-3xl font-semibold tracking-tight transition-colors duration-200 group-hover:text-primary md:text-4xl">
                                    {post.title}
                                </h2>
                                <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
                                    {post.excerpt}
                                </p>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {post.tags.map((t) => (
                                        <span key={t} className="border border-border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="flex items-center gap-4 font-mono text-xs text-muted-foreground md:col-span-3 md:justify-end">
                                <span>{new Date(post.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}</span>
                                <span className="h-px w-6 bg-border" />
                                <span>{readingTime(post.content)} min</span>
                                <ArrowUpRight size={16} className="text-primary transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </div>
                        </Link>
                    </Reveal>
                ))}
            </div>
        </div>
    </main>
);

export default Writing;
