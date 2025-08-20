import { Youtube, Instagram, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const SocialLinksSection = () => {
  const socialLinks = [
    {
      icon: Youtube,
      url: "https://youtube.com/@varun",
      color: "text-red-600 hover:text-red-700"
    },
    {
      icon: Instagram,
      url: "https://instagram.com/varun",
      color: "text-pink-600 hover:text-pink-700"
    },
    {
      icon: Twitter,
      url: "https://twitter.com/varun",
      color: "text-blue-500 hover:text-blue-600"
    },
    {
      icon: Linkedin,
      url: "https://linkedin.com/in/varun-himu-66343a317",
      color: "text-blue-700 hover:text-blue-800"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-8 py-8">
      <div className="flex justify-center gap-6">
        {socialLinks.map((social, index) => {
          const IconComponent = social.icon;
          return (
            <Button
              key={index}
              variant="ghost"
              size="icon"
              className={`w-10 h-10 ${social.color} hover:bg-gray-100`}
              onClick={() => window.open(social.url, '_blank')}
            >
              <IconComponent className="w-5 h-5" />
            </Button>
          );
        })}
      </div>
      
      <p className="text-center text-xs text-gray-500 mt-4">
        Copyright ©2024, All rights reserved.
      </p>
    </div>
  );
};

export default SocialLinksSection;