import mongoose from "mongoose";
import bcrypt from "bcryptjs";

export const signUp = async (req, res, next) => {
  const session = await mongoose.startSession();
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

    await session.commitTransaction();
    session.endSession();
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    next(error);
  }
};

export const signIn = async (req, res, next) => {
  res.send("Sign in route");
};

export const signOut = async (req, res, next) => {
  res.send("Sign out route");
};
