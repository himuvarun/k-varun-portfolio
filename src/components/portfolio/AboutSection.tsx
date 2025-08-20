import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="section-container">
        <div className="animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 gradient-text">
            About Me
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Get to know more about my journey, passion, and expertise
          </p>

          <Card className="max-w-4xl mx-auto animate-slide-up">
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                <User className="w-8 h-8 text-accent" />
              </div>
              <CardTitle className="text-2xl">Passionate AI/ML Engineer</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <p className="text-foreground/80 leading-relaxed mb-6">
                I am K Varun, an enthusiastic Artificial Intelligence and Machine Learning Engineer 
                with a deep passion for leveraging cutting-edge technology to solve real-world challenges. 
                My journey in the tech world has been driven by curiosity and a relentless pursuit of innovation.
              </p>
              
              <p className="text-foreground/80 leading-relaxed mb-6">
                With a strong foundation in programming languages like Python, Java, and C++, I specialize 
                in developing intelligent systems using frameworks such as TensorFlow, PyTorch, and Scikit-learn. 
                My expertise spans across machine learning algorithms, deep learning architectures, natural 
                language processing, and computer vision.
              </p>

              <p className="text-foreground/80 leading-relaxed">
                Beyond technical skills, I bring valuable experience from hackathon participations and 
                leadership roles in NCC, where I've honed my problem-solving abilities and collaborative mindset. 
                I believe in continuous learning and staying updated with the latest technological advancements 
                to deliver impactful solutions.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;