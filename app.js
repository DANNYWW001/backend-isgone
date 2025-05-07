require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 3000;
const goalRouter = require("./routes/goalRouter")



//middleware functions - these are func that run on thee servers between req and res
app.use(express.json()); // this allows us to parse json data



//home route
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to GOAL api",
  });
});
app.use("/goals", goalRouter)

//error route
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Resource Not Found",
  });
});

const connectTODB = async () => {
  try {
    //db connection logic
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "goals"
    })
    app.listen(PORT, () => {
      console.log(`Server running on port: ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};
connectTODB();
