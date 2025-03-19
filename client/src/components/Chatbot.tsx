import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageSquare, Send, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  experiences, 
  mlSkills, 
  roboticsSkills, 
  devSkills, 
  projects, 
  publications,
  contactInfo
} from "@shared/data";

type Message = {
  id: string;
  text: string;
  sender: "user" | "bot";
};

// Helper function to generate a unique ID
const generateId = () => Math.random().toString(36).substring(2, 9);

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: generateId(),
      text: "Hi there! I'm Lakshya's virtual assistant. Ask me anything about his skills, projects, or experience.",
      sender: "bot",
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom of messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: generateId(),
      text: input,
      sender: "user",
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Generate response
    setTimeout(() => {
      const botResponse = generateResponse(input);
      const botMessage: Message = {
        id: generateId(),
        text: botResponse,
        sender: "bot",
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 500);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat button */}
      <motion.div
        className="fixed bottom-6 right-6 z-40"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
      >
        <Button
          variant="default"
          size="icon"
          className="h-14 w-14 rounded-full shadow-lg bg-primary"
          onClick={() => setIsOpen(true)}
        >
          <MessageSquare size={24} />
        </Button>
      </motion.div>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 w-80 md:w-96 h-[500px] bg-dark border border-primary/20 rounded-xl shadow-xl flex flex-col z-50 overflow-hidden"
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            {/* Header */}
            <div className="p-4 border-b border-primary/20 flex justify-between items-center bg-primary/10">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center mr-2">
                  <span className="font-bold text-white">LJ</span>
                </div>
                <div>
                  <h3 className="font-bold">Lakshya's Assistant</h3>
                  <p className="text-xs text-gray-400">Ask me anything</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={() => setIsOpen(false)}
              >
                <X size={18} />
              </Button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.sender === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg ${
                        message.sender === "user"
                          ? "bg-primary text-white"
                          : "bg-gray-800"
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Input */}
            <div className="p-4 border-t border-primary/20">
              <div className="flex">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask something..."
                  className="bg-dark/50 border-primary/30 focus:ring-primary/50"
                />
                <Button
                  variant="default"
                  size="icon"
                  className="ml-2 bg-primary"
                  onClick={handleSendMessage}
                  disabled={!input.trim()}
                >
                  <Send size={18} />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// Function to generate responses based on input
function generateResponse(input: string): string {
  const query = input.toLowerCase();

  // Education
  if (query.includes("education") || query.includes("study") || query.includes("degree")) {
    return "I'm doing my MS in Robotics at ASU (2024). I did my Bachelor's in Robotics & Avionics from KJSCE Mumbai (2018-2022).";
  }

  // Skills patterns
  if (query.includes("skill") || query.includes("know") || query.includes("do you")) {
    if (query.includes("ml") || query.includes("machine learning") || query.includes("ai")) {
      return `My ML skills include: ${mlSkills.join(", ")}. I focus on causal reasoning and deep reinforcement learning.`;
    }
    
    if (query.includes("robot")) {
      return `My robotics skills include: ${roboticsSkills.join(", ")}. I specialize in motion planning and control systems.`;
    }
    
    if (query.includes("dev") || query.includes("code") || query.includes("program")) {
      return `I code in ${devSkills.slice(0, 3).join(", ")} and work with ${devSkills.slice(3, 6).join(", ")}.`;
    }
    
    return `I specialize in ML (causal reasoning, RL), robotics (motion planning, SLAM), and development (Python, C++). Ask about specific areas for details.`;
  }

  // Experience
  if (query.includes("experience") || query.includes("work") || query.includes("job")) {
    if (query.includes("research")) {
      return "I'm a Research Aide at DeSmart Lab, NSF Brain Center, working on AI-driven lighting with RL. I also did research at IIT Bombay on UAV landing with Deep RL.";
    }
    
    if (query.includes("teaching")) {
      return "I'm a Graduate TA at ASU's Logos Robotics Lab for CSE 310 (Data Structures) and CSE 598 (Perception in Robotics).";
    }
    
    return "Currently: TA at ASU & Research Aide at NSF Brain Center. Previously: Systems Engineer at Indrones, Research Intern at IIT Bombay, and Lead Avionics Engineer at Team Onyx.";
  }

  // Projects
  if (query.includes("project")) {
    const randomProject = projects[Math.floor(Math.random() * projects.length)];
    return `One of my notable projects is "${randomProject.title}": ${randomProject.description}. I used ${randomProject.technologies.join(", ")}.`;
  }

  // Publications
  if (query.includes("publication") || query.includes("paper") || query.includes("research")) {
    if (publications.length > 0) {
      const recentPub = publications[0];
      return `My recent publication is "${recentPub.title}" (${recentPub.journal}). It focuses on ${recentPub.description.slice(0, recentPub.description.indexOf('.')+1)}`;
    }
    return "I've published papers on causal discovery, 3D scene reasoning, and robotic systems. Ask for specific details!";
  }

  // Contact
  if (query.includes("contact") || query.includes("email") || query.includes("reach")) {
    return `You can reach me at ${contactInfo[0].value} or ${contactInfo[1].value}. I'm based in ${contactInfo[2].value}.`;
  }

  // About me / introduction
  if (query.includes("who are you") || query.includes("about you") || query.includes("tell me about") || query.includes("introduce")) {
    return "I'm Lakshya Jain, an MS Robotics student at ASU. I work at the intersection of ML and robotics, with a focus on causal reasoning and autonomous systems.";
  }

  // Awards
  if (query.includes("award") || query.includes("achievement")) {
    return "I ranked #6 Worldwide at SAE Aero Design East - Advanced 2022 and received the TSMC AZ Fellowship.";
  }

  // Default response
  return "I can tell you about Lakshya's education, skills, projects, experience, or publications. What would you like to know?";
}