import { projects } from "@shared/data";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, Github, FolderKanban } from "lucide-react";
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
      bg: "from-[#3b82f6]/10 to-[#60a5fa]/5",
      border: "border-[#3b82f6]/30",
      hover: "hover:border-[#3b82f6]/70",
      text: "text-[#3b82f6]",
      badge: "bg-[#3b82f6]/10 border-[#3b82f6]/20 text-[#3b82f6]",
      shadow: "group-hover:shadow-[#3b82f6]/10"
    },
    research: {
      bg: "from-[#10b981]/10 to-[#34d399]/5",
      border: "border-[#10b981]/30",
      hover: "hover:border-[#10b981]/70",
      text: "text-[#10b981]",
      badge: "bg-[#10b981]/10 border-[#10b981]/20 text-[#10b981]",
      shadow: "group-hover:shadow-[#10b981]/10"
    },
    robotics: {
      bg: "from-[#8b5cf6]/10 to-[#a78bfa]/5",
      border: "border-[#8b5cf6]/30",
      hover: "hover:border-[#8b5cf6]/70",
      text: "text-[#8b5cf6]",
      badge: "bg-[#8b5cf6]/10 border-[#8b5cf6]/20 text-[#8b5cf6]",
      shadow: "group-hover:shadow-[#8b5cf6]/10"
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-[#111827] to-[#0a0c13]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <FolderKanban className="text-primary h-7 w-7" />
              <h2 className="text-3xl md:text-4xl font-bold font-display text-white">
                Featured <span className="text-primary">Projects</span>
              </h2>
            </div>
            <div className="mt-2 h-1 w-20 bg-primary mx-auto"></div>
            <p className="mt-4 max-w-2xl mx-auto text-white/70">
              Exploring the frontiers of robotics, machine learning, and causal reasoning
            </p>
          </motion.div>
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
              className={`project-card group rounded-xl overflow-hidden bg-[#111827]/70 backdrop-blur-sm ${typeColors[project.type as keyof typeof typeColors].border} border transition-all ${typeColors[project.type as keyof typeof typeColors].hover} shadow-lg ${typeColors[project.type as keyof typeof typeColors].shadow} group-hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300`}
              variants={itemVariants}
            >
              <div className="relative h-48 overflow-hidden">
                <div className={`w-full h-full bg-gradient-to-br ${typeColors[project.type as keyof typeof typeColors].bg} flex items-center justify-center`}>
                  <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center">
                    <i className={`bx ${project.icon} text-4xl ${typeColors[project.type as keyof typeof typeColors].text} opacity-80`}></i>
                  </div>
                </div>
                
                <div className="absolute top-4 left-4">
                  <span className={`text-xs font-medium px-3 py-1 rounded-full border ${typeColors[project.type as keyof typeof typeColors].badge}`}>
                    {project.typeLabel}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h4 className="font-display font-bold text-lg mb-3 text-white">{project.title}</h4>
                <p className="text-sm text-white/70 mb-4 line-clamp-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className={`text-xs px-2.5 py-1 rounded-full border ${typeColors[project.type as keyof typeof typeColors].badge}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <a 
                    href={project.link} 
                    className={`${typeColors[project.type as keyof typeof typeColors].text} text-sm flex items-center hover:underline`}
                  >
                    <ExternalLink className="h-4 w-4 mr-1.5" />
                    Demo
                  </a>
                  
                  <a 
                    href={"#"} 
                    className="text-white/70 hover:text-white text-sm flex items-center transition-colors"
                  >
                    <Github className="h-4 w-4 mr-1.5" />
                    Code
                  </a>
                </div>
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
            className="border-primary text-primary hover:bg-primary/10 px-6 py-5 shadow-lg rounded-full"
          >
            View All Projects <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
