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
    <section id="contact" className="py-20 bg-dark/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-primary">Get In Touch</h2>
          <div className="mt-2 h-1 w-20 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3 
              className="text-2xl font-display font-bold mb-6"
              variants={itemVariants}
            >
              Contact Information
            </motion.h3>
            
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start"
                  variants={itemVariants}
                >
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                    <i className={`bx ${item.icon} text-primary`}></i>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">{item.label}</p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                </motion.div>
              ))}
              
              <motion.div 
                className="pt-4"
                variants={itemVariants}
              >
                <h4 className="text-lg font-display font-semibold mb-4">Connect</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((link, index) => (
                    <a 
                      key={index}
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`h-10 w-10 rounded-full ${link.bgClass} flex items-center justify-center ${link.textClass} ${link.hoverClass} transition-colors`}
                    >
                      <i className={`bx ${link.icon} text-xl`}></i>
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
          >
            <h3 className="text-2xl font-display font-bold mb-6">Send a Message</h3>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
