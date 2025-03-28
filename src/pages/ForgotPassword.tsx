
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2, ArrowRight, Check } from "lucide-react";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet';

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
});

const ForgotPassword = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Reset link sent",
      description: "Check your email for the password reset link",
    });
    
    setIsLoading(false);
    setIsSubmitted(true);
  };

  return (
    <>
      <Helmet>
        <title>Forgot Password | Developito</title>
        <meta name="description" content="Reset your Developito account password" />
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
            {!isSubmitted ? (
              <>
                <div className="text-center mb-8">
                  <h1 className="text-2xl font-bold mb-2">Reset Your Password</h1>
                  <p className="text-gray-400">
                    Enter your email address and we'll send you a link to reset your password
                  </p>
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
                      Send Reset Link
                    </Button>
                  </form>
                </Form>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-4"
              >
                <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-green-900/30 mb-6">
                  <Check className="w-8 h-8 text-green-400" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Check Your Email</h2>
                <p className="text-gray-300 mb-6">
                  We've sent a password reset link to your email address. 
                  Please check your inbox (and spam folder).
                </p>
                <Button asChild className="bg-neon-blue hover:bg-neon-blue/80">
                  <Link to="/sign-in">
                    Return to Sign In
                  </Link>
                </Button>
              </motion.div>
            )}

            <div className="mt-8 text-center">
              <p className="text-gray-400">
                Remember your password?{" "}
                <Link to="/sign-in" className="text-neon-blue hover:underline">
                  Sign In
                </Link>
              </p>
            </div>
          </motion.div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ForgotPassword;
