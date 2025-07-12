import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EventsManager } from "@/components/admin/EventsManager";
import { StorytellersManager } from "@/components/admin/StorytellersManager";
import { SeatsManager } from "@/components/admin/SeatsManager";
import { AdminStats } from "@/components/admin/AdminStats";
import { Calendar, Users, MapPin, Settings } from "lucide-react";

const Admin = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            KathaVachak Admin Panel
          </h1>
          <p className="text-gray-600">
            Manage events, storytellers, and seat bookings
          </p>
        </div>

        <AdminStats />

        <Tabs defaultValue="events" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
            <TabsTrigger value="events" className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Events
            </TabsTrigger>
            <TabsTrigger value="storytellers" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Storytellers
            </TabsTrigger>
            <TabsTrigger value="seats" className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Seats
            </TabsTrigger>
          </TabsList>

          <TabsContent value="events" className="space-y-6">
            <EventsManager />
          </TabsContent>

          <TabsContent value="storytellers" className="space-y-6">
            <StorytellersManager />
          </TabsContent>

          <TabsContent value="seats" className="space-y-6">
            <SeatsManager />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;