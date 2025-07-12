import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Star, Users, Calendar, Plus, Edit, Trash2 } from "lucide-react";
import { useForm } from "react-hook-form";

interface Storyteller {
  id: number;
  name: string;
  specialization: string;
  experience: string;
  rating: number;
  followers: string;
  events: number;
  bio: string;
  image: string;
  phone: string;
  email: string;
}

const initialStorytellers: Storyteller[] = [
  {
    id: 1,
    name: "Pandit Pradeep Mishra",
    specialization: "Bhagavat Katha",
    experience: "25+ years",
    rating: 4.9,
    followers: "2.3M",
    events: 150,
    bio: "Renowned spiritual storyteller specializing in Bhagavat Puran with melodious narration.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    phone: "+91 9876543210",
    email: "pradeep@example.com"
  },
  {
    id: 2,
    name: "Devi Chitralekha",
    specialization: "Ram Katha",
    experience: "18+ years",
    rating: 4.8,
    followers: "1.8M",
    events: 120,
    bio: "Celebrated female storyteller known for emotional depth in Ram Katha presentations.",
    image: "https://images.unsplash.com/photo-1494790108755-2616c6575881?w=300&h=300&fit=crop&crop=face",
    phone: "+91 9876543211",
    email: "chitralekha@example.com"
  }
];

export const StorytellersManager = () => {
  const [storytellers, setStorytellers] = useState<Storyteller[]>(initialStorytellers);
  const [showForm, setShowForm] = useState(false);
  const [editingStoryteller, setEditingStoryteller] = useState<Storyteller | null>(null);
  
  const { register, handleSubmit, reset, setValue } = useForm();

  const onSubmit = (data: any) => {
    if (editingStoryteller) {
      setStorytellers(storytellers.map(storyteller => 
        storyteller.id === editingStoryteller.id 
          ? { ...editingStoryteller, ...data, id: editingStoryteller.id }
          : storyteller
      ));
      setEditingStoryteller(null);
    } else {
      const newStoryteller: Storyteller = {
        ...data,
        id: Date.now(),
        rating: parseFloat(data.rating) || 0,
        events: parseInt(data.events) || 0
      };
      setStorytellers([...storytellers, newStoryteller]);
    }
    reset();
    setShowForm(false);
  };

  const handleEdit = (storyteller: Storyteller) => {
    setEditingStoryteller(storyteller);
    Object.entries(storyteller).forEach(([key, value]) => {
      setValue(key, value);
    });
    setShowForm(true);
  };

  const handleDelete = (id: number) => {
    setStorytellers(storytellers.filter(storyteller => storyteller.id !== id));
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Storytellers Management</CardTitle>
          <Button 
            onClick={() => {
              setShowForm(!showForm);
              setEditingStoryteller(null);
              reset();
            }}
            className="bg-orange-600 hover:bg-orange-700"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Storyteller
          </Button>
        </CardHeader>
        <CardContent>
          {showForm && (
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>{editingStoryteller ? 'Edit Storyteller' : 'Add New Storyteller'}</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input {...register('name', { required: true })} placeholder="Storyteller name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="specialization">Specialization</Label>
                      <Input {...register('specialization', { required: true })} placeholder="Bhagavat Katha" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="experience">Experience</Label>
                      <Input {...register('experience', { required: true })} placeholder="25+ years" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="rating">Rating</Label>
                      <Input {...register('rating', { required: true })} type="number" step="0.1" min="0" max="5" placeholder="4.9" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="followers">Followers</Label>
                      <Input {...register('followers', { required: true })} placeholder="2.3M" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="events">Total Events</Label>
                      <Input {...register('events', { required: true })} type="number" placeholder="150" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input {...register('phone', { required: true })} placeholder="+91 9876543210" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input {...register('email', { required: true })} type="email" placeholder="email@example.com" />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="image">Profile Image URL</Label>
                      <Input {...register('image', { required: true })} placeholder="https://..." />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="bio">Biography</Label>
                      <Textarea {...register('bio', { required: true })} placeholder="Brief biography..." />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button type="submit" className="bg-orange-600 hover:bg-orange-700">
                      {editingStoryteller ? 'Update Storyteller' : 'Add Storyteller'}
                    </Button>
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={() => {
                        setShowForm(false);
                        setEditingStoryteller(null);
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
                <TableHead>Storyteller</TableHead>
                <TableHead>Specialization</TableHead>
                <TableHead>Experience</TableHead>
                <TableHead>Stats</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {storytellers.map((storyteller) => (
                <TableRow key={storyteller.id}>
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <img 
                        src={storyteller.image} 
                        alt={storyteller.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-medium">{storyteller.name}</p>
                        <p className="text-sm text-gray-600">{storyteller.experience}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{storyteller.specialization}</Badge>
                  </TableCell>
                  <TableCell>{storyteller.experience}</TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="flex items-center text-sm">
                        <Star className="w-4 h-4 text-yellow-500 mr-1" />
                        {storyteller.rating}
                      </div>
                      <div className="flex items-center text-sm">
                        <Users className="w-4 h-4 text-blue-500 mr-1" />
                        {storyteller.followers}
                      </div>
                      <div className="flex items-center text-sm">
                        <Calendar className="w-4 h-4 text-green-500 mr-1" />
                        {storyteller.events}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">
                      <p>{storyteller.phone}</p>
                      <p className="text-gray-600">{storyteller.email}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => handleEdit(storyteller)}
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => handleDelete(storyteller.id)}
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