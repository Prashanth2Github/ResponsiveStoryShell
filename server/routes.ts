import type { Express } from "express";
import { createServer, type Server } from "http";
import session from "express-session";
import MongoStore from "connect-mongo";
import * as storage from "./storage";
import { loginSchema, registerSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Session configuration with MongoDB
  app.use(session({
    store: MongoStore.create({
      mongoUrl: process.env.MONGODB_URI,
      ttl: 7 * 24 * 60 * 60, // 7 days
    }),
    secret: process.env.SESSION_SECRET || 'your-secret-key-change-in-production',
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
    },
  }));

  // Authentication middleware
  const requireAuth = (req: any, res: any, next: any) => {
    if (!req.session.userId) {
      return res.status(401).json({ message: "Authentication required" });
    }
    next();
  };

  // Auth routes
  app.post("/api/auth/register", async (req, res) => {
    try {
      const validatedData = registerSchema.parse(req.body);

      const existingUserByEmail = await storage.getUserByEmail(validatedData.email);
      if (existingUserByEmail) {
        return res.status(400).json({ message: "User with this email already exists" });
      }

      const existingUserByUsername = await storage.getUserByUsername(validatedData.username);
      if (existingUserByUsername) {
        return res.status(400).json({ message: "Username is already taken" });
      }

      const user = await storage.createUser(validatedData);
      res.status(201).json({ 
        message: "User created successfully",
        user: { id: user._id, username: user.username, email: user.email }
      });
    } catch (error: any) {
      res.status(400).json({ message: error.message || "Registration failed" });
    }
  });

  app.post("/api/auth/login", async (req, res) => {
    try {
      const validatedData = loginSchema.parse(req.body);

      const user = await storage.verifyPassword(validatedData.email, validatedData.password);
      if (!user) {
        return res.status(401).json({ message: "Invalid email or password" });
      }

      req.session.userId = user._id;
      req.session.username = user.username;

      res.json({ 
        message: "Login successful",
        user: { 
          id: user._id, 
          username: user.username, 
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName 
        }
      });
    } catch (error: any) {
      res.status(400).json({ message: error.message || "Login failed" });
    }
  });

  app.post("/api/auth/logout", (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({ message: "Logout failed" });
      }
      res.clearCookie('connect.sid');
      res.json({ message: "Logout successful" });
    });
  });

  app.get("/api/auth/user", requireAuth, async (req: any, res) => {
    try {
      const user = await storage.getUserById(req.session.userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      const { password, ...userWithoutPassword } = user.toObject();
      res.json(userWithoutPassword);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch user" });
    }
  });

  app.put("/api/profile", requireAuth, async (req: any, res) => {
    try {
      const updates = req.body;
      const user = await storage.updateUser(req.session.userId, updates);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      const { password, ...userWithoutPassword } = user.toObject();
      res.json(userWithoutPassword);
    } catch (error) {
      res.status(500).json({ message: "Failed to update profile" });
    }
  });

  app.get("/api/stories", async (req, res) => {
    try {
      const stories = await storage.getStories();
      res.json(stories);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch stories" });
    }
  });

  app.post("/api/stories", requireAuth, async (req: any, res) => {
    try {
      const storyData = { ...req.body, authorId: req.session.userId };
      const story = await storage.createStory(storyData);
      res.status(201).json(story);
    } catch (error: any) {
      res.status(400).json({ message: error.message || "Failed to create story" });
    }
  });

  app.get("/api/stories/my", requireAuth, async (req: any, res) => {
    try {
      const stories = await storage.getStoriesByAuthor(req.session.userId);
      res.json(stories);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch user stories" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
