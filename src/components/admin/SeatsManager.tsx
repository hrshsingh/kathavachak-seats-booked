import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, Calendar, Search, Filter } from "lucide-react";

interface SeatBooking {
  id: number;
  eventTitle: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  seatNumbers: string[];
  bookingDate: string;
  totalAmount: string;
  status: 'confirmed' | 'pending' | 'cancelled';
  paymentStatus: 'paid' | 'pending' | 'refunded';
}

const sampleBookings: SeatBooking[] = [
  {
    id: 1,
    eventTitle: "Shrimad Bhagavat Katha",
    customerName: "Rahul Sharma",
    customerEmail: "rahul@example.com",
    customerPhone: "+91 9876543210",
    seatNumbers: ["A15", "A16"],
    bookingDate: "2024-07-15",
    totalAmount: "₹1,000",
    status: 'confirmed',
    paymentStatus: 'paid'
  },
  {
    id: 2,
    eventTitle: "Ram Katha Gayan",
    customerName: "Priya Patel",
    customerEmail: "priya@example.com",
    customerPhone: "+91 9876543211",
    seatNumbers: ["B25", "B26", "B27"],
    bookingDate: "2024-07-16",
    totalAmount: "₹2,250",
    status: 'confirmed',
    paymentStatus: 'paid'
  },
  {
    id: 3,
    eventTitle: "Krishn Leela Katha",
    customerName: "Amit Kumar",
    customerEmail: "amit@example.com",
    customerPhone: "+91 9876543212",
    seatNumbers: ["C10"],
    bookingDate: "2024-07-17",
    totalAmount: "₹300",
    status: 'pending',
    paymentStatus: 'pending'
  }
];

export const SeatsManager = () => {
  const [bookings, setBookings] = useState<SeatBooking[]>(sampleBookings);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredBookings = bookings.filter(booking => {
    const matchesSearch = booking.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         booking.customerEmail.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         booking.eventTitle.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === "all" || booking.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const updateBookingStatus = (id: number, status: 'confirmed' | 'pending' | 'cancelled') => {
    setBookings(bookings.map(booking => 
      booking.id === id ? { ...booking, status } : booking
    ));
  };

  const updatePaymentStatus = (id: number, paymentStatus: 'paid' | 'pending' | 'refunded') => {
    setBookings(bookings.map(booking => 
      booking.id === id ? { ...booking, paymentStatus } : booking
    ));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      case 'paid': return 'bg-green-100 text-green-800';
      case 'refunded': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const totalRevenue = bookings
    .filter(booking => booking.paymentStatus === 'paid')
    .reduce((sum, booking) => sum + parseInt(booking.totalAmount.replace(/[₹,]/g, '')), 0);

  const totalSeatsBooked = bookings
    .filter(booking => booking.status === 'confirmed')
    .reduce((sum, booking) => sum + booking.seatNumbers.length, 0);

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <Users className="h-8 w-8 text-blue-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Bookings</p>
                <p className="text-2xl font-bold">{bookings.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <MapPin className="h-8 w-8 text-green-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Seats Booked</p>
                <p className="text-2xl font-bold">{totalSeatsBooked}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <Calendar className="h-8 w-8 text-purple-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                <p className="text-2xl font-bold">₹{totalRevenue.toLocaleString()}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bookings Management */}
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <CardTitle>Seat Bookings Management</CardTitle>
            <div className="flex gap-2 w-full sm:w-auto">
              <div className="relative flex-1 sm:w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search bookings..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-32">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="confirmed">Confirmed</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Customer</TableHead>
                <TableHead>Event</TableHead>
                <TableHead>Seats</TableHead>
                <TableHead>Booking Date</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Payment</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredBookings.map((booking) => (
                <TableRow key={booking.id}>
                  <TableCell>
                    <div>
                      <p className="font-medium">{booking.customerName}</p>
                      <p className="text-sm text-gray-600">{booking.customerEmail}</p>
                      <p className="text-sm text-gray-600">{booking.customerPhone}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <p className="font-medium">{booking.eventTitle}</p>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {booking.seatNumbers.map((seat, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {seat}
                        </Badge>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell>{booking.bookingDate}</TableCell>
                  <TableCell className="font-medium">{booking.totalAmount}</TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(booking.status)}>
                      {booking.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(booking.paymentStatus)}>
                      {booking.paymentStatus}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col gap-1">
                      <Select 
                        value={booking.status} 
                        onValueChange={(value: 'confirmed' | 'pending' | 'cancelled') => 
                          updateBookingStatus(booking.id, value)
                        }
                      >
                        <SelectTrigger className="h-8 text-xs">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="confirmed">Confirm</SelectItem>
                          <SelectItem value="pending">Pending</SelectItem>
                          <SelectItem value="cancelled">Cancel</SelectItem>
                        </SelectContent>
                      </Select>
                      
                      <Select 
                        value={booking.paymentStatus} 
                        onValueChange={(value: 'paid' | 'pending' | 'refunded') => 
                          updatePaymentStatus(booking.id, value)
                        }
                      >
                        <SelectTrigger className="h-8 text-xs">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="paid">Paid</SelectItem>
                          <SelectItem value="pending">Pending</SelectItem>
                          <SelectItem value="refunded">Refunded</SelectItem>
                        </SelectContent>
                      </Select>
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