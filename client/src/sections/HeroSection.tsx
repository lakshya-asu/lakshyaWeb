import SplineScene from "@/components/SplineScene";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section id="hero" className="relative pt-16 overflow-hidden">
      <div className="spline-container w-full h-[650px] md:h-[700px] relative bg-gradient-to-br from-[#0a1421] via-[#0e1c2b] to-[#111a28]">
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1421]/95 via-[#0a1421]/80 to-transparent z-0"></div>
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10 z-0" 
             style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.2\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
        
        {/* 3D Scene positioned to the right */}
        <SplineScene />
        
        {/* Text content positioned to the left */}
        <div className="absolute inset-0 flex flex-col items-start justify-center text-left z-10 px-8 sm:px-12 lg:px-16 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
              <span className="block text-white">Lakshya Jain</span>
              <span className="block text-gradient">Robotics & ML Researcher</span>
            </h1>
            <p className="mt-4 text-xl text-white/90 max-w-xl leading-relaxed">
              Exploring the intersection of causal reasoning, robotics, and autonomous systems
            </p>
          </motion.div>
          
          <motion.div 
            className="mt-10 flex flex-wrap gap-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button 
              variant="default" 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-medium rounded-lg shadow-md shadow-primary/20"
              asChild
            >
              <a href="#projects">View Projects</a>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 font-medium rounded-lg"
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
