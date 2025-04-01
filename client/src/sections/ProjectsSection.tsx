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
    <section id="projects" className="py-16 bg-[#0a0c13]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold font-display text-white">
            Featured Projects
          </h2>
          <div className="mt-2 h-0.5 w-12 bg-primary mx-auto"></div>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className={`bg-[#111827] rounded-md overflow-hidden border-l-4 ${typeColors[project.type as keyof typeof typeColors].accent}`}
              variants={itemVariants}
            >
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-display font-bold text-lg text-white">{project.title}</h4>
                  <span className={`text-xs px-2 py-1 rounded-sm ${typeColors[project.type as keyof typeof typeColors].badge}`}>
                    {project.typeLabel}
                  </span>
                </div>
                
                <p className="text-sm text-white/70 mb-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="text-xs px-2 py-0.5 bg-white/5 text-white/60 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4 text-xs">
                  <a 
                    href={project.link} 
                    className={`${typeColors[project.type as keyof typeof typeColors].text} flex items-center`}
                  >
                    <ExternalLink className="h-3 w-3 mr-1" />
                    Demo
                  </a>
                  
                  <a 
                    href={"#"} 
                    className="text-white/60 flex items-center"
                  >
                    <Github className="h-3 w-3 mr-1" />
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Button 
            variant="ghost" 
            className="text-primary hover:bg-primary/5 text-sm"
          >
            View All Projects <ArrowRight className="ml-1 h-3 w-3" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
