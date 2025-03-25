import { mlSkills, roboticsSkills, devSkills } from "@shared/data";
import { motion } from "framer-motion";
import { Brain, Cpu, Code } from "lucide-react";

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
    <section id="skills" className="py-16 bg-[#0a0c13]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-display text-white">
            Skills & Expertise
          </h2>
          <div className="mt-2 h-0.5 w-12 bg-primary mx-auto"></div>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* ML Skills */}
          <motion.div 
            className="bg-[#111827] p-5 rounded-lg border-l-4 border-[#3b82f6] transition-all"
            variants={itemVariants}
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-md bg-[#3b82f6]/10 flex items-center justify-center mr-3">
                <Brain className="text-[#3b82f6] h-5 w-5" />
              </div>
              <h3 className="text-lg font-display font-bold text-white">Machine Learning</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {mlSkills.map((skill, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 bg-[#3b82f6]/10 text-[#3b82f6] rounded-md text-xs"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
          
          {/* Robotics Skills */}
          <motion.div 
            className="bg-[#111827] p-5 rounded-lg border-l-4 border-[#10b981] transition-all"
            variants={itemVariants}
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-md bg-[#10b981]/10 flex items-center justify-center mr-3">
                <Cpu className="text-[#10b981] h-5 w-5" />
              </div>
              <h3 className="text-lg font-display font-bold text-white">Robotics</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {roboticsSkills.map((skill, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 bg-[#10b981]/10 text-[#10b981] rounded-md text-xs"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
          
          {/* Development Skills */}
          <motion.div 
            className="bg-[#111827] p-5 rounded-lg border-l-4 border-[#8b5cf6] transition-all"
            variants={itemVariants}
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-md bg-[#8b5cf6]/10 flex items-center justify-center mr-3">
                <Code className="text-[#8b5cf6] h-5 w-5" />
              </div>
              <h3 className="text-lg font-display font-bold text-white">Development</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {devSkills.map((skill, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 bg-[#8b5cf6]/10 text-[#8b5cf6] rounded-md text-xs"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
