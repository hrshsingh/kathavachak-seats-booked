
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export const Hero = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 to-amber-600/10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent animate-fade-in">
            Experience Divine
            <br />
            <span className="text-4xl md:text-6xl">Katha Storytelling</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in">
            Discover and book seats for spiritual Katha events near you. 
            Connect with renowned storytellers and immerse yourself in timeless wisdom.
          </p>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-orange-100 max-w-4xl mx-auto animate-scale-in">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <MapPin className="absolute left-3 top-3 w-5 h-5 text-orange-500" />
                <Input 
                  placeholder="Location" 
                  className="pl-10 border-orange-200 focus:border-orange-400"
                />
              </div>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 w-5 h-5 text-orange-500" />
                <Input 
                  type="date" 
                  className="pl-10 border-orange-200 focus:border-orange-400"
                />
              </div>
              <div className="relative">
                <Search className="absolute left-3 top-3 w-5 h-5 text-orange-500" />
                <Input 
                  placeholder="Event Type" 
                  className="pl-10 border-orange-200 focus:border-orange-400"
                />
              </div>
              <Button className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 h-12">
                Find Events
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-orange-200/30 rounded-full blur-sm animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-amber-200/30 rounded-full blur-sm animate-pulse"></div>
    </section>
  );
};
