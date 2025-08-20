import { Button } from "@/components/ui/button";

const FeaturedWorksSection = () => {
  return (
    <div className="max-w-4xl mx-auto px-8 py-8">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Featured works</h2>
      
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <div className="aspect-video bg-gradient-to-br from-purple-900 to-purple-600 relative">
          {/* Placeholder for featured work image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white text-center">
              <h3 className="text-2xl font-bold mb-2">Featured Project</h3>
              <p className="text-white/80">Interactive Design Portfolio</p>
            </div>
          </div>
        </div>
        
        <div className="p-6">
          <Button 
            size="sm"
            className="bg-primary hover:bg-primary/90 text-white px-4 py-1 text-sm"
            onClick={() => window.open('#', '_blank')}
          >
            View Work
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedWorksSection;