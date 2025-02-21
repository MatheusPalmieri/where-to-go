import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error("The environment variable MONGODB_URI is not defined!");
}

let cached = (global as any).mongoose || { conn: null, promise: null };

export async function connectToDatabase() {
  if (cached.conn) {
    console.log("Using cached database connection.");
    return cached.conn;
  }

  if (!cached.promise) {
    try {
      console.log("Creating new database connection promise.");
      cached.promise = mongoose
        .connect(MONGODB_URI, {
          dbName: "where-to-go",
        })
        .then((mongoose) => {
          console.log("Database connection established.");
          return mongoose;
        });
    } catch (error) {
      console.error("Error creating database connection promise:", error);
      throw error;
    }
  }

  try {
    cached.conn = await cached.promise;
    console.log("Database connection resolved.");
  } catch (error) {
    console.error("Error resolving database connection promise:", error);
    throw error;
  }

  return cached.conn;
}
