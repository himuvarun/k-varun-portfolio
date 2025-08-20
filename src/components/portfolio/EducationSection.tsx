import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
const educationData = [{
  degree: "Bachelor of Engineering",
  field: "Artificial Intelligence & Machine Learning",
  institution: "Ballari Institute of Technology and Management (BITM)",
  location: "Ballari, India",
  period: "2021 - Present",
  description: "Currently pursuing Bachelor of Engineering in Artificial Intelligence & Machine Learning with focus on deep learning, neural networks, computer vision, and data science. Actively engaged in AI research projects and technical competitions.",
  gpa: "8.24 CGPA"
}, {
  degree: "Pre-University Course",
  field: "Physics, Chemistry, Mathematics, Biology (PCMB)",
  institution: "BIPU",
  location: "Ballari, India",
  period: "2019 - 2021",
  description: "Completed Pre-University education with strong foundation in science and mathematics, preparing for engineering studies with emphasis on analytical thinking and problem-solving skills.",
  gpa: "83%"
}, {
  degree: "Secondary School Certificate",
  field: "10th Standard",
  institution: "Kendriya Vidyalaya",
  location: "Ballari, India",
  period: "2018 - 2019",
  description: "Completed secondary education with strong academic performance, developing fundamental knowledge across all subjects and establishing a solid educational foundation.",
  gpa: "80%"
}];
const EducationSection = () => {
  return <section id="education" className="py-20 bg-muted/30">
      <div className="section-container">
        <div className="animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 gradient-text">
            Educational Background
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            My academic journey and continuous learning path
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-accent/30"></div>

              {educationData.map((education, index) => <div key={education.degree} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-accent rounded-full flex items-center justify-center border-4 border-background z-10">
                    <GraduationCap className="w-4 h-4 text-white" />
                  </div>

                  {/* Content card */}
                  <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-8 md:ml-0' : 'md:ml-8 md:mr-0'} md:w-1/2`}>
                    <Card className="animate-slide-up project-card">
                      <CardHeader>
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar className="w-4 h-4 text-accent" />
                          <span className="text-sm text-accent font-medium">{education.period}</span>
                        </div>
                        
                        <p className="text-accent font-medium">{education.field}</p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          <span>{education.institution}, {education.location}</span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {education.description}
                        </p>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-foreground/80">Grade:</span>
                          <span className="text-sm font-semibold text-accent">{education.gpa}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default EducationSection;