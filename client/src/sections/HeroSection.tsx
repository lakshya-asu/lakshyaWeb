import SplineScene from "@/components/SplineScene";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section id="hero" className="relative pt-16 overflow-hidden">
      <div className="spline-container w-full h-[650px] md:h-[700px] bg-dark relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-transparent z-0"></div>
        
        {/* 3D Scene positioned to the right */}
        <SplineScene />
        
        {/* Text content positioned to the left */}
        <div className="absolute inset-0 flex flex-col items-start justify-center text-left z-10 px-8 sm:px-12 lg:px-16 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold font-display tracking-tight text-white mb-4">
              <span className="block">Lakshya Jain</span>
              <span className="block text-primary">Robotics & ML Researcher</span>
            </h1>
            <p className="mt-4 text-xl text-gray-200 max-w-xl font-sans leading-relaxed">
              Exploring the intersection of causal reasoning, robotics, and autonomous systems
            </p>
          </motion.div>
          
          <motion.div 
            className="mt-8 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button 
              variant="default" 
              size="lg"
              className="bg-primary hover:bg-primary/80 text-white font-medium rounded-md"
              asChild
            >
              <a href="#projects">View Projects</a>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary/10 font-medium rounded-md"
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
