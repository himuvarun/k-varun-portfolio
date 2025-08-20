import HeroSection from "@/components/portfolio/HeroSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import FeaturedWorksSection from "@/components/portfolio/FeaturedWorksSection";
import AboutSection from "@/components/portfolio/AboutSection";
import AchievementsSection from "@/components/portfolio/AchievementsSection";
import CreativeCornerSection from "@/components/portfolio/CreativeCornerSection";
import SocialLinksSection from "@/components/portfolio/SocialLinksSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        <HeroSection />
        <ProjectsSection />
        <FeaturedWorksSection />
        <AboutSection />
        <AchievementsSection />
        <CreativeCornerSection />
        <SocialLinksSection />
      </main>
    </div>
  );
};

export default Index;
