import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User } from "lucide-react";

const AboutSection = () => {
  return (
    <div className="max-w-4xl mx-auto px-8 py-8">
      <h2 className="text-xl font-bold text-gray-900 mb-6">About me</h2>
      
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          I'm open-mind and enthusiastic & Machine Learning 
          Engineer. I like to take initiative, designing, coding and design.
        </p>
        
        <p className="text-sm font-semibold text-gray-900 mb-2">What Sets Me Apart:</p>
        
        <ul className="text-sm text-gray-600 space-y-1 mb-4">
          <li>• Strong foundation in Designing, Coding and good problem-solving abilities.</li>
          <li>• Curious about "Thinking Flow" (Book & YouTube & Instagram)</li>
          <li>• Interested in developing, coding and mind maps.</li>
          <li>• Participation in Hackathons & problem-solving competitions.</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutSection;