import { useEffect, useRef } from "react";
import { Application } from '@splinetool/runtime';

export default function SplineScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isInitializedRef = useRef(false);

  useEffect(() => {
    // Only initialize once
    if (canvasRef.current && !isInitializedRef.current) {
      isInitializedRef.current = true;
      
      try {
        const app = new Application(canvasRef.current);
        app.load('https://prod.spline.design/KR8gYIORGSfbrPzp/scene.splinecode');
      } catch (error) {
        console.error("Error loading Spline scene:", error);
      }
    }

    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <div className="absolute top-0 right-0 bottom-0 w-full h-full flex items-center justify-end">
      <canvas 
        ref={canvasRef} 
        id="canvas3d" 
        className="w-full h-full object-contain"
      />
    </div>
  );
}
