import ContactForm from "@/components/ContactForm";
import { contactInfo, socialLinks } from "@shared/data";
import { motion } from "framer-motion";

export default function ContactSection() {
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
    <section id="contact" className="py-28 bg-gradient-to-b from-slate-900 to-black">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-3">Get In Touch</h2>
          <div className="h-1 w-16 bg-primary/80 mx-auto rounded-full mb-6"></div>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Have a question or want to collaborate? Let's connect.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-slate-800/60 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-slate-700/50"
          >
            <motion.h3 
              className="text-2xl font-display font-bold mb-8 text-white"
              variants={itemVariants}
            >
              Contact Information
            </motion.h3>
            
            <div className="space-y-8">
              {contactInfo.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start"
                  variants={itemVariants}
                >
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mr-5">
                    <i className={`bx ${item.icon} text-primary text-xl`}></i>
                  </div>
                  <div>
                    <p className="text-sm text-white/60 mb-1">{item.label}</p>
                    <p className="font-medium text-lg text-white/90">{item.value}</p>
                  </div>
                </motion.div>
              ))}
              
              <motion.div 
                className="pt-6 border-t border-slate-700/30 mt-8"
                variants={itemVariants}
              >
                <h4 className="text-xl font-display font-semibold mb-6 text-white/90">Connect</h4>
                <div className="flex space-x-5">
                  {socialLinks.map((link, index) => (
                    <a 
                      key={index}
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`h-12 w-12 rounded-full ${link.bgClass} flex items-center justify-center ${link.textClass} ${link.hoverClass} transition-all hover:shadow-lg hover:scale-110`}
                    >
                      <i className={`bx ${link.icon} text-2xl`}></i>
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-slate-800/60 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-slate-700/50"
          >
            <h3 className="text-2xl font-display font-bold mb-8 text-white">Send a Message</h3>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
