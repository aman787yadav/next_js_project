import mongoose from "mongoose";

const connectMongoDB = async () => {
  if (mongoose.connection.readyState >= 1) {
    console.log("Already connected to MongoDB.");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 10000, // Wait max 10s before failing
    });

    console.log("✅ Connected to MongoDB.");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
  }
};

export default connectMongoDB;

