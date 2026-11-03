import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Projects from "@/sections/Projects";
import WritingPreview from "@/sections/WritingPreview";
import Contact from "@/sections/Contact";
import SkillsMarquee from "@/components/SkillsMarquee";
import Meta from "@/components/Meta";

const Home = () => (
    <main data-testid="home-page">
        <Meta />
        <Hero />
        <SkillsMarquee />
        <About />
        <Projects />
        <WritingPreview />
        <Contact />
    </main>
);

export default Home;
