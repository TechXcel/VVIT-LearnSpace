import FeaturedProjects from "@/components/landing/FeaturedProjects";
import Features from "@/components/landing/Features";
import Hero from "@/components/landing/Hero";
import Team from "@/components/landing/Team";
import TechStack from "@/components/landing/TechStack";
import Testimonials from "@/components/landing/Testimonials";

const Landing = () => {
  return (
    <div className="relative flex flex-col bg-background">
      <Hero />
      <Features />
      <FeaturedProjects />
      <TechStack />
      <Testimonials />
      <Team />
    </div>
  );
};

export default Landing;
