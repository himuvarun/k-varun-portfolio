import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Linkedin, Github, Code } from "lucide-react";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "kvarun.aiml@gmail.com",
    link: "mailto:kvarun.aiml@gmail.com"
  },
  {
    icon: Phone,
    label: "Phone", 
    value: "+91 98765 43210",
    link: "tel:+919876543210"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "India",
    link: "#"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/kvarun",
    link: "https://linkedin.com/in/kvarun"
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/kvarun",
    link: "https://github.com/kvarun"
  },
  {
    icon: Code,
    label: "LeetCode",
    value: "leetcode.com/kvarun",
    link: "https://leetcode.com/kvarun"
  }
];

const ContactSection = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactForm>();
  const { toast } = useToast();

  const onSubmit = (data: ContactForm) => {
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', data);
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    reset();
  };

  return (
    <section id="contact" className="py-20">
      <div className="section-container">
        <div className="animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 gradient-text">
            Let's Connect
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Ready to collaborate or discuss opportunities? I'd love to hear from you!
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="animate-slide-up">
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-4 mb-8">
                {contactInfo.map((info) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={info.label} className="flex items-center gap-4 group">
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                        <IconComponent className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        <a 
                          href={info.link}
                          className="text-foreground hover:text-accent transition-colors duration-300 font-medium"
                          {...(info.link.startsWith('http') && { target: "_blank", rel: "noopener noreferrer" })}
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Social Media */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  <Button size="icon" variant="outline" className="hover:bg-accent hover:text-white transition-colors duration-300">
                    <Linkedin className="w-5 h-5" />
                  </Button>
                  <Button size="icon" variant="outline" className="hover:bg-accent hover:text-white transition-colors duration-300">
                    <Github className="w-5 h-5" />
                  </Button>
                  <Button size="icon" variant="outline" className="hover:bg-accent hover:text-white transition-colors duration-300">
                    <Code className="w-5 h-5" />
                  </Button>
                  <Button size="icon" variant="outline" className="hover:bg-accent hover:text-white transition-colors duration-300">
                    <Mail className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="animate-slide-up">
              <CardHeader>
                <CardTitle className="text-xl">Send me a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      {...register("name", { required: "Name is required" })}
                      className="mt-1"
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="text-sm text-destructive mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email", { 
                        required: "Email is required",
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: "Invalid email address"
                        }
                      })}
                      className="mt-1"
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      {...register("message", { required: "Message is required" })}
                      className="mt-1 min-h-[120px]"
                      placeholder="Tell me about your project or just say hello..."
                    />
                    {errors.message && (
                      <p className="text-sm text-destructive mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;