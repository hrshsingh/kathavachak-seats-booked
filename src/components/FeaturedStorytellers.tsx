
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Users, Calendar } from "lucide-react";

const storytellers = [
  {
    id: 1,
    name: "Pandit Pradeep Mishra",
    specialization: "Bhagavat Katha",
    experience: "25+ years",
    rating: 4.9,
    followers: "2.3M",
    events: 150,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    bio: "Renowned spiritual storyteller specializing in Bhagavat Puran with melodious narration."
  },
  {
    id: 2,
    name: "Devi Chitralekha",
    specialization: "Ram Katha",
    experience: "18+ years",
    rating: 4.8,
    followers: "1.8M",
    events: 120,
    image: "https://images.unsplash.com/photo-1494790108755-2616c6575881?w=300&h=300&fit=crop&crop=face",
    bio: "Celebrated female storyteller known for emotional depth in Ram Katha presentations."
  },
  {
    id: 3,
    name: "Swami Ramsukhdas",
    specialization: "Krishn Leela",
    experience: "30+ years",
    rating: 5.0,
    followers: "3.1M",
    events: 200,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    bio: "Spiritual master from Vrindavan, expert in Krishna's divine stories and teachings."
  },
  {
    id: 4,
    name: "Acharya Vikash Maharaj",
    specialization: "Gita Katha",
    experience: "22+ years",
    rating: 4.7,
    followers: "1.5M",
    events: 95,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
    bio: "Philosophy expert known for making complex Gita teachings accessible to all."
  }
];

export const FeaturedStorytellers = () => {
  return (
    <section id="storytellers" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Featured Storytellers
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Meet our celebrated Katha Vachaks who bring ancient wisdom to life
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {storytellers.map((storyteller) => (
            <Card 
              key={storyteller.id} 
              className="group hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105 border-orange-100"
            >
              <CardContent className="p-6 text-center">
                <div className="relative mb-4">
                  <img 
                    src={storyteller.image}
                    alt={storyteller.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-orange-100"
                  />
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-orange-600 hover:bg-orange-700 text-xs">
                      {storyteller.experience}
                    </Badge>
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-gray-800 mb-1">
                  {storyteller.name}
                </h3>
                <p className="text-orange-600 font-medium mb-3">
                  {storyteller.specialization}
                </p>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {storyteller.bio}
                </p>
                
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div>
                    <div className="flex items-center justify-center mb-1">
                      <Star className="w-4 h-4 text-yellow-500 mr-1" />
                      <span className="text-sm font-medium">{storyteller.rating}</span>
                    </div>
                    <span className="text-xs text-gray-500">Rating</span>
                  </div>
                  <div>
                    <div className="flex items-center justify-center mb-1">
                      <Users className="w-4 h-4 text-blue-500 mr-1" />
                      <span className="text-sm font-medium">{storyteller.followers}</span>
                    </div>
                    <span className="text-xs text-gray-500">Followers</span>
                  </div>
                  <div>
                    <div className="flex items-center justify-center mb-1">
                      <Calendar className="w-4 h-4 text-green-500 mr-1" />
                      <span className="text-sm font-medium">{storyteller.events}</span>
                    </div>
                    <span className="text-xs text-gray-500">Events</span>
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
