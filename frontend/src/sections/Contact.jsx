import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Send } from "lucide-react";
import Reveal from "@/components/Reveal";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const initial = { name: "", email: "", message: "", company: "" };

const Contact = () => {
    const [form, setForm] = useState(initial);
    const [errors, setErrors] = useState({});
    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);

    const validate = () => {
        const e = {};
        if (form.name.trim().length < 2) e.name = "Please enter your name.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Please enter a valid email.";
        if (form.message.trim().length < 10) e.message = "Message should be at least 10 characters.";
        setErrors(e);
        return Object.keys(e).length === 0;
    };

    const submit = async (ev) => {
        ev.preventDefault();
        if (!validate()) return;
        setSending(true);
        try {
            await axios.post(`${API}/contact`, form);
            setSent(true);
            setForm(initial);
            toast.success("Message sent — I'll get back to you soon.");
        } catch (err) {
            const detail = err?.response?.data?.detail;
            toast.error(typeof detail === "string" ? detail : "Something went wrong. Please email me directly.");
        } finally {
            setSending(false);
        }
    };

    const field = (key) => ({
        value: form[key],
        onChange: (e) => setForm((f) => ({ ...f, [key]: e.target.value })),
    });

    return (
        <section id="contact" data-testid="contact-section" className="border-b border-border">
            <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 md:grid-cols-12 md:px-10 md:py-32">
                <div className="md:col-span-5">
                    <Reveal>
                        <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">04 — Contact</p>
                        <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
                            Let's build the <em className="text-primary">next dataset</em> together.
                        </h2>
                        <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
                            Hiring for a part-time data role now, or planning a graduate hire for
                            late 2027? Send a note — every message lands straight in my inbox.
                        </p>
                        <a
                            href="mailto:brijkumbhani101@gmail.com"
                            data-testid="contact-direct-email"
                            className="mt-6 inline-block font-mono text-sm tracking-wide underline decoration-primary underline-offset-8 transition-colors duration-200 hover:text-primary"
                        >
                            brijkumbhani101@gmail.com
                        </a>
                    </Reveal>
                </div>

                <div className="md:col-span-7">
                    <Reveal delay={0.1}>
                        {sent ? (
                            <div data-testid="contact-success-message" className="border border-primary bg-secondary/40 p-10">
                                <p className="font-display text-3xl font-semibold">Message received.</p>
                                <p className="mt-3 text-muted-foreground">
                                    Thanks for reaching out — I reply within a day or two. You can also
                                    email me directly any time.
                                </p>
                                <button
                                    type="button"
                                    data-testid="contact-send-another-button"
                                    onClick={() => setSent(false)}
                                    className="mt-6 border border-foreground px-5 py-2.5 font-mono text-xs uppercase tracking-[0.2em] transition-colors duration-200 hover:bg-foreground hover:text-background"
                                >
                                    Send another
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={submit} noValidate data-testid="contact-form" className="space-y-8">
                                <input
                                    type="text"
                                    tabIndex={-1}
                                    autoComplete="off"
                                    aria-hidden="true"
                                    className="hidden"
                                    {...field("company")}
                                />
                                <div className="grid gap-8 md:grid-cols-2">
                                    <div>
                                        <label htmlFor="contact-name" className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                                            Name
                                        </label>
                                        <input
                                            id="contact-name"
                                            data-testid="contact-name-input"
                                            type="text"
                                            placeholder="Ada Lovelace"
                                            className="mt-2 w-full border-0 border-b border-border bg-transparent pb-3 text-base outline-none transition-colors duration-200 placeholder:text-muted-foreground/50 focus:border-primary"
                                            {...field("name")}
                                        />
                                        {errors.name && <p data-testid="contact-name-error" className="mt-2 text-sm text-destructive">{errors.name}</p>}
                                    </div>
                                    <div>
                                        <label htmlFor="contact-email" className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                                            Email
                                        </label>
                                        <input
                                            id="contact-email"
                                            data-testid="contact-email-input"
                                            type="email"
                                            placeholder="you@company.co.uk"
                                            className="mt-2 w-full border-0 border-b border-border bg-transparent pb-3 text-base outline-none transition-colors duration-200 placeholder:text-muted-foreground/50 focus:border-primary"
                                            {...field("email")}
                                        />
                                        {errors.email && <p data-testid="contact-email-error" className="mt-2 text-sm text-destructive">{errors.email}</p>}
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="contact-message" className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                                        Message
                                    </label>
                                    <textarea
                                        id="contact-message"
                                        data-testid="contact-message-input"
                                        rows={5}
                                        placeholder="Tell me about the role, the data, and the decision you're trying to make…"
                                        className="mt-2 w-full resize-y border-0 border-b border-border bg-transparent pb-3 text-base outline-none transition-colors duration-200 placeholder:text-muted-foreground/50 focus:border-primary"
                                        {...field("message")}
                                    />
                                    {errors.message && <p data-testid="contact-message-error" className="mt-2 text-sm text-destructive">{errors.message}</p>}
                                </div>
                                <button
                                    type="submit"
                                    data-testid="contact-submit-button"
                                    disabled={sending}
                                    className="group flex items-center gap-3 bg-primary px-8 py-4 font-mono text-xs uppercase tracking-[0.2em] text-primary-foreground transition-colors duration-200 hover:bg-foreground hover:text-background disabled:cursor-not-allowed disabled:opacity-60"
                                >
                                    {sending ? "Sending…" : "Send message"}
                                    <Send size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                                </button>
                            </form>
                        )}
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default Contact;
