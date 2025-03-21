import { Router } from "express";
import { getUser, getUsers } from "../controllers/user.controller.js";
import auth from "../middlewares/auth.middleware.js";

const userRouter = Router();

userRouter.get("/", auth, getUsers);

userRouter.get("/:id", auth, getUser);

userRouter.post("/", (req, res) => {
  res.send("Create profile route");
});

userRouter.put("/:id", (req, res) => {
  res.send("Edit profile route");
});

userRouter.delete("/:id", (req, res) => {
  res.send("Delete profile route");
});

export default userRouter;
// The user routes are similar to the auth routes, but they have different endpoints. The user routes are used to manage user profiles. The routes are as follows:
// GET /:id: Retrieve a user profile by ID.
// PUT /:id: Update a user profile by ID.
