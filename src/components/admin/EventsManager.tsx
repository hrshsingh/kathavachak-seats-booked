import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Plus, Edit, Trash2 } from "lucide-react";
import { useForm } from "react-hook-form";

interface Event {
  id: number;
  title: string;
  storyteller: string;
  location: string;
  date: string;
  time: string;
  duration: string;
  price: string;
  seats: number;
  bookedSeats: number;
  status: 'active' | 'upcoming' | 'completed';
}

const initialEvents: Event[] = [
  {
    id: 1,
    title: "Shrimad Bhagavat Katha",
    storyteller: "Pandit Pradeep Mishra",
    location: "Mumbai, Maharashtra",
    date: "2024-07-20",
    time: "6:00 PM",
    duration: "3 hours",
    price: "₹500",
    seats: 150,
    bookedSeats: 45,
    status: 'upcoming'
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
    seats: 200,
    bookedSeats: 120,
    status: 'active'
  }
];

export const EventsManager = () => {
  const [events, setEvents] = useState<Event[]>(initialEvents);
  const [showForm, setShowForm] = useState(false);
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);
  
  const { register, handleSubmit, reset, setValue } = useForm();

  const onSubmit = (data: any) => {
    if (editingEvent) {
      setEvents(events.map(event => 
        event.id === editingEvent.id 
          ? { ...editingEvent, ...data, id: editingEvent.id }
          : event
      ));
      setEditingEvent(null);
    } else {
      const newEvent: Event = {
        ...data,
        id: Date.now(),
        bookedSeats: 0,
        status: 'upcoming' as const
      };
      setEvents([...events, newEvent]);
    }
    reset();
    setShowForm(false);
  };

  const handleEdit = (event: Event) => {
    setEditingEvent(event);
    Object.entries(event).forEach(([key, value]) => {
      setValue(key, value);
    });
    setShowForm(true);
  };

  const handleDelete = (id: number) => {
    setEvents(events.filter(event => event.id !== id));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'upcoming': return 'bg-blue-100 text-blue-800';
      case 'completed': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Events Management</CardTitle>
          <Button 
            onClick={() => {
              setShowForm(!showForm);
              setEditingEvent(null);
              reset();
            }}
            className="bg-orange-600 hover:bg-orange-700"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Event
          </Button>
        </CardHeader>
        <CardContent>
          {showForm && (
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>{editingEvent ? 'Edit Event' : 'Add New Event'}</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="title">Event Title</Label>
                      <Input {...register('title', { required: true })} placeholder="Event title" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="storyteller">Storyteller</Label>
                      <Input {...register('storyteller', { required: true })} placeholder="Storyteller name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <Input {...register('location', { required: true })} placeholder="Event location" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="date">Date</Label>
                      <Input {...register('date', { required: true })} type="date" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="time">Time</Label>
                      <Input {...register('time', { required: true })} placeholder="6:00 PM" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="duration">Duration</Label>
                      <Input {...register('duration', { required: true })} placeholder="3 hours" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="price">Price</Label>
                      <Input {...register('price', { required: true })} placeholder="₹500" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="seats">Total Seats</Label>
                      <Input {...register('seats', { required: true, valueAsNumber: true })} type="number" placeholder="150" />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button type="submit" className="bg-orange-600 hover:bg-orange-700">
                      {editingEvent ? 'Update Event' : 'Add Event'}
                    </Button>
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={() => {
                        setShowForm(false);
                        setEditingEvent(null);
                        reset();
                      }}
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Event</TableHead>
                <TableHead>Storyteller</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Date & Time</TableHead>
                <TableHead>Seats</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {events.map((event) => (
                <TableRow key={event.id}>
                  <TableCell>
                    <div>
                      <p className="font-medium">{event.title}</p>
                      <p className="text-sm text-gray-600">{event.price}</p>
                    </div>
                  </TableCell>
                  <TableCell>{event.storyteller}</TableCell>
                  <TableCell className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1 text-gray-400" />
                    {event.location}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1 text-gray-400" />
                      <div>
                        <p className="text-sm">{event.date}</p>
                        <p className="text-sm text-gray-600">{event.time}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1 text-gray-400" />
                      <span>{event.bookedSeats}/{event.seats}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(event.status)}>
                      {event.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => handleEdit(event)}
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => handleDelete(event.id)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};