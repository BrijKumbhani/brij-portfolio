import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";
import Logo from "@/components/Logo";

const Footer = () => (
    <footer data-testid="site-footer" className="border-t border-border">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-12 md:px-10">
            <div className="md:col-span-5">
                <div className="flex items-center gap-3">
                    <Logo />
                    <span className="font-display text-xl font-semibold tracking-tight">Brij Kumbhani</span>
                </div>
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
                    Data Scientist. MSc Data Science, University of Greenwich.
                    Open to UK part-time roles now, full-time from September 2027.
                </p>
            </div>
            <div className="md:col-span-4">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Index</p>
                <ul className="mt-4 space-y-2 text-sm">
                    <li><Link to="/#work" data-testid="footer-work-link" className="transition-colors duration-200 hover:text-primary">Projects</Link></li>
                    <li><Link to="/writing" data-testid="footer-writing-link" className="transition-colors duration-200 hover:text-primary">Writing</Link></li>
                    <li><Link to="/#about" data-testid="footer-about-link" className="transition-colors duration-200 hover:text-primary">About</Link></li>
                    <li><a href="/Brij_Kumbhani_CV.pdf" download data-testid="footer-cv-link" className="transition-colors duration-200 hover:text-primary">Download CV</a></li>
                </ul>
            </div>
            <div className="md:col-span-3">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Elsewhere</p>
                <div className="mt-4 flex gap-3">
                    <a href="mailto:brijkumbhani101@gmail.com" data-testid="footer-email-link" aria-label="Email" className="border border-border p-2.5 transition-colors duration-200 hover:border-primary hover:text-primary">
                        <Mail size={16} />
                    </a>
                    <a href="https://github.com/BrijKumbhani" target="_blank" rel="noopener noreferrer" data-testid="footer-github-link" aria-label="GitHub" className="border border-border p-2.5 transition-colors duration-200 hover:border-primary hover:text-primary">
                        <Github size={16} />
                    </a>
                    <a href="https://www.linkedin.com/in/brij-kumbhani/" target="_blank" rel="noopener noreferrer" data-testid="footer-linkedin-link" aria-label="LinkedIn" className="border border-border p-2.5 transition-colors duration-200 hover:border-primary hover:text-primary">
                        <Linkedin size={16} />
                    </a>
                </div>
            </div>
        </div>
        <div className="border-t border-border">
            <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 font-mono text-xs text-muted-foreground md:flex-row md:items-center md:justify-between md:px-10">
                <span data-testid="footer-copyright">© {new Date().getFullYear()} Brij Kumbhani</span>
                <span>London, United Kingdom · GMT</span>
            </div>
        </div>
    </footer>
);

export default Footer;
