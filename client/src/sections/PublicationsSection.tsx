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
    <section id="publications" className="py-28 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold font-display text-white mb-3">
            Publications
          </h2>
          <div className="h-1 w-16 bg-primary/80 mx-auto rounded-full mb-6"></div>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Research contributions in machine learning and causal reasoning
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Left column */}
          <div className="space-y-10">
            {publications.slice(0, Math.ceil(publications.length / 2)).map((pub, index) => (
              <motion.div 
                key={index} 
                className="bg-slate-800/60 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-slate-700/50 hover:border-primary/30 transition-all"
                variants={itemVariants}
              >
                <h3 className="text-2xl font-display font-bold text-white/90 mb-3">
                  {pub.title}
                </h3>
                <p className="text-base text-primary/90 mb-4 italic">{pub.journal}</p>
                <p className="text-base text-white/70 mb-6 leading-relaxed">
                  {pub.description}
                </p>
                <div className="flex items-center space-x-6 pt-4 border-t border-slate-700/30">
                  {pub.paperLink && (
                    <Button variant="ghost" className="h-11 px-4 py-0 text-primary/90 hover:bg-primary/10 hover:text-primary gap-2 mt-4" asChild>
                      <a href={pub.paperLink}>
                        <FileText size={18} />
                        Read Paper
                      </a>
                    </Button>
                  )}
                  {pub.codeLink && (
                    <Button variant="ghost" className="h-11 px-4 py-0 text-primary/90 hover:bg-primary/10 hover:text-primary gap-2 mt-4" asChild>
                      <a href={pub.codeLink}>
                        <Code size={18} />
                        View Code
                      </a>
                    </Button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Right column */}
          <div className="space-y-10">
            {publications.slice(Math.ceil(publications.length / 2)).map((pub, index) => (
              <motion.div 
                key={index} 
                className="bg-slate-800/60 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-slate-700/50 hover:border-primary/30 transition-all"
                variants={itemVariants}
              >
                <h3 className="text-2xl font-display font-bold text-white/90 mb-3">
                  {pub.title}
                </h3>
                <p className="text-base text-primary/90 mb-4 italic">{pub.journal}</p>
                <p className="text-base text-white/70 mb-6 leading-relaxed">
                  {pub.description}
                </p>
                <div className="flex items-center space-x-6 pt-4 border-t border-slate-700/30">
                  {pub.paperLink && (
                    <Button variant="ghost" className="h-11 px-4 py-0 text-primary/90 hover:bg-primary/10 hover:text-primary gap-2 mt-4" asChild>
                      <a href={pub.paperLink}>
                        <FileText size={18} />
                        Read Paper
                      </a>
                    </Button>
                  )}
                  {pub.codeLink && (
                    <Button variant="ghost" className="h-11 px-4 py-0 text-primary/90 hover:bg-primary/10 hover:text-primary gap-2 mt-4" asChild>
                      <a href={pub.codeLink}>
                        <Code size={18} />
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
