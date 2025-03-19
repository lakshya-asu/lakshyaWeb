import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', message: 'Server is running' });
  });

  // Simple contact form endpoint
  app.post('/api/contact', (req, res) => {
    try {
      // In a real implementation, this would send an email or store in a database
      const { name, email, subject, message } = req.body;
      
      if (!name || !email || !subject || !message) {
        return res.status(400).json({ success: false, message: 'Missing required fields' });
      }
      
      // Log the contact request
      console.log('Contact form submission:', { name, email, subject });
      
      // Return success response
      res.json({ success: true, message: 'Message received! Thank you for reaching out.' });
    } catch (error) {
      console.error('Error processing contact form:', error);
      res.status(500).json({ success: false, message: 'Failed to process your request' });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
