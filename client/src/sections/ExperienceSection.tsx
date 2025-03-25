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
    <section id="experience" className="py-16 bg-[#0a0c13]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold font-display text-white">
            Experience
          </h2>
          <div className="mt-2 h-0.5 w-12 bg-primary mx-auto"></div>
        </div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 ml-8 md:ml-0 top-0 bottom-0 w-0.5 bg-primary/30"></div>
          
          {/* Timeline Items */}
          <motion.div 
            className="space-y-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {experiences.map((exp, index) => (
              <motion.div 
                key={index} 
                className="timeline-item relative pl-20 md:pl-0 md:grid md:grid-cols-2 md:gap-8 items-start"
                variants={itemVariants}
              >
                <div className="absolute left-0 top-0 md:left-auto md:right-0 md:top-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary z-10 md:order-2 md:mr-5 md:-ml-5">
                  <i className="text-white"></i>
                </div>
                
                <div className="md:text-right md:order-1">
                  <h3 className="text-xl font-display font-bold text-primary">{exp.title}</h3>
                  <p className="text-lg font-medium text-white">{exp.company}</p>
                  <p className="text-sm text-white/50">{exp.period}</p>
                </div>
                
                <div className="mt-4 md:mt-0 bg-[#111827] p-5 rounded-lg border-l-4 border-primary md:order-3">
                  {exp.description.map((desc, descIndex) => (
                    <p key={descIndex} className={`text-white/70 ${descIndex !== exp.description.length - 1 ? "mb-2" : ""}`}>
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
