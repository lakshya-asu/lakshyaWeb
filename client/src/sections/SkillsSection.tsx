import { mlSkills, roboticsSkills, devSkills } from "@shared/data";
import { motion } from "framer-motion";

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
    <section id="skills" className="py-20 bg-dark bg-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-primary">Skills & Expertise</h2>
          <div className="mt-2 h-1 w-20 bg-primary mx-auto"></div>
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
            className="bg-dark/80 p-6 rounded-xl border border-primary/20 hover:border-primary/50 transition-all"
            variants={itemVariants}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                <i className="bx bx-brain text-primary text-2xl"></i>
              </div>
              <h3 className="text-xl font-display font-bold">Machine Learning</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {mlSkills.map((skill, index) => (
                <motion.span 
                  key={index} 
                  className="skill-bubble px-4 py-2 bg-primary/10 text-primary rounded-full text-sm"
                  whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.4)' }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
          
          {/* Robotics Skills */}
          <motion.div 
            className="bg-dark/80 p-6 rounded-xl border border-secondary/20 hover:border-secondary/50 transition-all"
            variants={itemVariants}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mr-4">
                <i className="bx bx-chip text-secondary text-2xl"></i>
              </div>
              <h3 className="text-xl font-display font-bold">Robotics</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {roboticsSkills.map((skill, index) => (
                <motion.span 
                  key={index} 
                  className="skill-bubble px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm"
                  whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(16, 185, 129, 0.4)' }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
          
          {/* Development Skills */}
          <motion.div 
            className="bg-dark/80 p-6 rounded-xl border border-accent/20 hover:border-accent/50 transition-all"
            variants={itemVariants}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mr-4">
                <i className="bx bx-code-alt text-accent text-2xl"></i>
              </div>
              <h3 className="text-xl font-display font-bold">Development</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {devSkills.map((skill, index) => (
                <motion.span 
                  key={index} 
                  className="skill-bubble px-4 py-2 bg-accent/10 text-accent rounded-full text-sm"
                  whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(139, 92, 246, 0.4)' }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
        
        {/* Interactive Skills Visualization */}
        <motion.div 
          className="mt-16 relative h-80 bg-dark/50 rounded-xl overflow-hidden border border-primary/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="text-lg font-display mb-4">Interactive Skills Visualization</p>
              <p className="text-sm text-gray-400">This would be an interactive 3D network of skills showing relationships and proficiency levels</p>
            </div>
          </div>
          
          {/* Simulated animated particles for visual effect */}
          <div className="absolute inset-0 overflow-hidden">
            {Array.from({ length: 20 }).map((_, i) => {
              const top = Math.random() * 80;
              const left = Math.random() * 90;
              const size = Math.random() * 3 + 1;
              const delay = Math.random() * 2;
              
              return (
                <motion.div 
                  key={i}
                  className={`absolute rounded-full ${i % 3 === 0 ? 'bg-primary' : i % 3 === 1 ? 'bg-secondary' : 'bg-accent'}`}
                  style={{ 
                    top: `${top}%`, 
                    left: `${left}%`, 
                    width: `${size}px`, 
                    height: `${size}px`
                  }}
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ 
                    duration: 2 + Math.random(), 
                    repeat: Infinity, 
                    delay: delay,
                    ease: "easeInOut"
                  }}
                />
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
