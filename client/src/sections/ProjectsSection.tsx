import { projects } from "@shared/data";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ProjectsSection() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="projects" className="py-20 bg-dark/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-primary">Featured Projects</h2>
          <div className="mt-2 h-1 w-20 bg-primary mx-auto"></div>
          <p className="mt-4 max-w-2xl mx-auto text-gray-300">
            Exploring the frontiers of robotics, machine learning, and causal reasoning
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="project-card group rounded-xl overflow-hidden bg-dark border border-primary/20 transition-all hover:border-primary/50"
              variants={itemVariants}
            >
              <div className="relative h-48 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <i className={`bx ${project.icon} text-5xl text-white opacity-50`}></i>
                </div>
                <div className="project-overlay absolute inset-0 bg-gradient-to-t from-dark via-dark/70 to-transparent opacity-0 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <span className={`text-xs font-medium px-2 py-1 rounded ${
                      project.type === 'hackathon' ? 'bg-primary/20 text-primary' : 
                      project.type === 'research' ? 'bg-secondary/20 text-secondary' : 
                      'bg-accent/20 text-accent'
                    }`}>
                      {project.typeLabel}
                    </span>
                    <h4 className="text-lg font-display font-bold mt-2">{project.title}</h4>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h4 className="font-display font-bold text-lg mb-2">{project.title}</h4>
                <p className="text-sm text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className={`text-xs px-2 py-1 rounded-full ${
                        project.type === 'hackathon' ? 'bg-primary/10 text-primary' : 
                        project.type === 'research' ? 'bg-secondary/10 text-secondary' : 
                        'bg-accent/10 text-accent'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link} 
                  className={`${
                    project.type === 'hackathon' ? 'text-primary hover:text-primary/80' : 
                    project.type === 'research' ? 'text-secondary hover:text-secondary/80' : 
                    'text-accent hover:text-accent/80'
                  } text-sm flex items-center`}
                >
                  Learn more <i className="bx bx-right-arrow-alt ml-1"></i>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary/10"
          >
            View All Projects <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
