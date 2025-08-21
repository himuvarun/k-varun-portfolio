import { Button } from "@/components/ui/button";
import { Download, ArrowUp } from "lucide-react";
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  const currentYear = new Date().getFullYear();
  const navLinks = [{
    name: "About",
    href: "#about"
  }, {
    name: "Skills",
    href: "#skills"
  }, {
    name: "Projects",
    href: "#projects"
  }, {
    name: "Experience",
    href: "#experience"
  }, {
    name: "Education",
    href: "#education"
  }, {
    name: "Achievements",
    href: "#achievements"
  }, {
    name: "Certifications",
    href: "#certifications"
  }, {
    name: "Contact",
    href: "#contact"
  }];
  return <footer className="bg-primary text-primary-foreground py-12">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">K VARUN</h3>
            <p className="text-primary-foreground/80 mb-4">
              AI/ML Engineer passionate about solving real-world problems with innovative technology.
            </p>
            <Button 
              variant="outline" 
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              onClick={() => window.open("https://drive.google.com/file/d/159jLIwMV7rUqPqT-aAVvCkPzvXC3oXtA/view?usp=sharing", '_blank')}
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map(link => <a key={link.name} href={link.href} className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300 text-sm">
                  {link.name}
                </a>)}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-primary-foreground/80 text-sm">
              <p>📧 himuvarun@gmail.com</p>
              <p>📱 +91 98808 26377</p>
              <p>📍 India</p>
              <p>💼 LinkedIn: linkedin.com/in/kvarun</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} K Varun. All rights reserved.
            </p>
            
            <Button variant="ghost" size="sm" onClick={scrollToTop} className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10 mt-4 md:mt-0">
              <ArrowUp className="w-4 h-4 mr-2" />
              Back to Top
            </Button>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;