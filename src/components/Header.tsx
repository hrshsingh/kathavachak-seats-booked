
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, User } from "lucide-react";

export const Header = () => {
  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-orange-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">क</span>
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
            KathaVachak
          </h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#events" className="text-gray-700 hover:text-orange-600 transition-colors">Events</a>
          <a href="#storytellers" className="text-gray-700 hover:text-orange-600 transition-colors">Storytellers</a>
          <a href="#about" className="text-gray-700 hover:text-orange-600 transition-colors">About</a>
          <a href="#contact" className="text-gray-700 hover:text-orange-600 transition-colors">Contact</a>
          <a href="/admin" className="text-gray-700 hover:text-orange-600 transition-colors">Admin</a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button variant="outline" className="border-orange-200 text-orange-700 hover:bg-orange-50">
            <User className="w-4 h-4 mr-2" />
            Login
          </Button>
          <Button className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700">
            Book Now
          </Button>
        </div>
      </div>
    </header>
  );
};
