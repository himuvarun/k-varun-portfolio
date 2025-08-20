import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const certificationsData = [
  {
    title: "NCC 'A' Certificate",
    issuer: "National Cadet Corps",
    date: "2022",
    description: "Basic military training and leadership development program completion",
    credentialId: "NCC-A-2022",
    verifyLink: "#"
  },
  {
    title: "NCC 'B' Certificate", 
    issuer: "National Cadet Corps",
    date: "2023",
    description: "Intermediate level training in military tactics and advanced leadership skills",
    credentialId: "NCC-B-2023",
    verifyLink: "#"
  },
  {
    title: "NCC 'C' Certificate",
    issuer: "National Cadet Corps", 
    date: "2024",
    description: "Advanced level certification with specialization in team leadership and strategic planning",
    credentialId: "NCC-C-2024",
    verifyLink: "#"
  },
  {
    title: "Hackathon Winner Certification",
    issuer: "TechFest 2023",
    date: "2023",
    description: "Recognition for developing innovative AI solution in 48-hour coding challenge",
    credentialId: "TF-WIN-2023",
    verifyLink: "#"
  },
  {
    title: "AI/ML Specialization",
    issuer: "Online Learning Platform",
    date: "2023",
    description: "Comprehensive certification in machine learning algorithms and deep learning frameworks",
    credentialId: "AIML-2023",
    verifyLink: "#"
  },
  {
    title: "Data Science Fundamentals",
    issuer: "Professional Institute",
    date: "2022", 
    description: "Foundation certification covering statistical analysis and data visualization techniques",
    credentialId: "DS-FUND-2022",
    verifyLink: "#"
  }
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-20 bg-muted/30">
      <div className="section-container">
        <div className="animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 gradient-text">
            Certifications & Credentials
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Professional certifications and credentials that validate my expertise
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificationsData.map((cert, index) => (
              <Card 
                key={cert.title} 
                className="animate-scale-in project-card group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                      <Award className="w-6 h-6 text-accent group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      <Calendar className="w-3 h-3 mr-1" />
                      {cert.date}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg leading-tight">{cert.title}</CardTitle>
                  <p className="text-sm text-accent font-medium">{cert.issuer}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {cert.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs text-muted-foreground">Credential ID:</p>
                      <p className="text-sm font-mono bg-muted/50 px-2 py-1 rounded text-foreground/80">
                        {cert.credentialId}
                      </p>
                    </div>
                    
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="w-full"
                      onClick={() => window.open(cert.verifyLink, '_blank')}
                    >
                      <ExternalLink className="w-3 h-3 mr-2" />
                      Verify Certificate
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

export default CertificationsSection;