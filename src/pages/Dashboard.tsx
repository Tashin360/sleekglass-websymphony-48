
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { format } from "date-fns";
import { CalendarIcon, User, Clock, ListFilter, Loader2, Calendar as CalendarIcon2 } from "lucide-react";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AuthGuard from '@/components/auth/AuthGuard';

const timeSlots = [
  "09:00 AM", "10:00 AM", "11:00 AM", 
  "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM"
];

const consultationSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  date: z.date({ required_error: "Please select a date" }),
  time: z.string({ required_error: "Please select a time" }),
  serviceType: z.string({ required_error: "Please select a service type" }),
  details: z.string().min(10, { message: "Please provide at least 10 characters" }).max(500, { message: "Details cannot exceed 500 characters" }),
});

const Dashboard = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [bookedConsultations, setBookedConsultations] = useState<any[]>([]);
  const [userData, setUserData] = useState<{email: string, fullName?: string} | null>(null);

  useEffect(() => {
    // Get user data from localStorage
    const user = localStorage.getItem('user');
    if (user) {
      setUserData(JSON.parse(user));
    }

    // Get any existing consultations from localStorage
    const existingConsultations = localStorage.getItem('consultations');
    if (existingConsultations) {
      setBookedConsultations(JSON.parse(existingConsultations));
    }
  }, []);

  const form = useForm<z.infer<typeof consultationSchema>>({
    resolver: zodResolver(consultationSchema),
    defaultValues: {
      name: userData?.fullName || "",
      email: userData?.email || "",
      phone: "",
      details: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof consultationSchema>) => {
    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Save the consultation
    const consultation = {
      id: Date.now().toString(),
      ...values,
      status: "Scheduled",
      date: format(values.date, "PPP"),
      createdAt: new Date().toISOString(),
    };
    
    const updatedConsultations = [...bookedConsultations, consultation];
    setBookedConsultations(updatedConsultations);
    localStorage.setItem('consultations', JSON.stringify(updatedConsultations));
    
    toast({
      title: "Consultation scheduled",
      description: `Your consultation is scheduled for ${format(values.date, "PPP")} at ${values.time}`,
    });
    
    form.reset({
      name: userData?.fullName || "",
      email: userData?.email || "",
      phone: "",
      details: "",
    });
    
    setIsLoading(false);
  };

  const handleSignOut = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('user');
    window.location.href = '/';
  };

  return (
    <AuthGuard>
      <>
        <Helmet>
          <title>Dashboard | Developito</title>
          <meta name="description" content="Manage your consultations and account" />
        </Helmet>
        <div className="min-h-screen bg-background flex flex-col">
          <Navbar />
          <main className="flex-grow container mx-auto py-12 px-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
                <div>
                  <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
                  <p className="text-gray-400">
                    Welcome back, {userData?.fullName || userData?.email?.split('@')[0] || 'User'}
                  </p>
                </div>
                <Button 
                  variant="outline" 
                  className="mt-4 sm:mt-0 border-gray-700 hover:bg-gray-800"
                  onClick={handleSignOut}
                >
                  Sign Out
                </Button>
              </div>

              <Tabs defaultValue="schedule" className="space-y-8">
                <TabsList className="glass">
                  <TabsTrigger value="schedule" className="data-[state=active]:bg-neon-blue">
                    <CalendarIcon2 className="mr-2 h-4 w-4" />
                    Schedule Consultation
                  </TabsTrigger>
                  <TabsTrigger value="booked" className="data-[state=active]:bg-neon-blue">
                    <Clock className="mr-2 h-4 w-4" />
                    Your Consultations
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="schedule">
                  <Card className="glass border-gray-700">
                    <CardHeader>
                      <CardTitle>Schedule a Consultation</CardTitle>
                      <CardDescription>Fill out the form below to book a consultation with our team</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormField
                              control={form.control}
                              name="name"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Full Name</FormLabel>
                                  <FormControl>
                                    <Input 
                                      placeholder="John Doe" 
                                      {...field} 
                                      className="bg-background/50 border-gray-700"
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="email"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Email</FormLabel>
                                  <FormControl>
                                    <Input 
                                      placeholder="your@email.com" 
                                      {...field} 
                                      className="bg-background/50 border-gray-700"
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="phone"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Phone Number</FormLabel>
                                  <FormControl>
                                    <Input 
                                      placeholder="(123) 456-7890" 
                                      {...field} 
                                      className="bg-background/50 border-gray-700"
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="serviceType"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Service Type</FormLabel>
                                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                      <SelectTrigger className="bg-background/50 border-gray-700">
                                        <SelectValue placeholder="Select service type" />
                                      </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                      <SelectItem value="web-development">Web Development</SelectItem>
                                      <SelectItem value="seo-optimization">SEO Optimization</SelectItem>
                                      <SelectItem value="server-solutions">Server Solutions</SelectItem>
                                      <SelectItem value="ui-ux-design">UI/UX Design</SelectItem>
                                      <SelectItem value="other">Other</SelectItem>
                                    </SelectContent>
                                  </Select>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="date"
                              render={({ field }) => (
                                <FormItem className="flex flex-col">
                                  <FormLabel>Date</FormLabel>
                                  <Popover>
                                    <PopoverTrigger asChild>
                                      <FormControl>
                                        <Button
                                          variant={"outline"}
                                          className={`w-full bg-background/50 border-gray-700 pl-3 text-left font-normal ${!field.value ? "text-gray-400" : ""}`}
                                        >
                                          {field.value ? (
                                            format(field.value, "PPP")
                                          ) : (
                                            <span>Pick a date</span>
                                          )}
                                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                        </Button>
                                      </FormControl>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0" align="start">
                                      <Calendar
                                        mode="single"
                                        selected={field.value}
                                        onSelect={field.onChange}
                                        disabled={(date) => 
                                          date < new Date(new Date().setHours(0, 0, 0, 0)) ||
                                          date.getDay() === 0 ||
                                          date.getDay() === 6
                                        }
                                        initialFocus
                                      />
                                    </PopoverContent>
                                  </Popover>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="time"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Time</FormLabel>
                                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                      <SelectTrigger className="bg-background/50 border-gray-700">
                                        <SelectValue placeholder="Select time slot" />
                                      </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                      {timeSlots.map((time) => (
                                        <SelectItem key={time} value={time}>
                                          {time}
                                        </SelectItem>
                                      ))}
                                    </SelectContent>
                                  </Select>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                          
                          <FormField
                            control={form.control}
                            name="details"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Details</FormLabel>
                                <FormControl>
                                  <Textarea 
                                    placeholder="Tell us about your project or requirements..."
                                    className="min-h-32 bg-background/50 border-gray-700"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <Button 
                            type="submit" 
                            className="w-full bg-neon-blue hover:bg-neon-blue/80" 
                            disabled={isLoading}
                          >
                            {isLoading ? (
                              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            ) : (
                              <CalendarIcon2 className="w-4 h-4 mr-2" />
                            )}
                            Schedule Consultation
                          </Button>
                        </form>
                      </Form>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="booked">
                  <Card className="glass border-gray-700">
                    <CardHeader>
                      <CardTitle>Your Consultations</CardTitle>
                      <CardDescription>Manage your scheduled consultations</CardDescription>
                    </CardHeader>
                    <CardContent>
                      {bookedConsultations.length > 0 ? (
                        <div className="space-y-4">
                          {bookedConsultations.map((consultation, index) => (
                            <motion.div
                              key={consultation.id}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="glass-dark p-4 rounded-lg border border-gray-700"
                            >
                              <div className="flex flex-col md:flex-row justify-between gap-4">
                                <div>
                                  <div className="flex items-center gap-2 mb-2">
                                    <CalendarIcon2 className="text-neon-blue h-4 w-4" />
                                    <span className="font-medium text-white">{consultation.date}</span>
                                    <span className="text-neon-blue">•</span>
                                    <span>{consultation.time}</span>
                                  </div>
                                  <h3 className="font-semibold text-lg">{consultation.name}</h3>
                                  <p className="text-gray-400 text-sm mt-1">
                                    Service: {consultation.serviceType.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                                  </p>
                                </div>
                                <div className="flex flex-col items-start md:items-end">
                                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-900/30 text-green-400">
                                    {consultation.status}
                                  </span>
                                  <p className="text-gray-400 text-sm mt-2">
                                    Booked on {new Date(consultation.createdAt).toLocaleDateString()}
                                  </p>
                                </div>
                              </div>
                              <div className="mt-4 pt-4 border-t border-gray-700">
                                <p className="text-sm text-gray-300">{consultation.details}</p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-12">
                          <CalendarIcon2 className="w-12 h-12 text-gray-500 mx-auto mb-4" />
                          <h3 className="text-xl font-medium text-gray-300 mb-2">No consultations yet</h3>
                          <p className="text-gray-400 max-w-md mx-auto">
                            You haven't scheduled any consultations yet. 
                            Head over to the Schedule tab to book your first consultation.
                          </p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </motion.div>
          </main>
          <Footer />
        </div>
      </>
    </AuthGuard>
  );
};

export default Dashboard;
