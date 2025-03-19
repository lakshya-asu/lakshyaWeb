import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { skillsNetworkData } from "@shared/data";

// Group color mapping
const groupColors = {
  ml: "rgba(59, 130, 246, 1)", // blue
  robotics: "rgba(16, 185, 129, 1)", // green
  dev: "rgba(139, 92, 246, 1)" // purple
};

// Node interface
interface Node {
  id: string;
  name: string;
  group: string;
  level: number;
  description: string;
  x?: number;
  y?: number;
  z?: number;
  vx?: number;
  vy?: number;
  vz?: number;
}

// Link interface
interface Link {
  source: string | Node;
  target: string | Node;
  strength: number;
}

export default function SkillsNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);
  const [nodes, setNodes] = useState<Node[]>([]);
  const [hoveredNode, setHoveredNode] = useState<Node | null>(null);
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });
  const reqIdRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0, y: 0 });

  // Setup canvas and nodes
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const updateCanvasSize = () => {
      if (!canvas) return;
      const container = canvas.parentElement;
      if (!container) return;
      
      const { width, height } = container.getBoundingClientRect();
      canvas.width = width;
      canvas.height = height;
      setCanvasSize({ width, height });
    };
    
    // Initial canvas size
    updateCanvasSize();
    
    // Handle resize
    window.addEventListener('resize', updateCanvasSize);
    
    // Initialize nodes with 3D positions
    const initializedNodes = skillsNetworkData.nodes.map(node => ({
      ...node,
      x: (Math.random() - 0.5) * canvas.width * 0.8 + canvas.width / 2,
      y: (Math.random() - 0.5) * canvas.height * 0.8 + canvas.height / 2,
      z: Math.random() * 100 - 50,
      vx: 0,
      vy: 0,
      vz: 0
    }));
    
    setNodes(initializedNodes);
    
    // Process links to use node references
    const processedLinks = skillsNetworkData.links.map(link => {
      const sourceNode = initializedNodes.find(n => n.id === link.source);
      const targetNode = initializedNodes.find(n => n.id === link.target);
      
      if (!sourceNode || !targetNode) {
        console.error("Missing node for link:", link);
        return null;
      }
      
      return {
        source: sourceNode,
        target: targetNode,
        strength: link.strength
      };
    }).filter(link => link !== null) as Link[];
    
    // Handle mouse move events
    const onMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
      };
      
      // Find hovered node
      let closestNode = null;
      let closestDistance = Infinity;
      
      for (const node of initializedNodes) {
        if (!node.x || !node.y || !node.z) continue;
        
        // Apply perspective based on z position
        const perspective = 1000;
        const scale = perspective / (perspective + (node.z || 0));
        const projectedX = node.x * scale;
        const projectedY = node.y * scale;
        
        const dx = projectedX - mouseRef.current.x;
        const dy = projectedY - mouseRef.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Node radius is based on level and perspective
        const radius = 5 + (node.level * 1.2);
        const scaledRadius = radius * scale;
        
        if (distance < scaledRadius + 5 && distance < closestDistance) {
          closestDistance = distance;
          closestNode = node;
        }
      }
      
      setHoveredNode(closestNode);
    };
    
    // Handle clicks to select nodes
    const onClick = () => {
      setSelectedNode(hoveredNode);
    };
    
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('click', onClick);
    
    // Animation loop - simulation and rendering
    const simulate = () => {
      if (!ctx || !canvas) return;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Force simulation parameters
      const linkDistance = 100;
      const linkStrength = 0.05;
      const repulsion = 400;
      const centerStrength = 0.03;
      const damping = 0.95;
      
      // Apply forces between nodes
      for (let i = 0; i < initializedNodes.length; i++) {
        const nodeA = initializedNodes[i];
        if (!nodeA.x || !nodeA.y || !nodeA.z) continue;
        
        // Attraction to center
        nodeA.vx = (nodeA.vx || 0) + (canvas.width / 2 - nodeA.x) * centerStrength;
        nodeA.vy = (nodeA.vy || 0) + (canvas.height / 2 - nodeA.y) * centerStrength;
        nodeA.vz = (nodeA.vz || 0) + (0 - nodeA.z) * centerStrength * 0.5;
        
        // Repulsion between all nodes
        for (let j = i + 1; j < initializedNodes.length; j++) {
          const nodeB = initializedNodes[j];
          if (!nodeB.x || !nodeB.y || !nodeB.z) continue;
          
          const dx = nodeB.x - nodeA.x;
          const dy = nodeB.y - nodeA.y;
          const dz = nodeB.z - nodeA.z;
          const distance = Math.sqrt(dx * dx + dy * dy + dz * dz) || 1;
          
          // Skip if too far
          if (distance > 200) continue;
          
          const force = repulsion / (distance * distance);
          const fx = (dx / distance) * force;
          const fy = (dy / distance) * force;
          const fz = (dz / distance) * force;
          
          nodeA.vx = (nodeA.vx || 0) - fx;
          nodeA.vy = (nodeA.vy || 0) - fy;
          nodeA.vz = (nodeA.vz || 0) - fz;
          
          nodeB.vx = (nodeB.vx || 0) + fx;
          nodeB.vy = (nodeB.vy || 0) + fy;
          nodeB.vz = (nodeB.vz || 0) + fz;
        }
      }
      
      // Apply link forces
      for (const link of processedLinks) {
        const sourceNode = link.source as Node;
        const targetNode = link.target as Node;
        
        if (!sourceNode.x || !sourceNode.y || !sourceNode.z || 
            !targetNode.x || !targetNode.y || !targetNode.z) continue;
        
        const dx = targetNode.x - sourceNode.x;
        const dy = targetNode.y - sourceNode.y;
        const dz = targetNode.z - sourceNode.z;
        const distance = Math.sqrt(dx * dx + dy * dy + dz * dz) || 1;
        
        const force = (distance - linkDistance) * linkStrength * link.strength;
        const fx = (dx / distance) * force;
        const fy = (dy / distance) * force;
        const fz = (dz / distance) * force;
        
        sourceNode.vx = (sourceNode.vx || 0) + fx;
        sourceNode.vy = (sourceNode.vy || 0) + fy;
        sourceNode.vz = (sourceNode.vz || 0) + fz;
        
        targetNode.vx = (targetNode.vx || 0) - fx;
        targetNode.vy = (targetNode.vy || 0) - fy;
        targetNode.vz = (targetNode.vz || 0) - fz;
      }
      
      // Update positions
      for (const node of initializedNodes) {
        if (!node.vx || !node.vy || !node.vz) continue;
        
        node.vx *= damping;
        node.vy *= damping;
        node.vz *= damping;
        
        node.x = (node.x || 0) + node.vx;
        node.y = (node.y || 0) + node.vy;
        node.z = (node.z || 0) + node.vz;
        
        // Keep nodes in bounds
        const perspective = 1000;
        const scale = perspective / (perspective + (node.z || 0));
        const nodeRadius = (5 + node.level * 1.2) * scale;
        
        if (node.x < nodeRadius) node.x = nodeRadius;
        if (node.x > canvas.width - nodeRadius) node.x = canvas.width - nodeRadius;
        if (node.y < nodeRadius) node.y = nodeRadius;
        if (node.y > canvas.height - nodeRadius) node.y = canvas.height - nodeRadius;
        
        // Limit z-depth
        if (node.z < -200) node.z = -200;
        if (node.z > 200) node.z = 200;
      }
      
      // 3D Projection and Rendering
      // First render links
      ctx.lineWidth = 1;
      ctx.globalAlpha = 0.4;
      
      for (const link of processedLinks) {
        const sourceNode = link.source as Node;
        const targetNode = link.target as Node;
        
        if (!sourceNode.x || !sourceNode.y || !sourceNode.z || 
            !targetNode.x || !targetNode.y || !targetNode.z) continue;
        
        // Calculate 3D projection for each node
        const perspective = 1000;
        const sourceScale = perspective / (perspective + sourceNode.z);
        const targetScale = perspective / (perspective + targetNode.z);
        
        const x1 = sourceNode.x * sourceScale;
        const y1 = sourceNode.y * sourceScale;
        const x2 = targetNode.x * targetScale;
        const y2 = targetNode.y * targetScale;
        
        // Determine line strength based on link strength
        const lineAlpha = link.strength * 0.7;
        
        // Determine gradient colors based on node groups
        const sourceColor = groupColors[sourceNode.group as keyof typeof groupColors];
        const targetColor = groupColors[targetNode.group as keyof typeof groupColors];
        
        const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
        gradient.addColorStop(0, sourceColor.replace('1)', `${lineAlpha})`));
        gradient.addColorStop(1, targetColor.replace('1)', `${lineAlpha})`));
        
        ctx.strokeStyle = gradient;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }
      
      // Render nodes in sorted order (back to front)
      const sortedNodes = [...initializedNodes].sort((a, b) => (b.z || 0) - (a.z || 0));
      
      for (const node of sortedNodes) {
        if (!node.x || !node.y || !node.z) continue;
        
        // Calculate 3D projection
        const perspective = 1000;
        const scale = perspective / (perspective + node.z);
        const x = node.x * scale;
        const y = node.y * scale;
        
        // Radius based on node level and 3D perspective
        const baseRadius = 5 + node.level * 1.2;
        const radius = baseRadius * scale;
        
        // Node glow and fill
        const isHovered = node === hoveredNode;
        const isSelected = node === selectedNode;
        const color = groupColors[node.group as keyof typeof groupColors];
        
        if (isSelected || isHovered) {
          // Glow effect
          const glowRadius = radius * 1.8;
          const gradient = ctx.createRadialGradient(x, y, radius, x, y, glowRadius);
          gradient.addColorStop(0, color.replace('1)', '0.7)'));
          gradient.addColorStop(1, color.replace('1)', '0)'));
          
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(x, y, glowRadius, 0, Math.PI * 2);
          ctx.fill();
        }
        
        // Draw node
        ctx.globalAlpha = 0.9;
        ctx.fillStyle = isSelected || isHovered ? color : color.replace('1)', '0.7)');
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw border
        ctx.strokeStyle = color.replace('1)', '0.8)');
        ctx.lineWidth = isSelected || isHovered ? 2 : 1;
        ctx.stroke();
        
        // Draw text if hovered or selected
        if (isHovered || isSelected) {
          ctx.globalAlpha = 1;
          ctx.font = isSelected ? 'bold 12px Montserrat' : '12px Montserrat';
          ctx.fillStyle = '#ffffff';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(node.name, x, y - radius - 10);
          
          if (isSelected) {
            ctx.font = '10px Montserrat';
            ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
            ctx.fillText(`Proficiency: ${node.level}/10`, x, y + radius + 12);
          }
        }
      }
      
      // Request next frame
      reqIdRef.current = requestAnimationFrame(simulate);
    };
    
    simulate();
    
    return () => {
      cancelAnimationFrame(reqIdRef.current);
      window.removeEventListener('resize', updateCanvasSize);
      canvas.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('click', onClick);
    };
  }, []);
  
  return (
    <div className="relative w-full h-full">
      <canvas 
        ref={canvasRef} 
        className="w-full h-full cursor-pointer" 
      />
      
      {selectedNode && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-4 left-4 right-4 bg-dark/90 border border-white/10 rounded-lg p-4 backdrop-blur-sm"
        >
          <div className="flex items-center mb-2">
            <div 
              className="w-3 h-3 rounded-full mr-2" 
              style={{ backgroundColor: groupColors[selectedNode.group as keyof typeof groupColors] }}
            />
            <h4 className="text-lg font-display font-bold">{selectedNode.name}</h4>
            <div className="ml-auto px-2 py-1 rounded text-xs bg-white/10">
              {selectedNode.group === "ml" ? "Machine Learning" : 
               selectedNode.group === "robotics" ? "Robotics" : "Development"}
            </div>
          </div>
          <p className="text-sm text-gray-300 mb-3">{selectedNode.description}</p>
          
          <div className="w-full bg-dark/50 rounded-full h-2 mb-1">
            <div 
              className="h-2 rounded-full" 
              style={{ 
                width: `${selectedNode.level * 10}%`,
                backgroundColor: groupColors[selectedNode.group as keyof typeof groupColors]
              }} 
            />
          </div>
          <div className="flex justify-between text-xs text-gray-400">
            <span>Beginner</span>
            <span>Proficient</span>
            <span>Expert</span>
          </div>
        </motion.div>
      )}
      
      <div className="absolute top-4 left-4 bg-dark/80 border border-white/10 rounded-lg p-3 backdrop-blur-sm">
        <div className="text-xs text-gray-300">
          <div className="flex items-center mb-2">
            <span className="inline-block w-10">Nodes:</span>
            <div className="flex gap-2">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-blue-500 mr-1"></div>
                <span>ML</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-green-500 mr-1"></div>
                <span>Robotics</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-purple-500 mr-1"></div>
                <span>Dev</span>
              </div>
            </div>
          </div>
          <div className="text-gray-400 text-xs">
            <span>Click on a node to see details</span>
          </div>
        </div>
      </div>
    </div>
  );
}