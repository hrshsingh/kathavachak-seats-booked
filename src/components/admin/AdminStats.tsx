import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Users, MapPin, TrendingUp } from "lucide-react";

export const AdminStats = () => {
  const stats = [
    {
      title: "Total Events",
      value: "24",
      change: "+12%",
      icon: Calendar,
      color: "text-blue-600"
    },
    {
      title: "Active Storytellers",
      value: "8",
      change: "+2",
      icon: Users,
      color: "text-green-600"
    },
    {
      title: "Booked Seats",
      value: "1,234",
      change: "+23%",
      icon: MapPin,
      color: "text-orange-600"
    },
    {
      title: "Revenue",
      value: "₹2,45,000",
      change: "+18%",
      icon: TrendingUp,
      color: "text-purple-600"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {stat.title}
              </CardTitle>
              <Icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
              <p className="text-xs text-green-600 mt-1">
                {stat.change} from last month
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};