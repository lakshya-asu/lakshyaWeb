import { useEffect, useState } from "react";
import Spline from '@splinetool/react-spline';
import { motion } from "framer-motion";

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

  const handleSplineLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="w-full h-full flex items-center justify-center relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center z-10 bg-dark/50">
          <div className="text-primary text-lg font-medium">Loading 3D scene...</div>
        </div>
      )}
      
      <div className="absolute w-full h-full">
        <Spline 
          scene="https://prod.spline.design/KR8gYIORGSfbrPzp/scene.splinecode"
          onLoad={handleSplineLoad}
        />
      </div>
    </div>
  );
}
