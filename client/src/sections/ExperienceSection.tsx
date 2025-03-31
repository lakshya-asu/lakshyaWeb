import { experiences } from "@shared/data";
import { motion } from "framer-motion";

export default function ExperienceSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="experience" className="py-28 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold font-display text-white mb-3">
            Experience
          </h2>
          <div className="h-1 w-16 bg-primary/80 mx-auto rounded-full mb-6"></div>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Professional journey and leadership roles in AI research and robotics
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 ml-10 md:ml-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-primary/40 to-primary/10 rounded-full"></div>
          
          {/* Timeline Items */}
          <motion.div 
            className="space-y-24"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {experiences.map((exp, index) => (
              <motion.div 
                key={index} 
                className="timeline-item relative pl-24 md:pl-0 md:grid md:grid-cols-2 md:gap-16 items-start"
                variants={itemVariants}
              >
                <div className="absolute left-0 top-0 md:left-auto md:right-0 md:top-0 flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 backdrop-blur-sm shadow-lg border border-primary/30 z-10 md:order-2 md:mr-7 md:-ml-7">
                  <div className="w-5 h-5 bg-primary rounded-full"></div>
                </div>
                
                <div className="md:text-right md:order-1 md:pr-8">
                  <h3 className="text-2xl font-display font-bold text-primary/90 mb-2">{exp.title}</h3>
                  <p className="text-xl font-medium text-white/90 mb-2">{exp.company}</p>
                  <p className="text-base text-white/60">{exp.period}</p>
                </div>
                
                <div className="mt-6 md:mt-0 bg-slate-800/60 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-slate-700/50 md:order-3">
                  {exp.description.map((desc, descIndex) => (
                    <p key={descIndex} className={`text-white/80 leading-relaxed text-base ${descIndex !== exp.description.length - 1 ? "mb-5" : ""}`}>
                      {desc}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
