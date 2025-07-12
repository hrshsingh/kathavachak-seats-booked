
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Clock, Users, Star } from "lucide-react";

const featuredEvents = [
  {
    id: 1,
    title: "Shrimad Bhagavat Katha",
    storyteller: "Pandit Pradeep Mishra",
    location: "Mumbai, Maharashtra",
    date: "2024-07-20",
    time: "6:00 PM",
    duration: "3 hours",
    price: "₹500",
    rating: 4.9,
    seats: 150,
    bookedSeats: 45,
    image: "photo-1473177104440-ffee2f376098",
    tags: ["Spiritual", "Classical"]
  },
  {
    id: 2,
    title: "Ram Katha Gayan",
    storyteller: "Devi Chitralekha",
    location: "Delhi, India",
    date: "2024-07-22",
    time: "7:00 PM",
    duration: "2.5 hours",
    price: "₹750",
    rating: 4.8,
    seats: 200,
    bookedSeats: 120,
    image: "photo-1466442929976-97f336a657be",
    tags: ["Devotional", "Music"]
  },
  {
    id: 3,
    title: "Krishn Leela Katha",
    storyteller: "Swami Ramsukhdas",
    location: "Vrindavan, UP",
    date: "2024-07-25",
    time: "5:30 PM",
    duration: "4 hours",
    price: "₹300",
    rating: 5.0,
    seats: 300,
    bookedSeats: 180,
    image: "photo-1494891848038-7bd202a2afeb",
    tags: ["Traditional", "Classical"]
  }
];

export const FeaturedEvents = () => {
  return (
    <section id="events" className="py-16 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Featured Events
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Join these specially curated Katha events by renowned storytellers
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredEvents.map((event) => (
            <Card 
              key={event.id} 
              className="group hover:shadow-2xl transition-all duration-300 border-orange-100 overflow-hidden"
            >
              <div className="relative">
                <img 
                  src={`https://images.unsplash.com/${event.image}?w=600&h=300&fit=crop`}
                  alt={event.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-orange-600 hover:bg-orange-700">
                    {event.tags[0]}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 rounded-full px-2 py-1 flex items-center">
                  <Star className="w-4 h-4 text-yellow-500 mr-1" />
                  <span className="text-sm font-medium">{event.rating}</span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {event.title}
                </h3>
                <p className="text-orange-600 font-medium mb-4">
                  by {event.storyteller}
                </p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">{new Date(event.date).toLocaleDateString('en-IN')}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="text-sm">{event.time} • {event.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="w-4 h-4 mr-2" />
                    <span className="text-sm">{event.seats - event.bookedSeats} seats available</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-orange-600">{event.price}</span>
                    <span className="text-gray-500 text-sm ml-1">per person</span>
                  </div>
                  <Button className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700">
                    Book Seats
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-orange-300 text-orange-700 hover:bg-orange-50"
          >
            View All Events
          </Button>
        </div>
      </div>
    </section>
  );
};
