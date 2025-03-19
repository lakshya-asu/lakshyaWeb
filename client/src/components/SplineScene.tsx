import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// This component will be replaced with a real Spline integration
// Currently using a placeholder with simulated 3D elements
export default function SplineScene() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading the 3D scene
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-primary">Loading 3D scene...</div>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex items-center justify-center relative">
      <div className="absolute w-full h-full flex items-center justify-center">
        <div className="relative w-64 h-64 md:w-96 md:h-96">
          {/* Simulated 3D Elements */}
          <motion.div 
            className="absolute w-full h-full rounded-full border-4 border-primary opacity-20"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className="absolute w-full h-full rounded-full border-4 border-secondary opacity-20 rotate-45"
            animate={{ rotate: 405 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute top-0 left-1/4 w-4 h-4 rounded-full bg-accent"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-1/4 right-0 w-6 h-6 rounded-full bg-secondary opacity-75"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>
    </div>
  );
}
