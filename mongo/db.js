// Import Libraries
import mongoose from "mongoose";
// require("dotenv").config()
// Import files

// Define variables
mongoose.set("strictQuery", false);


// Define Functions
const db = async (link) => {
  
  try {
    await mongoose.connect(link, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    return "Database connected. . .";
  } catch (err) {
    console.log("Could not connect to database. . .\n", err);

  }
};
// export Functions
export default db;