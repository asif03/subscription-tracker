import { Router } from "express";

const authRouter = Router();

authRouter.post("/login", (req, res) => {
  res.send("Login route");
});

authRouter.post("/sign-up", (req, res) => {
  res.send("Register route");
});

authRouter.post("/logout", (req, res) => {
  res.send("Logout route");
});

export default authRouter;
