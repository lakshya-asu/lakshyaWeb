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
    <section id="publications" className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold font-display text-white">
            Publications
          </h2>
          <div className="mt-3 h-1 w-16 bg-primary/80 mx-auto rounded-full"></div>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Left column */}
          <div className="space-y-6">
            {publications.slice(0, Math.ceil(publications.length / 2)).map((pub, index) => (
              <motion.div 
                key={index} 
                className="bg-slate-800/60 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-slate-700/50 hover:border-primary/30 transition-all"
                variants={itemVariants}
              >
                <h3 className="text-xl font-display font-bold text-white/90 mb-2">
                  {pub.title}
                </h3>
                <p className="text-sm text-primary/90 mb-3 italic">{pub.journal}</p>
                <p className="text-base text-white/70 mb-4 leading-relaxed">
                  {pub.description}
                </p>
                <div className="flex items-center space-x-5 pt-2 border-t border-slate-700/30">
                  {pub.paperLink && (
                    <Button variant="ghost" className="h-9 px-3 py-0 text-primary/90 hover:bg-primary/10 hover:text-primary gap-2 mt-3" asChild>
                      <a href={pub.paperLink}>
                        <FileText size={16} />
                        Read Paper
                      </a>
                    </Button>
                  )}
                  {pub.codeLink && (
                    <Button variant="ghost" className="h-9 px-3 py-0 text-primary/90 hover:bg-primary/10 hover:text-primary gap-2 mt-3" asChild>
                      <a href={pub.codeLink}>
                        <Code size={16} />
                        View Code
                      </a>
                    </Button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Right column */}
          <div className="space-y-6">
            {publications.slice(Math.ceil(publications.length / 2)).map((pub, index) => (
              <motion.div 
                key={index} 
                className="bg-slate-800/60 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-slate-700/50 hover:border-primary/30 transition-all"
                variants={itemVariants}
              >
                <h3 className="text-xl font-display font-bold text-white/90 mb-2">
                  {pub.title}
                </h3>
                <p className="text-sm text-primary/90 mb-3 italic">{pub.journal}</p>
                <p className="text-base text-white/70 mb-4 leading-relaxed">
                  {pub.description}
                </p>
                <div className="flex items-center space-x-5 pt-2 border-t border-slate-700/30">
                  {pub.paperLink && (
                    <Button variant="ghost" className="h-9 px-3 py-0 text-primary/90 hover:bg-primary/10 hover:text-primary gap-2 mt-3" asChild>
                      <a href={pub.paperLink}>
                        <FileText size={16} />
                        Read Paper
                      </a>
                    </Button>
                  )}
                  {pub.codeLink && (
                    <Button variant="ghost" className="h-9 px-3 py-0 text-primary/90 hover:bg-primary/10 hover:text-primary gap-2 mt-3" asChild>
                      <a href={pub.codeLink}>
                        <Code size={16} />
                        View Code
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
