import About from "../sections/About";
import Certifications from "../sections/Certifications";
import Contact from "../sections/Contact";
import Education from "../sections/Education";
import Experience from "../sections/Experience";
import Hero from "../sections/Hero";
import Hobbies from "../sections/Hobbies";
import Projects from "../sections/Projects";
import Skills from "../sections/Skills";
import VSCodeInterface from "../vs-code/VSCodeInterface";
import Footer from "./Footer";
import Header from "./Header";

const MainLayout = () => {
    return (
        <div>
            <Header />
            <Hero />
            <VSCodeInterface />
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Education />
            <Certifications />
            <Hobbies />
            <Contact />
            <Footer />

        </div>
    );
};


export default MainLayout;