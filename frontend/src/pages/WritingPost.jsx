import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import ReactMarkdown from "react-markdown";
import Reveal from "@/components/Reveal";
import Meta from "@/components/Meta";
import { getPost, readingTime } from "@/content/writing";

const WritingPost = () => {
    const { slug } = useParams();
    const post = getPost(slug);

    if (!post) {
        return (
            <main data-testid="writing-post-missing" className="mx-auto max-w-3xl px-5 pt-40 pb-32 text-center">
                <h1 className="font-display text-4xl font-semibold">Post not found.</h1>
                <Link to="/writing" data-testid="writing-post-back-link" className="mt-6 inline-block font-mono text-xs uppercase tracking-[0.2em] underline decoration-primary underline-offset-8">
                    Back to writing
                </Link>
            </main>
        );
    }

    return (
        <main data-testid="writing-post-page" className="pt-32 md:pt-40">
            <Meta title={post.title} description={post.excerpt} />
            <article className="mx-auto max-w-3xl px-5 pb-32">
                <Reveal>
                    <Link
                        to="/writing"
                        data-testid="writing-post-back-link"
                        className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors duration-200 hover:text-primary"
                    >
                        <ArrowLeft size={14} /> All writing
                    </Link>
                    <div className="mt-10 flex flex-wrap items-center gap-4 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                        <span>{new Date(post.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</span>
                        <span className="h-px w-8 bg-border" />
                        <span data-testid="writing-post-reading-time">{readingTime(post.content)} min read</span>
                    </div>
                    <h1 className="mt-6 font-display text-4xl font-semibold leading-tight tracking-tight md:text-5xl" data-testid="writing-post-title">
                        {post.title}
                    </h1>
                    <div className="mt-6 flex flex-wrap gap-2">
                        {post.tags.map((t) => (
                            <span key={t} className="border border-border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                                {t}
                            </span>
                        ))}
                    </div>
                    <div className="my-10 h-px bg-border" />
                </Reveal>
                <Reveal delay={0.1}>
                    <div className="prose-writing" data-testid="writing-post-content">
                        <ReactMarkdown>{post.content}</ReactMarkdown>
                    </div>
                </Reveal>
            </article>
        </main>
    );
};

export default WritingPost;
