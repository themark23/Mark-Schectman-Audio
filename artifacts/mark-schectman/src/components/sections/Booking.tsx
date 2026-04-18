import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  eventType: z.string().min(1, "Please select an event type"),
  eventDate: z.string().optional(),
  message: z.string().min(10, "Please provide some details"),
});

export function Booking() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      eventType: "",
      eventDate: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    setTimeout(() => {
      console.log(values);
      setIsSubmitting(false);
      toast({
        title: "Message sent successfully!",
        description: "Mark will get back to you shortly.",
      });
      form.reset();
    }, 1500);
  }

  return (
    <section id="booking" className="py-16 md:py-24 bg-background relative border-t border-border">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-24 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="aspect-[3/4] overflow-hidden shadow-2xl relative mb-8 md:mb-10 max-w-sm lg:max-w-none">
              <img 
                src="https://images.squarespace-cdn.com/content/v1/6642ea1aa390b918824df07e/e74e26b7-7529-48e6-b544-81d4ca54190d/IMG_5620.jpg"
                alt="Mark emceeing on stage"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary mb-4 md:mb-6 leading-tight">
              Let's make your next event <span className="italic text-accent">memorable</span>.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-5 md:mb-6">
              Mark has emceed everything from concert festivals to galas to award shows with a cool confidence that sets the perfect vibe for your event. With a collaborative, go-with-the-flow attitude, Mark is ready to truly understand your needs and develop a bespoke approach based on your audience and goals.
            </p>
            <div className="text-lg md:text-xl font-serif italic text-primary mt-6 md:mt-8">
              <a href="mailto:markschectman@gmail.com" className="hover:text-accent transition-colors">markschectman@gmail.com</a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border p-6 md:p-8 lg:p-12 shadow-xl"
          >
            <h3 className="text-xl md:text-2xl font-bold font-serif text-primary mb-6 md:mb-8 uppercase tracking-widest">Book Mark</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 md:space-y-6">
                <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary font-bold uppercase tracking-wider text-xs">Name</FormLabel>
                        <FormControl>
                          <Input className="bg-background border-border h-12 rounded-none focus-visible:ring-accent" {...field} />
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
                        <FormLabel className="text-primary font-bold uppercase tracking-wider text-xs">Email</FormLabel>
                        <FormControl>
                          <Input type="email" className="bg-background border-border h-12 rounded-none focus-visible:ring-accent" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
                  <FormField
                    control={form.control}
                    name="eventType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary font-bold uppercase tracking-wider text-xs">Event Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-background border-border h-12 rounded-none focus:ring-accent">
                              <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="corporate">Corporate Event</SelectItem>
                            <SelectItem value="awards">Awards Gala</SelectItem>
                            <SelectItem value="concert">Concert/Festival</SelectItem>
                            <SelectItem value="charity">Charity Event</SelectItem>
                            <SelectItem value="conference">Conference</SelectItem>
                            <SelectItem value="voiceover">Voice Over</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="eventDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary font-bold uppercase tracking-wider text-xs">Event Date (Optional)</FormLabel>
                        <FormControl>
                          <Input type="text" placeholder="MM/DD/YYYY" className="bg-background border-border h-12 rounded-none focus-visible:ring-accent" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-primary font-bold uppercase tracking-wider text-xs">Project Details</FormLabel>
                      <FormControl>
                        <Textarea 
                          className="min-h-[130px] bg-background border-border rounded-none resize-y focus-visible:ring-accent" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full h-14 bg-accent text-white hover:bg-accent/90 rounded-none text-sm font-bold uppercase tracking-widest shadow-lg mt-2" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Book Now"}
                </Button>
              </form>
            </Form>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
