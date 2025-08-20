import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Star, Film } from "lucide-react";

const achievementsData = [
  {
    title: "Hackathon Victory",
    description: "Won multiple hackathons by developing innovative AI/ML solutions under time constraints",
    category: "Competition",
    year: "2023-2024",
    icon: Trophy,
    color: "text-yellow-600"
  },
  {
    title: "NCC Filmmaking Award", 
    description: "Recognized for outstanding creative work in filmmaking during NCC activities",
    category: "Creative",
    year: "2023",
    icon: Film,
    color: "text-purple-600"
  },
  {
    title: "Youth Fest Recognition",
    description: "Received recognition for technical innovation and leadership in youth festival events",
    category: "Leadership",
    year: "2023",
    icon: Star,
    color: "text-blue-600"
  },
  {
    title: "Technical Excellence",
    description: "Consistently maintained high academic performance in AI/ML coursework",
    category: "Academic",
    year: "2021-2025",
    icon: Award,
    color: "text-green-600"
  }
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-20">
      <div className="section-container">
        <div className="animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 gradient-text">
            Achievements & Recognition
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Celebrating milestones and recognition earned through dedication and innovation
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievementsData.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <Card 
                  key={achievement.title} 
                  className="animate-scale-in project-card text-center group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                      <IconComponent className={`w-8 h-8 ${achievement.color} group-hover:scale-110 transition-transform duration-300`} />
                    </div>
                    <Badge variant="outline" className="w-fit mx-auto mb-2">
                      {achievement.category}
                    </Badge>
                    <CardTitle className="text-lg">{achievement.title}</CardTitle>
                    <p className="text-sm text-accent font-medium">{achievement.year}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {achievement.description}
                    </p>
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

export default AchievementsSection;