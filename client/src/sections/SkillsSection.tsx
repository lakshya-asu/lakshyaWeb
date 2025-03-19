import { mlSkills, roboticsSkills, devSkills } from "@shared/data";
import { motion } from "framer-motion";
import SkillsNetwork from "@/components/SkillsNetwork";
import { Brain, Cpu, Code, NetworkIcon, MousePointerClick } from "lucide-react";

export default function SkillsSection() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-[#0a0c13] to-[#111827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-white">
            <span className="text-primary">Skills</span> & Expertise
          </h2>
          <div className="mt-2 h-1 w-20 bg-primary mx-auto"></div>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">
            Specialized in causal reasoning, robotics, and machine learning
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* ML Skills */}
          <motion.div 
            className="bg-[#111827]/80 p-6 rounded-xl border border-[#3b82f6]/30 hover:border-[#3b82f6]/70 transition-all shadow-xl backdrop-blur-sm hover:shadow-[#3b82f6]/20 hover:shadow-2xl"
            variants={itemVariants}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-[#3b82f6]/20 flex items-center justify-center mr-4 border border-[#3b82f6]/30">
                <Brain className="text-[#3b82f6] h-6 w-6" />
              </div>
              <h3 className="text-xl font-display font-bold text-white">Machine Learning</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {mlSkills.map((skill, index) => (
                <motion.span 
                  key={index} 
                  className="skill-bubble px-4 py-2 bg-[#3b82f6]/10 text-[#3b82f6] rounded-full text-sm border border-[#3b82f6]/20"
                  whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.3)' }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
          
          {/* Robotics Skills */}
          <motion.div 
            className="bg-[#111827]/80 p-6 rounded-xl border border-[#10b981]/30 hover:border-[#10b981]/70 transition-all shadow-xl backdrop-blur-sm hover:shadow-[#10b981]/20 hover:shadow-2xl"
            variants={itemVariants}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-[#10b981]/20 flex items-center justify-center mr-4 border border-[#10b981]/30">
                <Cpu className="text-[#10b981] h-6 w-6" />
              </div>
              <h3 className="text-xl font-display font-bold text-white">Robotics</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {roboticsSkills.map((skill, index) => (
                <motion.span 
                  key={index} 
                  className="skill-bubble px-4 py-2 bg-[#10b981]/10 text-[#10b981] rounded-full text-sm border border-[#10b981]/20"
                  whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(16, 185, 129, 0.3)' }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
          
          {/* Development Skills */}
          <motion.div 
            className="bg-[#111827]/80 p-6 rounded-xl border border-[#8b5cf6]/30 hover:border-[#8b5cf6]/70 transition-all shadow-xl backdrop-blur-sm hover:shadow-[#8b5cf6]/20 hover:shadow-2xl"
            variants={itemVariants}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-[#8b5cf6]/20 flex items-center justify-center mr-4 border border-[#8b5cf6]/30">
                <Code className="text-[#8b5cf6] h-6 w-6" />
              </div>
              <h3 className="text-xl font-display font-bold text-white">Development</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {devSkills.map((skill, index) => (
                <motion.span 
                  key={index} 
                  className="skill-bubble px-4 py-2 bg-[#8b5cf6]/10 text-[#8b5cf6] rounded-full text-sm border border-[#8b5cf6]/20"
                  whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(139, 92, 246, 0.3)' }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
        
        {/* Interactive Skills Network Visualization */}
        <motion.div 
          className="mt-16 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <NetworkIcon className="text-primary h-6 w-6" />
            <h3 className="text-2xl font-display font-bold text-white">Skills Relationship Network</h3>
          </div>
          
          <div className="relative bg-[#0a101f]/70 rounded-xl overflow-hidden border border-primary/20 shadow-2xl h-[500px]">
            <div className="absolute right-4 top-4 flex items-center gap-2 bg-dark/80 rounded-full px-3 py-1.5 border border-white/10 z-10 text-xs text-white/60">
              <MousePointerClick className="h-3 w-3" />
              <span>Click on nodes to explore</span>
            </div>
            
            {/* 3D Skills Network Visualization */}
            <SkillsNetwork />
          </div>
          
          <div className="text-center mt-6 text-white/60 text-sm">
            This interactive network visualizes the connections between my skills and their proficiency levels.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
