import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get("/", (req, res) => {
  res.send("Subscription route");
});

subscriptionRouter.get("/:id", (req, res) => {
  res.send("Subscription details route");
});

subscriptionRouter.post("/", (req, res) => {
  res.send("Create subscription route");
});

subscriptionRouter.put("/:id", (req, res) => {
  res.send("Edit subscription route");
});

subscriptionRouter.delete("/:id", (req, res) => {
  res.send("Delete subscription route");
});

export default subscriptionRouter;
