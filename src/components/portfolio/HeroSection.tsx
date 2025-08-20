import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-accent"
        style={{
          background: 'var(--gradient-hero)'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 section-container text-center text-white">
        <div className="animate-fade-in">
          {/* Profile Image */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/20 overflow-hidden">
            <img 
              src="/lovable-uploads/7e168cfe-522c-485e-95d7-857ccf1ca3f6.png" 
              alt="K Varun - AI/ML Engineer"
              className="w-full h-full object-cover object-top scale-110"
            />
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-slide-up">
            K VARUN
          </h1>

          {/* Title */}
          <h2 className="text-xl md:text-2xl font-medium mb-6 text-white/90 animate-slide-up">
            Artificial Intelligence & Machine Learning Engineer
          </h2>

          {/* Tagline */}
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-white/80 animate-fade-in">
            Passionate about solving real-world problems with AI and innovative technology.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-3"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
            
            <div className="flex gap-4">
              <Button 
                variant="outline" 
                size="icon"
                className="border-white/30 text-white hover:bg-white/10 hover:border-white/50"
              >
                <Mail className="w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="icon"
                className="border-white/30 text-white hover:bg-white/10 hover:border-white/50"
              >
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="icon"
                className="border-white/30 text-white hover:bg-white/10 hover:border-white/50"
              >
                <Github className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/40 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;