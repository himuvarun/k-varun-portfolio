import { Button } from "@/components/ui/button";

const CreativeCornerSection = () => {
  return (
    <div className="max-w-4xl mx-auto px-8 py-8">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Creative Corner</h2>
      
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded flex items-center justify-center">
            <span className="text-white text-2xl">🎨</span>
          </div>
          <div className="flex-1">
            <ul className="text-sm text-gray-600 space-y-1 mb-4">
              <li>• Creative mind Ytube & Fun</li>
              <li>• Content creation</li>
              <li>• Youtube & Art</li>
              <li>• Fun with all; of creating Dupe Reels</li>
              <li>• Interested in PyFitting...coding and mind maps</li>
              <li>• Photoshop: X: Ytube Channel</li>
            </ul>
            
            <div className="flex gap-2">
              <Button 
                size="sm"
                className="bg-primary hover:bg-primary/90 text-white px-4 py-1 text-sm"
                onClick={() => window.open('#', '_blank')}
              >
                View More
              </Button>
              <Button 
                size="sm"
                className="bg-primary hover:bg-primary/90 text-white px-4 py-1 text-sm"
                onClick={() => window.open('#', '_blank')}
              >
                View More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreativeCornerSection;