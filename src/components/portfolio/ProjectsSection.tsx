import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projectsData = [
  {
    title: "Athletic Media Booking Website",
    description: "This platform is social media based on sports. The platform allows users to connect with coaches who can provide coaching for sports.",
    features: [
      "User-friendly interface.",
      "Full-stack app development with Django.",
      "Used state-of-the art features like Chat Notifications, Authentication, and more to create a user-friendly experience."
    ],
    demoLink: "#",
    githubLink: "#"
  },
  {
    title: "Voice-Controlled Lift Operator",
    description: "This project is based on NLP and IoT. Using Voice X-Lift Control Lift Operations is a device developed using the principles for smartphones to interact with elevator systems through voice commands instead of pressing traditional elevator floor and control buttons.",
    features: [
      "Simple voice X-lift with an Arduino.",
      "Developed using the principles for smartphones to interact with elevator systems through voice commands instead of pressing traditional.",
      "Used Google Maps API, Flask API, Android.",
      "Enhanced its Tech."
    ],
    demoLink: "#",
    githubLink: "#"
  }
];

const ProjectsSection = () => {
  return (
    <div className="max-w-4xl mx-auto px-8 py-8">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectsData.map((project, index) => (
          <div key={project.title} className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="font-bold text-gray-900 mb-3">{project.title}</h3>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              {project.description}
            </p>
            
            <ul className="text-sm text-gray-600 mb-4 space-y-1">
              {project.features.map((feature, idx) => (
                <li key={idx} className="leading-relaxed">{feature}</li>
              ))}
            </ul>
            
            <Button 
              size="sm"
              className="bg-primary hover:bg-primary/90 text-white px-4 py-1 text-sm"
              onClick={() => window.open(project.demoLink, '_blank')}
            >
              View Project
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;