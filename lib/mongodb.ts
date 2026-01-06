import mongoose from "mongoose";

/**
 * Interface to define the Mongoose cache object attached to the global scope.
 * This ensures type safety when accessing `global.mongoose`.
 */
interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  // eslint-disable-next-line no-var
  var mongoose: MongooseCache | undefined;
}

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

/**
 * Establishes a connection to the MongoDB database.
 * Uses a cached connection if available, otherwise creates a new one.
 *
 * @returns {Promise<typeof mongoose>} A promise that resolves to the Mongoose instance.
 */
async function connectToDatabase(): Promise<typeof mongoose> {
  // Return the cached connection if it exists
  if (cached!.conn) {
    return cached!.conn;
  }

  // If there is no cached promise, create a new one
  if (!cached!.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached!.promise = mongoose
      .connect(MONGODB_URI as string, opts)
      .then((mongoose) => {
        return mongoose;
      });
  }

  try {
    cached!.conn = await cached!.promise;
  } catch (e) {
    cached!.promise = null;
    throw e;
  }

  return cached!.conn;
}

export default connectToDatabase;
