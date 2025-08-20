import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Red Header Section */}
      <div className="h-32 bg-primary"></div>
      
      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-8 -mt-16 relative z-10">
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Profile Section */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
            <div className="flex-1">
              <h1 className="text-2xl font-normal text-gray-900 mb-2">
                Hi, I am K Varun,
              </h1>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Product Designer
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                An AI/ML enthusiast focusing technology, storytelling and design to 
                build meaningful products.
              </p>
              <Button 
                className="bg-primary hover:bg-primary/90 text-white px-6 py-2 text-sm font-medium"
                onClick={() => window.open('#', '_blank')}
              >
                View Resume
              </Button>
            </div>
            
            {/* Profile Image */}
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-gray-200">
              <img 
                src="/lovable-uploads/7e168cfe-522c-485e-95d7-857ccf1ca3f6.png" 
                alt="K Varun"
                className="w-full h-full object-cover object-top scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;