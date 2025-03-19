import { Route, Switch } from "wouter";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";
import { useEffect } from "react";
import Chatbot from "@/components/Chatbot";

export default function App() {
  useEffect(() => {
    // Add custom styles to the body
    document.body.classList.add("bg-dark", "text-light", "font-sans");
    document.documentElement.style.scrollBehavior = "smooth";
    
    return () => {
      // Clean up when component unmounts
      document.body.classList.remove("bg-dark", "text-light", "font-sans");
    };
  }, []);

  return (
    <>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
      
      {/* Chatbot is available on all pages */}
      <Chatbot />
    </>
  );
}
