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
    <section id="skills" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold font-display text-white">
            Skills & Expertise
          </h2>
          <div className="mt-3 h-1 w-16 bg-primary/80 mx-auto rounded-full"></div>
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
            className="bg-slate-800/60 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-slate-700/50 hover:border-primary/30 transition-all"
            variants={itemVariants}
          >
            <div className="flex items-center mb-5">
              <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center mr-4">
                <Brain className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-display font-bold text-white/90">Machine Learning</h3>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {mlSkills.map((skill, index) => (
                <span 
                  key={index} 
                  className="px-3.5 py-1.5 bg-primary/10 text-primary/90 rounded-lg text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
          
          {/* Robotics Skills */}
          <motion.div 
            className="bg-slate-800/60 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-slate-700/50 hover:border-primary/30 transition-all"
            variants={itemVariants}
          >
            <div className="flex items-center mb-5">
              <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center mr-4">
                <Cpu className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-display font-bold text-white/90">Robotics</h3>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {roboticsSkills.map((skill, index) => (
                <span 
                  key={index} 
                  className="px-3.5 py-1.5 bg-primary/10 text-primary/90 rounded-lg text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
          
          {/* Development Skills */}
          <motion.div 
            className="bg-slate-800/60 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-slate-700/50 hover:border-primary/30 transition-all"
            variants={itemVariants}
          >
            <div className="flex items-center mb-5">
              <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center mr-4">
                <Code className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-display font-bold text-white/90">Development</h3>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {devSkills.map((skill, index) => (
                <span 
                  key={index} 
                  className="px-3.5 py-1.5 bg-primary/10 text-primary/90 rounded-lg text-sm font-medium"
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
