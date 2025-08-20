import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Users, Calendar } from "lucide-react";

const experienceData = [
  {
    title: "Hackathon Participant",
    organization: "Various Tech Events",
    period: "2023 - Present",
    description: "Active participant in multiple hackathons, developing innovative solutions under time constraints and collaborating with diverse teams to solve real-world problems.",
    achievements: ["Multiple hackathon wins", "Innovative AI/ML solutions", "Team leadership experience"],
    icon: Trophy
  },
  {
    title: "NCC Cadet",
    organization: "National Cadet Corps",
    period: "2022 - 2024",
    description: "Served as an active member of NCC, developing leadership skills, discipline, and teamwork. Participated in various training programs and community service activities.",
    achievements: ["A, B, C Certificate holder", "Filmmaking award winner", "Leadership training"],
    icon: Users
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20">
      <div className="section-container">
        <div className="animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 gradient-text">
            Experience & Leadership
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            My journey of growth through competitions and service
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-accent/30"></div>

              {experienceData.map((experience, index) => {
                const IconComponent = experience.icon;
                return (
                  <div 
                    key={experience.title}
                    className={`relative flex items-center mb-12 ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-accent rounded-full flex items-center justify-center border-4 border-background z-10">
                      <IconComponent className="w-4 h-4 text-white" />
                    </div>

                    {/* Content card */}
                    <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-8 md:ml-0' : 'md:ml-8 md:mr-0'} md:w-1/2`}>
                      <Card className="animate-slide-up project-card">
                        <CardHeader>
                          <div className="flex items-center gap-2 mb-2">
                            <Calendar className="w-4 h-4 text-accent" />
                            <span className="text-sm text-accent font-medium">{experience.period}</span>
                          </div>
                          <CardTitle className="text-xl">{experience.title}</CardTitle>
                          <p className="text-accent font-medium">{experience.organization}</p>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground mb-4 leading-relaxed">
                            {experience.description}
                          </p>
                          <div className="space-y-2">
                            <p className="text-sm font-medium text-foreground/80">Key Achievements:</p>
                            <div className="flex flex-wrap gap-2">
                              {experience.achievements.map((achievement) => (
                                <Badge key={achievement} variant="secondary" className="text-xs">
                                  {achievement}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;