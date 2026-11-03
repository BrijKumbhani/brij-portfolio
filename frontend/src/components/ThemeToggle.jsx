import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
    const [dark, setDark] = useState(() =>
        document.documentElement.classList.contains("dark")
    );

    useEffect(() => {
        document.documentElement.classList.toggle("dark", dark);
        try {
            localStorage.setItem("theme", dark ? "dark" : "light");
        } catch (e) {}
    }, [dark]);

    return (
        <button
            type="button"
            data-testid="theme-toggle-button"
            onClick={() => setDark((d) => !d)}
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            className="flex items-center gap-2 border border-border px-3 py-2 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground transition-colors duration-200 hover:border-primary hover:text-primary"
        >
            {dark ? <Sun size={14} /> : <Moon size={14} />}
            <span className="hidden sm:inline">{dark ? "Light" : "Dark"}</span>
        </button>
    );
};

export default ThemeToggle;
