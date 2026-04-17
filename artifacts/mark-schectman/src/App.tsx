import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Clients } from "@/components/sections/Clients";
import { Experience } from "@/components/sections/Experience";
import { AudioSamples } from "@/components/sections/AudioSamples";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";

const queryClient = new QueryClient();

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col relative selection:bg-primary/30 selection:text-primary">
      {/* Abstract Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-blue-900/10 blur-[150px]" />
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      </div>

      <Navbar />
      
      <main className="flex-1 relative z-10">
        <Hero />
        <Clients />
        <About />
        <Experience />
        <AudioSamples />
        <Testimonials />
        <Contact />
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
