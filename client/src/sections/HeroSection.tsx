import SplineScene from "@/components/SplineScene";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section id="hero" className="relative pt-16 overflow-hidden">
      <div className="spline-container w-full h-[600px] md:h-[600px] bg-dark relative">
        <div className="absolute inset-0 bg-grid"></div>
        
        <SplineScene />
        
        {/* Overlaid text content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold font-display tracking-tight text-white mb-4">
              <span className="block">Lakshya Jain</span>
              <span className="block text-primary">Robotics & ML Researcher</span>
            </h1>
            <p className="mt-4 text-xl max-w-2xl">
              Exploring the intersection of causal reasoning, robotics, and autonomous systems
            </p>
          </motion.div>
          
          <motion.div 
            className="mt-8 flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button 
              variant="default" 
              size="lg"
              className="bg-primary hover:bg-primary/80 text-white"
              asChild
            >
              <a href="#projects">View Projects</a>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary/10"
              asChild
            >
              <a href="#contact">Get in Touch</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
