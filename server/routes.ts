import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertNewsletterSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  
  // Newsletter subscription endpoint
  app.post("/api/newsletter", async (req, res) => {
    try {
      const validatedData = insertNewsletterSchema.parse(req.body);
      
      // Check if email is already subscribed
      const existingSubscription = await storage.getNewsletterSubscription(validatedData.email);
      if (existingSubscription) {
        return res.status(400).json({ 
          message: "This email is already subscribed to our newsletter" 
        });
      }

      const newsletter = await storage.createNewsletterSubscription(validatedData);
      res.status(201).json({ 
        message: "Successfully subscribed to newsletter",
        subscription: newsletter 
      });
    } catch (error: any) {
      if (error.errors) {
        return res.status(400).json({ 
          message: "Invalid email format", 
          errors: error.errors 
        });
      }
      res.status(500).json({ message: "Failed to subscribe to newsletter" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
