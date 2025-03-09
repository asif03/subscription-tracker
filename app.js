import express from "express";
import { PORT } from "./config/env.js";

import authRouter from "./routes/auth.routes.js"; // Import the auth router.
import userRouter from "./routes/user.routes.js"; // Import the user router.
import subscriptionRouter from "./routes/subscription.routes.js"; // Import the subscription router.
import connectToDB from "./config/mongodb.js";
import errorMiddleware from "./middlewares/error.middleware.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json()); // Middleware to parse incoming requests with JSON payloads.
app.use(express.urlencoded({ extended: false })); // Middleware to parse incoming requests with urlencoded payloads.
app.use(cookieParser()); // Middleware to parse incoming requests with cookies.

app.use("/api/v1/auth", authRouter); // Register the auth router.
app.use("/api/v1/users", userRouter); // Register the user router.
app.use("/api/v1/subscriptions", subscriptionRouter); // Register the subscription router.

app.use(errorMiddleware);

app.listen(PORT, async () => {
  console.log(`Server is running on port http://localhost:${PORT}`);

  await connectToDB();
});
