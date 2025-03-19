import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageSquare, Send, X, ChevronRight, Bot, Sparkles } from "lucide-react";
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

// Suggested questions for the user
const suggestedQuestions = [
  "Tell me about your ML skills",
  "What projects have you worked on?",
  "What's your education background?",
  "What experience do you have?"
];

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
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom of messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping]);

  const handleSendMessage = (text = input) => {
    if (!text.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: generateId(),
      text: text,
      sender: "user",
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Generate response with typing effect
    setTimeout(() => {
      const botResponse = generateResponse(text);
      const botMessage: Message = {
        id: generateId(),
        text: botResponse,
        sender: "bot",
      };
      setIsTyping(false);
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };
  
  const handleSuggestedQuestion = (question: string) => {
    handleSendMessage(question);
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
          className="h-14 w-14 rounded-full shadow-lg bg-primary hover:bg-primary/90 border-4 border-white/10"
          onClick={() => setIsOpen(true)}
        >
          <Bot size={24} className="text-white" />
        </Button>
      </motion.div>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 w-[350px] md:w-[420px] h-[550px] bg-[#0c1824]/95 backdrop-blur-md border border-white/10 rounded-xl shadow-xl flex flex-col z-50 overflow-hidden font-sans"
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div className="p-4 border-b border-white/10 flex justify-between items-center bg-gradient-to-r from-primary/20 to-primary/5">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-primary/30 flex items-center justify-center mr-3 shadow-md border border-primary/30">
                  <Bot size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg tracking-tight text-white">AI Assistant</h3>
                  <p className="text-xs text-white/60">Ask anything about Lakshya's work</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full hover:bg-white/10 text-white/70 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                <X size={18} />
              </Button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto bg-gradient-to-b from-[#0c1824]/95 to-[#0c1824]">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.sender === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    {message.sender === "bot" && (
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-2 mt-1 flex-shrink-0 border border-primary/30">
                        <Bot size={14} className="text-primary" />
                      </div>
                    )}
                    <div
                      className={`max-w-[85%] p-3 rounded-2xl ${
                        message.sender === "user"
                          ? "bg-primary text-white font-medium shadow-md"
                          : "bg-white/10 text-white/90 border border-white/10"
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{message.text}</p>
                    </div>
                  </div>
                ))}
                
                {/* Typing indicator */}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-2 mt-1 flex-shrink-0 border border-primary/30">
                      <Bot size={14} className="text-primary" />
                    </div>
                    <div className="max-w-[85%] p-3 rounded-2xl bg-white/10 text-white/90 border border-white/10">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 rounded-full bg-white/70 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-2 h-2 rounded-full bg-white/70 animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-2 h-2 rounded-full bg-white/70 animate-bounce" style={{ animationDelay: '300ms' }}></div>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Suggested questions - show only at the beginning */}
                {messages.length === 1 && (
                  <motion.div 
                    className="mt-8"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="flex items-center gap-1.5 mb-3">
                      <Sparkles size={14} className="text-primary" />
                      <p className="text-xs text-white/60 font-medium">TRY ASKING</p>
                    </div>
                    <div className="space-y-2">
                      {suggestedQuestions.map((question, index) => (
                        <button
                          key={index}
                          className="w-full text-left p-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-sm flex items-center group transition-colors text-white/80 hover:text-white"
                          onClick={() => handleSuggestedQuestion(question)}
                        >
                          <span className="flex-1">{question}</span>
                          <ChevronRight className="h-4 w-4 text-primary opacity-70 group-hover:opacity-100 transition-opacity" />
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
                
                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/10 bg-white/5">
              <div className="flex items-center">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about skills, experience, education..."
                  className="bg-white/10 border-white/20 focus:border-primary/50 focus:ring-primary/20 rounded-full py-6 px-4 text-sm text-white placeholder:text-white/50"
                />
                <Button
                  variant="default"
                  size="icon"
                  className="ml-2 bg-primary hover:bg-primary/90 h-10 w-10 rounded-full flex-shrink-0 shadow-md"
                  onClick={() => handleSendMessage()}
                  disabled={!input.trim() || isTyping}
                >
                  <Send size={16} className="text-white" />
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