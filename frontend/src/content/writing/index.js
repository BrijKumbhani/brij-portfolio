import etlPipelineLessons from "./etl-pipeline-lessons";
import netflixEdaFindings from "./netflix-eda-findings";
import mentalHealthTechEda from "./mental-health-tech-eda";

const POSTS = [etlPipelineLessons, netflixEdaFindings, mentalHealthTechEda].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
);

export const readingTime = (content) => {
    const words = content.trim().split(/\s+/).length;
    return Math.max(1, Math.round(words / 200));
};

export const getPost = (slug) => POSTS.find((p) => p.slug === slug);

export default POSTS;
