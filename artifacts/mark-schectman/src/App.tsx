import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Radio } from "@/components/sections/Radio";
import { AudioSamples } from "@/components/sections/AudioSamples";
import { Interviews } from "@/components/sections/Interviews";
import { Booking } from "@/components/sections/Booking";

const queryClient = new QueryClient();

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col relative selection:bg-accent/30 selection:text-primary">
      <Navbar />
      
      <main className="flex-1 relative z-10">
        <Hero />
        <About />
        <Radio />
        <AudioSamples />
        <Interviews />
        <Booking />
      </main>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Home />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
