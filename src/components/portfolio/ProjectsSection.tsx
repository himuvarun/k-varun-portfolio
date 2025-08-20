import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projectsData = [
  {
    title: "AI-Powered Healthcare Diagnosis System",
    description: "Developed a machine learning model using TensorFlow and computer vision techniques to assist in medical image analysis and diagnosis. Achieved 95% accuracy in detecting anomalies from X-ray images.",
    techStack: ["Python", "TensorFlow", "OpenCV", "Flask", "React"],
    demoLink: "#",
    githubLink: "#"
  },
  {
    title: "Natural Language Processing Chatbot",
    description: "Built an intelligent conversational AI using NLTK and deep learning models. Implemented sentiment analysis and context understanding for enhanced user interactions.",
    techStack: ["Python", "NLTK", "PyTorch", "FastAPI", "JavaScript"],
    demoLink: "#",
    githubLink: "#"
  },
  {
    title: "Predictive Analytics Dashboard",
    description: "Created a comprehensive data analytics platform that processes large datasets and provides real-time insights using machine learning algorithms for business decision-making.",
    techStack: ["Python", "Scikit-learn", "Pandas", "D3.js", "PostgreSQL"],
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