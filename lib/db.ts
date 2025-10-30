import mongoose from "mongoose";

export default async function dbConnect() {
  if (mongoose.connection.readyState >= 1) return;
  return mongoose.connect(process.env.MONGODB_URI as string);
}

await dbConnect();
console.log("✅ DB Connected");
