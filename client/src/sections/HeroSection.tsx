import SplineScene from "@/components/SplineScene";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section id="hero" className="relative pt-16 overflow-hidden bg-gradient-to-b from-black to-black/90">
      <div className="spline-container w-full h-[650px] md:h-[750px] lg:h-[800px] relative">
        {/* Semi-transparent overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/30 z-[5]"></div>
        
        {/* Spline Scene Container */}
        <div className="absolute inset-0">
          <SplineScene />
        </div>
        
        {/* Content overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="backdrop-blur-sm bg-black/20 p-6 rounded-2xl border border-white/5 max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold font-display tracking-tight text-white mb-4">
              <span className="block">Lakshya Jain</span>
              <span className="block text-primary">Robotics & ML Researcher</span>
            </h1>
            <p className="mt-4 text-xl max-w-2xl mx-auto text-white/90">
              Exploring the intersection of causal reasoning, robotics, and autonomous systems
            </p>
            
            <motion.div 
              className="mt-8 flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <Button 
                variant="default" 
                size="lg"
                className="bg-primary hover:bg-primary/80 text-white rounded-full px-6"
                asChild
              >
                <a href="#projects">View Projects</a>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white/10 rounded-full px-6"
                asChild
              >
                <a href="#contact">Get in Touch</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Gradient overlay at the bottom for smooth transition to the next section */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent z-[6]"></div>
      </div>
    </section>
  );
}
