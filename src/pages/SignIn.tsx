
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2, ArrowRight } from "lucide-react";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet';

// Dummy authentication
const dummyCredentials = {
  email: 'demo@developito.com',
  password: 'password123',
};

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});

const SignIn = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Simple dummy authentication
    if (values.email === dummyCredentials.email && values.password === dummyCredentials.password) {
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('user', JSON.stringify({ email: values.email }));
      toast({
        title: "Login successful",
        description: "Welcome back to Developito",
      });
      navigate('/dashboard');
    } else {
      toast({
        title: "Login failed",
        description: "Please check your credentials and try again",
        variant: "destructive",
      });
    }
    
    setIsLoading(false);
  };

  return (
    <>
      <Helmet>
        <title>Sign In | Developito</title>
        <meta name="description" content="Sign in to your Developito account" />
      </Helmet>
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center py-12 px-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-md glass p-8 rounded-lg"
          >
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold mb-2">Welcome Back</h1>
              <p className="text-gray-400">Sign in to access your account</p>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input 
                          type="password" 
                          placeholder="•••••••" 
                          {...field} 
                          className="bg-background/50 border-gray-700"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="text-right">
                  <Link to="/forgot-password" className="text-sm text-neon-blue hover:underline">
                    Forgot password?
                  </Link>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-neon-blue hover:bg-neon-blue/80" 
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  ) : (
                    <ArrowRight className="w-4 h-4 mr-2" />
                  )}
                  Sign In
                </Button>
              </form>
            </Form>

            <div className="mt-8 text-center">
              <p className="text-gray-400">
                Don't have an account?{" "}
                <Link to="/sign-up" className="text-neon-blue hover:underline">
                  Sign Up
                </Link>
              </p>
              
              <div className="mt-4 p-4 bg-gray-800/50 rounded-md">
                <p className="text-sm text-gray-400 mb-2">Demo Account:</p>
                <p className="text-sm text-gray-300">Email: demo@developito.com</p>
                <p className="text-sm text-gray-300">Password: password123</p>
              </div>
            </div>
          </motion.div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default SignIn;
