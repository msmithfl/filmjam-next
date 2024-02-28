import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

// caching the connection this way is an efficient pattern for server actions that prevents excessive calls to the DB

// here we attempt to retrieve a mongoose property from the global object
// if we dont already have mongoose cached connection, we set it to an empty object
// global as any ensures that it knows we refer to the global type of mongoose
let cached = (global as any).mongoose || { conn: null, promise: null };

export const connectToDatabase = async () => {
  // checking if cache is already connected
  if (cached.conn) return cached.conn;

  if (!MONGODB_URI) throw new Error("MONDODB_URI is missing!");

  // set the promise to the existing cached connection or create a new connection
  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URI, {
      dbName: "filmjam-io",
      bufferCommands: false,
    });

  cached.conn = await cached.promise;

  return cached.conn;
};
