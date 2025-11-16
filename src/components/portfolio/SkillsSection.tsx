import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Brain, Settings, Users, Languages } from "lucide-react";

const skillsData = [
  {
    category: "Programming Languages",
    icon: Code2,
    skills: ["Python", "Java", "C++", "SQL", "R", "MATLAB"]
  },
  {
    category: "Frameworks & Libraries",
    icon: Database,
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "OpenCV", "Pandas", "NumPy", "React", "Node.js"]
  },
  {
    category: "AI/ML Concepts",
    icon: Brain,
    skills: ["Machine Learning", "Deep Learning", "Natural Language Processing", "Computer Vision", "Neural Networks"]
  },
  {
    category: "Tools & Technologies",
    icon: Settings,
    skills: ["Git", "Docker", "AWS", "Google Cloud", "Jupyter", "VS Code", "Linux", "MongoDB", "MySQL"]
  },
  {
    category: "Soft Skills",
    icon: Users,
    skills: ["Leadership", "Problem Solving", "Team Collaboration", "Project Management", "Communication", "Analytical Thinking"]
  },
  {
    category: "Languages",
    icon: Languages,
    skills: ["English", "Hindi", "Telugu", "Kannada"]
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20">
      <div className="section-container">
        <div className="animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 gradient-text">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            A comprehensive overview of my technical and professional capabilities
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsData.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card 
                  key={category.category} 
                  className="animate-scale-in hover:shadow-lg transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="text-center pb-4">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-accent/10 flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-accent" />
                    </div>
                    <CardTitle className="text-lg">{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <Badge 
                          key={skill} 
                          variant="secondary"
                          className="skill-badge"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;