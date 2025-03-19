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
    <section id="publications" className="py-20 bg-dark bg-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-primary">Publications</h2>
          <div className="mt-2 h-1 w-20 bg-primary mx-auto"></div>
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
                className="bg-dark/80 p-6 rounded-xl border border-primary/20 hover:border-primary/50 transition-all"
                variants={itemVariants}
              >
                <h3 className="text-lg font-display font-bold text-primary mb-2">
                  {pub.title}
                </h3>
                <p className="text-sm text-gray-300 mb-2">{pub.journal}</p>
                <p className="text-sm mb-4">
                  {pub.description}
                </p>
                <div className="flex items-center space-x-4">
                  {pub.paperLink && (
                    <Button variant="link" className="p-0 text-primary hover:text-primary/80 gap-1" asChild>
                      <a href={pub.paperLink}>
                        <FileText size={16} />
                        Paper
                      </a>
                    </Button>
                  )}
                  {pub.codeLink && (
                    <Button variant="link" className="p-0 text-primary hover:text-primary/80 gap-1" asChild>
                      <a href={pub.codeLink}>
                        <Code size={16} />
                        Code
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
                className="bg-dark/80 p-6 rounded-xl border border-primary/20 hover:border-primary/50 transition-all"
                variants={itemVariants}
              >
                <h3 className="text-lg font-display font-bold text-primary mb-2">
                  {pub.title}
                </h3>
                <p className="text-sm text-gray-300 mb-2">{pub.journal}</p>
                <p className="text-sm mb-4">
                  {pub.description}
                </p>
                <div className="flex items-center space-x-4">
                  {pub.paperLink && (
                    <Button variant="link" className="p-0 text-primary hover:text-primary/80 gap-1" asChild>
                      <a href={pub.paperLink}>
                        <FileText size={16} />
                        Paper
                      </a>
                    </Button>
                  )}
                  {pub.codeLink && (
                    <Button variant="link" className="p-0 text-primary hover:text-primary/80 gap-1" asChild>
                      <a href={pub.codeLink}>
                        <Code size={16} />
                        Code
                      </a>
                    </Button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Citation Metrics Visualization */}
        <motion.div 
          className="mt-12 p-6 bg-dark/50 rounded-xl border border-primary/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-lg font-display font-bold mb-4">Citation Metrics</h3>
          <div className="h-48 relative overflow-hidden">
            {/* Placeholder for citation metrics visualization */}
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-sm text-gray-400">Interactive citation metrics visualization would appear here</p>
            </div>
            
            {/* Simulated bar chart for visual effect */}
            <div className="absolute bottom-0 left-0 right-0 flex items-end justify-around h-32 px-4">
              {[40, 60, 50, 80, 70, 90].map((height, i) => (
                <motion.div 
                  key={i}
                  className="w-8 bg-primary/60 rounded-t-md"
                  style={{ height: '10%' }}
                  animate={{ height: `${height}%` }}
                  transition={{ 
                    duration: 1, 
                    delay: 0.1 * i,
                    ease: "easeOut"
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
