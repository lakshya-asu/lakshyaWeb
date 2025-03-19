import SplineScene from "@/components/SplineScene";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section id="hero" className="relative pt-16 overflow-hidden">
      <div className="spline-container w-full h-[600px] md:h-[600px] bg-dark relative">
        <div className="absolute inset-0 bg-grid"></div>
        
        {/* Two-column layout with intro on left and Spline on right */}
        <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 gap-4 z-10">
          {/* Intro Text - Left Column */}
          <motion.div 
            className="flex flex-col justify-center px-6 md:px-10 lg:px-16"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white mb-4">
              <span className="block">Lakshya Jain</span>
              <span className="block text-primary">Robotics & ML Researcher</span>
            </h1>
            <p className="mt-4 text-lg md:text-xl">
              Exploring the intersection of causal reasoning, robotics, and autonomous systems
            </p>
            
            <motion.div 
              className="mt-8 flex flex-wrap gap-4"
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
          </motion.div>
          
          {/* Spline Scene - Right Column */}
          <div className="relative h-full hidden md:block">
            <SplineScene />
          </div>
          
          {/* Mobile-only Spline Scene that appears below text */}
          <div className="relative h-full md:hidden mt-8">
            <SplineScene />
          </div>
        </div>
      </div>
    </section>
  );
}
