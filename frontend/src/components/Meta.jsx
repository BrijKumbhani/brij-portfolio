import { useEffect } from "react";

const DEFAULT_TITLE = "Brij Kumbhani | Data Scientist & Engineer Portfolio";
const DEFAULT_DESC =
    "MSc Data Science student at University of Greenwich. Specialising in Python, SQL, Machine Learning, PowerBI, and Data Pipelines. Explore my projects.";

const setMeta = (attr, key, content) => {
    let el = document.head.querySelector(`meta[${attr}="${key}"]`);
    if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
    }
    el.setAttribute("content", content);
};

const Meta = ({ title, description }) => {
    const t = title ? `${title} | Brij Kumbhani` : DEFAULT_TITLE;
    const desc = description || DEFAULT_DESC;
    useEffect(() => {
        document.title = t;
        setMeta("name", "description", desc);
        setMeta("property", "og:title", t);
        setMeta("property", "og:description", desc);
        setMeta("property", "og:type", "website");
        setMeta("property", "og:image", `${window.location.origin}/og-image.png`);
        setMeta("name", "twitter:card", "summary_large_image");
        setMeta("name", "twitter:title", t);
        setMeta("name", "twitter:description", desc);
        setMeta("name", "twitter:image", `${window.location.origin}/og-image.png`);
    }, [t, desc]);
    return null;
};

export default Meta;
