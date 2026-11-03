import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "@/components/Logo";
import ThemeToggle from "@/components/ThemeToggle";
import { scrollToId } from "@/App";

const LINKS = [
    { label: "Work", hash: "#work", testid: "nav-work-link" },
    { label: "About", hash: "#about", testid: "nav-about-link" },
    { label: "Writing", path: "/writing", testid: "nav-writing-link" },
    { label: "Contact", hash: "#contact", testid: "nav-contact-link" },
];

const Nav = () => {
    const [open, setOpen] = useState(false);
    const { pathname } = useLocation();
    const navigate = useNavigate();

    const goHash = (e, hash) => {
        e.preventDefault();
        setOpen(false);
        if (pathname !== "/") {
            navigate("/" + hash);
        } else {
            scrollToId(hash);
        }
    };

    return (
        <header
            data-testid="site-nav"
            className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md"
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-10">
                <Link to="/" data-testid="nav-home-link" className="flex items-center gap-3" onClick={() => setOpen(false)}>
                    <Logo />
                    <span className="font-display text-lg font-semibold leading-none tracking-tight">
                        Brij Kumbhani
                    </span>
                </Link>

                <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
                    {LINKS.map((l) =>
                        l.path ? (
                            <Link
                                key={l.label}
                                to={l.path}
                                data-testid={l.testid}
                                className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors duration-200 hover:text-primary"
                            >
                                {l.label}
                            </Link>
                        ) : (
                            <a
                                key={l.label}
                                href={l.hash}
                                data-testid={l.testid}
                                onClick={(e) => goHash(e, l.hash)}
                                className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors duration-200 hover:text-primary"
                            >
                                {l.label}
                            </a>
                        )
                    )}
                    <a
                        href="/Brij_Kumbhani_CV.pdf"
                        download
                        data-testid="nav-cv-button"
                        className="border border-foreground px-4 py-2 font-mono text-xs uppercase tracking-[0.2em] transition-colors duration-200 hover:bg-foreground hover:text-background"
                    >
                        CV
                    </a>
                    <ThemeToggle />
                </nav>

                <div className="flex items-center gap-3 md:hidden">
                    <ThemeToggle />
                    <button
                        type="button"
                        data-testid="nav-menu-toggle"
                        aria-label="Toggle menu"
                        onClick={() => setOpen((o) => !o)}
                        className="border border-border p-2"
                    >
                        {open ? <X size={18} /> : <Menu size={18} />}
                    </button>
                </div>
            </div>

            {open && (
                <nav
                    data-testid="mobile-menu"
                    className="border-t border-border bg-background px-5 py-6 md:hidden"
                    aria-label="Mobile"
                >
                    <div className="flex flex-col gap-5">
                        {LINKS.map((l) =>
                            l.path ? (
                                <Link
                                    key={l.label}
                                    to={l.path}
                                    data-testid={`mobile-${l.testid}`}
                                    onClick={() => setOpen(false)}
                                    className="font-display text-2xl font-medium"
                                >
                                    {l.label}
                                </Link>
                            ) : (
                                <a
                                    key={l.label}
                                    href={l.hash}
                                    data-testid={`mobile-${l.testid}`}
                                    onClick={(e) => goHash(e, l.hash)}
                                    className="font-display text-2xl font-medium"
                                >
                                    {l.label}
                                </a>
                            )
                        )}
                        <a
                            href="/Brij_Kumbhani_CV.pdf"
                            download
                            data-testid="mobile-nav-cv-button"
                            className="mt-2 inline-block w-fit border border-foreground px-5 py-2.5 font-mono text-xs uppercase tracking-[0.2em]"
                        >
                            Download CV
                        </a>
                    </div>
                </nav>
            )}
        </header>
    );
};

export default Nav;
