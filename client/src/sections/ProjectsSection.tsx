import { projects } from "@shared/data";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
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

  // Color mapping for project types
  const typeColors = {
    hackathon: {
      accent: "border-l-[#3b82f6]",
      text: "text-[#3b82f6]",
      badge: "bg-[#3b82f6]/10 text-[#3b82f6]"
    },
    research: {
      accent: "border-l-[#10b981]",
      text: "text-[#10b981]",
      badge: "bg-[#10b981]/10 text-[#10b981]"
    },
    robotics: {
      accent: "border-l-[#8b5cf6]",
      text: "text-[#8b5cf6]",
      badge: "bg-[#8b5cf6]/10 text-[#8b5cf6]"
    }
  };

  return (
    <section id="projects" className="py-28 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold font-display text-white mb-3">
            Featured Projects
          </h2>
          <div className="h-1 w-16 bg-primary/80 mx-auto rounded-full mb-6"></div>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Innovative applications of AI, machine learning, and robotics
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="bg-slate-800/60 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-slate-700/50 hover:border-primary/30 transition-all"
              variants={itemVariants}
            >
              <div className="p-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
                  <h4 className="font-display font-bold text-2xl text-white/90">{project.title}</h4>
                  <span className="px-3.5 py-1.5 rounded-full bg-primary/15 text-primary/90 text-sm font-medium w-fit">
                    {project.typeLabel}
                  </span>
                </div>
                
                <p className="text-base text-white/70 mb-6 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-3 mb-7">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="text-sm px-3 py-1.5 bg-slate-700/60 text-white/70 rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-8 text-sm pt-4 border-t border-slate-700/30">
                  <a 
                    href={project.link} 
                    className="text-primary/90 hover:text-primary flex items-center transition-colors mt-4"
                  >
                    <ExternalLink className="h-5 w-5 mr-2" />
                    View Demo
                  </a>
                  
                  <a 
                    href={"#"} 
                    className="text-white/70 hover:text-white/90 flex items-center transition-colors mt-4"
                  >
                    <Github className="h-5 w-5 mr-2" />
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Button 
            variant="outline" 
            className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/30 text-base px-8 py-6"
          >
            View All Projects <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
