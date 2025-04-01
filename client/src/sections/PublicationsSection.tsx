import { publications } from "@shared/data";
import { Button } from "@/components/ui/button";
import { FileText, Code } from "lucide-react";
import { motion } from "framer-motion";

export default function PublicationsSection() {
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
    <section id="publications" className="py-16 bg-[#0a0c13]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold font-display text-white">
            Publications
          </h2>
          <div className="mt-2 h-0.5 w-12 bg-primary mx-auto"></div>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Left column */}
          <div className="space-y-5">
            {publications.slice(0, Math.ceil(publications.length / 2)).map((pub, index) => (
              <motion.div 
                key={index} 
                className="bg-[#111827] p-5 rounded-lg border-l-4 border-primary"
                variants={itemVariants}
              >
                <h3 className="text-lg font-display font-bold text-white mb-2">
                  {pub.title}
                </h3>
                <p className="text-xs text-primary mb-2">{pub.journal}</p>
                <p className="text-sm text-white/70 mb-3">
                  {pub.description}
                </p>
                <div className="flex items-center space-x-4">
                  {pub.paperLink && (
                    <Button variant="ghost" className="h-8 px-2 py-0 text-primary hover:bg-primary/5 gap-1" asChild>
                      <a href={pub.paperLink}>
                        <FileText size={14} />
                        Paper
                      </a>
                    </Button>
                  )}
                  {pub.codeLink && (
                    <Button variant="ghost" className="h-8 px-2 py-0 text-primary hover:bg-primary/5 gap-1" asChild>
                      <a href={pub.codeLink}>
                        <Code size={14} />
                        Code
                      </a>
                    </Button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Right column */}
          <div className="space-y-5">
            {publications.slice(Math.ceil(publications.length / 2)).map((pub, index) => (
              <motion.div 
                key={index} 
                className="bg-[#111827] p-5 rounded-lg border-l-4 border-primary"
                variants={itemVariants}
              >
                <h3 className="text-lg font-display font-bold text-white mb-2">
                  {pub.title}
                </h3>
                <p className="text-xs text-primary mb-2">{pub.journal}</p>
                <p className="text-sm text-white/70 mb-3">
                  {pub.description}
                </p>
                <div className="flex items-center space-x-4">
                  {pub.paperLink && (
                    <Button variant="ghost" className="h-8 px-2 py-0 text-primary hover:bg-primary/5 gap-1" asChild>
                      <a href={pub.paperLink}>
                        <FileText size={14} />
                        Paper
                      </a>
                    </Button>
                  )}
                  {pub.codeLink && (
                    <Button variant="ghost" className="h-8 px-2 py-0 text-primary hover:bg-primary/5 gap-1" asChild>
                      <a href={pub.codeLink}>
                        <Code size={14} />
                        Code
                      </a>
                    </Button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
