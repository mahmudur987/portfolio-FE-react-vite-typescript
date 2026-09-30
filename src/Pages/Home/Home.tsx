import Hero from "@/components/Home/Hero";
import HomeSkills from "@/components/Home/HomeSkills";
import CTA from "@/components/Home/CTA";
import HomeProjects from "@/components/Home/HomeProjects";
import AboutSection from "@/components/Home/AboutMe";
import ExperiencePage from "@/components/Experience/Experience";

const Home = () => {
  return (
    <section>
      <Hero />
      {/* About Section */}

      <AboutSection />

      {/* Skills */}
      <HomeSkills />

      {/* experience */}

      <ExperiencePage />

      {/* Featured Projects */}
      <HomeProjects />

      {/* CTA */}
      <CTA />
    </section>
  );
};

export default Home;
