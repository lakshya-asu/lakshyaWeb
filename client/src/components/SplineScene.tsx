import { useState } from "react";
import Spline from '@splinetool/react-spline';
import { motion } from "framer-motion";

export default function SplineScene() {
  const [isLoading, setIsLoading] = useState(true);

  const handleOnLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="w-full h-full relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center z-10 bg-black/30 backdrop-blur-sm">
          <motion.div 
            className="text-primary text-lg font-medium flex items-center gap-2"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Loading 3D Scene...
          </motion.div>
        </div>
      )}
      
      <Spline
        scene="https://prod.spline.design/OFVUl4spMro8Cg69/scene.splinecode"
        onLoad={handleOnLoad}
        className="w-full h-full"
      />
    </div>
  );
}
