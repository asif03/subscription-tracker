import { Router } from "express";
import { createSubscription } from "../controllers/subscription.controller.js";
import auth from "../middlewares/auth.middleware.js";

const subscriptionRouter = Router();

subscriptionRouter.get("/", (req, res) => {
  res.send("Subscription route");
});

subscriptionRouter.get("/:id", (req, res) => {
  res.send("Subscription details route");
});

subscriptionRouter.post("/", auth, createSubscription);

subscriptionRouter.put("/:id", (req, res) => {
  res.send("Edit subscription route");
});

subscriptionRouter.delete("/:id", (req, res) => {
  res.send("Delete subscription route");
});

export default subscriptionRouter;
