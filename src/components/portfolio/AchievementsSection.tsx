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
    <div className="max-w-4xl mx-auto px-8 py-8">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Achievements</h2>
      
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 bg-gray-100 rounded flex items-center justify-center">
            <span className="text-2xl">🏆</span>
          </div>
          <div className="flex-1">
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• 1st Winner Conquest at HKBKCE pre-event</li>
              <li>• 2nd Winner of Conquest at HKBKCE main-event</li>
              <li>• 2nd Place of coding hackathon organized: Team leader</li>
              <li>• 3rd Place of coding organized: Team leader & Completed</li>
              <li>• Successfully completed: 1st & 2nd yr CGPA</li>
              <li>• Received: scholarship in 1st yr</li>
              <li>• Earned — 200+ XPs from coding challenges & 2022</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementsSection;