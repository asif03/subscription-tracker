import { Router } from "express";
import { signIn, signOut, signUp } from "../controllers/auth.controller.js";

const authRouter = Router();

authRouter.post("/sign-in", signIn);

authRouter.post("/sign-up", signUp);

/*authRouter.post("/sign-in", (req, res) => {
  res.send("Subscription route");
});*/

authRouter.post("/logout", signOut);

export default authRouter;
