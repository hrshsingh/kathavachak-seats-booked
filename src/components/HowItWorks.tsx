
import { Card, CardContent } from "@/components/ui/card";
import { Search, Calendar, CreditCard, Heart } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discover Events",
    description: "Browse Katha events in your city or explore other locations. Filter by date, storyteller, or event type.",
    color: "text-blue-600"
  },
  {
    icon: Calendar,
    title: "Choose Your Experience",
    description: "Select your preferred date, time, and storyteller. View detailed event information and venue details.",
    color: "text-green-600"
  },
  {
    icon: CreditCard,
    title: "Book Your Seats",
    description: "Choose your seats, complete secure payment, and receive instant confirmation with event details.",
    color: "text-purple-600"
  },
  {
    icon: Heart,
    title: "Enjoy the Katha",
    description: "Attend the event, immerse yourself in divine stories, and connect with spiritual wisdom.",
    color: "text-orange-600"
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            How It Works
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Book your spiritual journey in just four simple steps
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card 
              key={index} 
              className="relative group hover:shadow-xl transition-all duration-300 border-orange-100 hover:scale-105"
            >
              <CardContent className="p-6 text-center">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-600 to-amber-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                </div>
                
                <div className={`w-16 h-16 ${step.color} bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 mt-4`}>
                  <step.icon className="w-8 h-8" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
