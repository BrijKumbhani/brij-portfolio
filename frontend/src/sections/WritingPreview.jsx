import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import POSTS, { readingTime } from "@/content/writing";

const WritingPreview = () => (
    <section data-testid="writing-preview-section" className="border-b border-border">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
            <Reveal>
                <div className="flex flex-wrap items-end justify-between gap-6">
                    <div>
                        <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">03 — Writing</p>
                        <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
                            Notes from the <em className="text-primary">notebook</em>.
                        </h2>
                    </div>
                    <Link
                        to="/writing"
                        data-testid="writing-view-all-link"
                        className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground underline decoration-primary underline-offset-8 transition-colors duration-200 hover:text-primary"
                    >
                        All posts <ArrowUpRight size={14} />
                    </Link>
                </div>
            </Reveal>

            <div className="mt-14 grid gap-px border border-border bg-border md:grid-cols-2" data-testid="writing-preview-list">
                {POSTS.map((post) => (
                    <Link
                        key={post.slug}
                        to={`/writing/${post.slug}`}
                        data-testid={`writing-preview-card-${post.slug}`}
                        className="group bg-background p-8 transition-colors duration-200 hover:bg-secondary/50 md:p-10"
                    >
                        <div className="flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                            <span>{new Date(post.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}</span>
                            <span className="h-px w-8 bg-border" />
                            <span>{readingTime(post.content)} min read</span>
                        </div>
                        <h3 className="mt-4 font-display text-2xl font-semibold leading-snug tracking-tight transition-colors duration-200 group-hover:text-primary md:text-3xl">
                            {post.title}
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
                        <span className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-primary">
                            Read <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    </section>
);

export default WritingPreview;
