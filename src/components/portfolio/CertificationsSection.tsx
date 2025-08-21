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
    verifyLink: "https://drive.google.com/file/d/1Z20FkABDQyM5zZ7obDB629uSKM-XT8zh/view?usp=sharing"
  },
  {
    title: "NCC 'B' Certificate", 
    issuer: "National Cadet Corps",
    date: "2023",
    description: "Intermediate level training in military tactics and advanced leadership skills",
    credentialId: "NCC-B-2023",
    verifyLink: "https://drive.google.com/file/d/1NBV53PuTTAkV0mLBE137zE7RSlhgg_wx/view?usp=sharing"
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
    title: "MATLAB Onramp",
    issuer: "MathWorks",
    date: "2023",
    description: "Interactive introduction to practical MATLAB programming and problem-solving techniques",
    credentialId: "MATLAB-2023",
    verifyLink: "https://drive.google.com/file/d/1Dh1zcce_8Q1IDaq1yiHhmyjKpEQltGe2/view?usp=sharing"
  },
  {
    title: "Getting Started with Enterprise-grade AI in IBM",
    issuer: "IBM",
    date: "2023",
    description: "Enterprise AI solutions and implementation strategies using IBM Watson and cloud technologies",
    credentialId: "IBM-AI-2023",
    verifyLink: "https://drive.google.com/file/d/1lw3wP1pRgXBew0u1S37JEx2naW9o2LTm/view?usp=sharing"
  },
  {
    title: "Hackathon Winner Certificate",
    issuer: "Competition Authority",
    date: "2023",
    description: "Recognition for developing innovative solutions in competitive programming challenge",
    credentialId: "HACK-WIN-2023",
    verifyLink: "https://drive.google.com/file/d/1q4SLGHnPWai6E2t1AtRK1D6ZRuFdQQFC/view?usp=sharing"
  },
  {
    title: "IT-ITeS Sector Skills Council NASSCOM",
    issuer: "NASSCOM",
    date: "2023",
    description: "Industry-recognized certification for IT and software development skills",
    credentialId: "NASSCOM-2023",
    verifyLink: "https://drive.google.com/file/d/1rzCcxMTYHNXQQxVSot5yFsOHASMAEH1u/view?usp=sharing"
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