
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, Users } from "lucide-react";

const popularLocations = [
  { name: "Mumbai", events: 45, image: "photo-1721322800607-8c38375eef04" },
  { name: "Delhi", events: 38, image: "photo-1473177104440-ffee2f376098" },
  { name: "Bangalore", events: 32, image: "photo-1466442929976-97f336a657be" },
  { name: "Pune", events: 28, image: "photo-1494891848038-7bd202a2afeb" },
];

export const LocationSearch = () => {
  return (
    <section className="py-16 bg-white/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Discover Katha Events
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Find spiritual storytelling events in your city and book your seats instantly
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularLocations.map((location, index) => (
            <Card 
              key={location.name} 
              className="group hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105 border-orange-100"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={`https://images.unsplash.com/${location.image}?w=400&h=200&fit=crop`}
                  alt={location.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{location.name}</h3>
                  <p className="text-sm opacity-90">{location.events} events</p>
                </div>
              </div>
              <CardContent className="p-4">
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    Multiple venues
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {Math.floor(Math.random() * 50) + 20}+ seats
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
