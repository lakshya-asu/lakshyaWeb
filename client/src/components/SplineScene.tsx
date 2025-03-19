import { useEffect, useState, useRef } from "react";
import { Application } from '@splinetool/runtime';

export default function SplineScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Only initialize once the component is mounted
    if (canvasRef.current) {
      const app = new Application(canvasRef.current);
      app.load('https://prod.spline.design/qpAo2x456Q8u-kah/scene.splinecode')
        .then(() => {
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error loading Spline scene:", error);
          setIsLoading(false);
        });
    }

    // Cleanup function not needed as Spline handles its own cleanup
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center z-10 bg-dark/50">
          <div className="text-primary text-lg font-medium">Loading 3D scene...</div>
        </div>
      )}
      
      <div className="absolute w-full h-full">
        <canvas id="canvas3d" ref={canvasRef} className="w-full h-full" />
      </div>
    </div>
  );
}
