import { linkedInUrl, githubUrl } from "@shared/data";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";

export default function AboutSection() {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section id="about" className="py-20 bg-dark/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-primary">About Me</h2>
          <div className="mt-2 h-1 w-20 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="order-2 lg:order-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                }
              }
            }}
          >
            <motion.h3 
              className="text-2xl font-display font-bold mb-4"
              custom={0}
              variants={itemVariants}
            >
              Robotics & ML Enthusiast
            </motion.h3>
            <motion.p 
              className="mb-4 text-lg"
              custom={1}
              variants={itemVariants}
            >
              I'm a robotics enthusiast pursuing an MS in Robotics at ASU. My passion lies in enhancing machine learning through causal reasoning, deep reinforcement learning, and probabilistic reasoning.
            </motion.p>
            <motion.p 
              className="mb-6 text-lg"
              custom={2}
              variants={itemVariants}
            >
              I'm dedicated to creating intuitive learning experiences and improving real-world motion planning algorithms. My background in avionics and robotics drives me to build systems that can intelligently interact with the world.
            </motion.p>
            
            <motion.div 
              className="grid grid-cols-2 gap-4 mb-6"
              custom={3}
              variants={itemVariants}
            >
              <div>
                <h4 className="font-display font-bold text-secondary">Education</h4>
                <ul className="mt-2 space-y-2">
                  <li className="flex items-start">
                    <i className="bx bx-chevron-right text-primary mt-1"></i>
                    <div>
                      <p className="font-semibold">Master's Degree</p>
                      <p className="text-sm text-gray-300">Robotics and Autonomous Systems, ASU, 2024</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <i className="bx bx-chevron-right text-primary mt-1"></i>
                    <div>
                      <p className="font-semibold">Bachelor's Degree</p>
                      <p className="text-sm text-gray-300">Robotics & Avionics, KJSCE Mumbai, 2018-2022</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-display font-bold text-secondary">Awards</h4>
                <ul className="mt-2 space-y-2">
                  <li className="flex items-start">
                    <i className="bx bx-trophy text-primary mt-1"></i>
                    <div>
                      <p className="text-sm">#6 Worldwide SAE Aero Design East - Advanced 2022</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <i className="bx bx-trophy text-primary mt-1"></i>
                    <div>
                      <p className="text-sm">TSMC AZ Fellowship</p>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex space-x-4"
              custom={4}
              variants={itemVariants}
            >
              <Button 
                variant="link" 
                className="p-0 text-primary hover:text-primary/80 gap-2"
                asChild
              >
                <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
                  <Linkedin size={18} />
                  <span>LinkedIn</span>
                </a>
              </Button>
              <Button 
                variant="link" 
                className="p-0 text-primary hover:text-primary/80 gap-2"
                asChild
              >
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github size={18} />
                  <span>GitHub</span>
                </a>
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="order-1 lg:order-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary p-2">
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <img 
                  src="/images/profile.jpg" 
                  alt="Lakshya Jain" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-secondary text-white p-2 rounded-full w-12 h-12 flex items-center justify-center">
                <i className="bx bx-robot text-2xl"></i>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
