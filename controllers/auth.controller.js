import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { JWT_EXPIRATION, JWT_SECRET } from "../config/env.js";
import User from "../models/user.model.js";

export const signUp = async (req, res, next) => {
  res.send("Sign in route");
  /*const session = await mongoose.startSession();
  session.startTransaction();

  try {
    // Logic to create a new user.
    const { name, email, password } = req.body;

    const isUserExist = await User.findOne({ email: email });

    if (isUserExist) {
      const error = new Error("User already exists");
      error.statusCode = 409;
      throw error;
    }

    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(password, salt);

    const newUsers = await User.create(
      {
        name,
        email,
        password: hashedPassword,
      },
      { session }
    );

    const token = jwt.sign(
      { userId: newUsers[0]._id, email: newUsers.email },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRATION }
    );

    await session.commitTransaction();
    session.endSession();

    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: {
        user: newUsers[0],
        token: token,
      },
    });
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    next(error);
  }*/
};

export const signIn = async (req, res, next) => {
  res.send("Sign in route");
};

export const signOut = async (req, res, next) => {
  res.send("Sign out route");
};
