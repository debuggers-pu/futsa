import mongoose from "mongoose";

const connectDB = async () => {
  try {
    //database Name
    const databaseName = "futsa";
    const con = await mongoose.connect(`mongodb://mongodb/${databaseName}`);
    console.log(`Database connected : ${con.connection.host}`);
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
