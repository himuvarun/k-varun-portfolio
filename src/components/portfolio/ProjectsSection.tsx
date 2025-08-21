import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projectsData = [
  {
    title: "Automated Drone Navigation",
    description: "Developed path following algorithm which later lands on destination. Using realtime camera access, work available on LinkedIn.",
    techStack: ["Python", "OpenCV", "Computer Vision", "Path Planning", "Drone Control"],
    demoLink: "#",
    githubLink: "#"
  },
  {
    title: "Athlete Media Booking System",
    description: "Working website which assists us to select any available athlete based on our requirement. Comprehensive booking platform for sports media coordination.",
    techStack: ["React", "Node.js", "MongoDB", "Express", "JavaScript"],
    demoLink: "#",
    githubLink: "#"
  },
  {
    title: "Voice Controlled Lift Operator",
    description: "Developed contactless lift operator that works on voice commands given by user. Using Flask and SQLAlchemy in Python language.",
    techStack: ["Python", "Flask", "SQLAlchemy", "Speech Recognition", "IoT"],
    demoLink: "#",
    githubLink: "#"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="section-container">
        <div className="animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 gradient-text">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Showcasing my technical expertise through innovative AI/ML solutions
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
              <Card 
                key={project.title} 
                className="project-card animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <p className="text-sm font-medium mb-2 text-foreground/80">Tech Stack:</p>
                    <div className="flex flex-wrap gap-1">
                      {project.techStack.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      className="flex-1"
                      onClick={() => window.open(project.demoLink, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => window.open(project.githubLink, '_blank')}
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;