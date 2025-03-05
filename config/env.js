import { config } from "dotenv";

config({ path: `.env.${process.env.NODE_ENV || "developement"}.local` });

export const { NODE_ENV, PORT, MONGO_URI } = process.env;
