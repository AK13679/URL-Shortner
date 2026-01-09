import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose"; 

dotenv.config();
const app = express();

app.get("/", (req, res) => 
{
    res.send("Hello World!")
});

app.listen(5000, () => {
    console.log("Server running on 5000") 
});

mongoose.connect(process.env.MONGO_URI).then(()=> {
    console.log("Connected to MongoDB")
    app.listen(process.env.PORT, () => {
        console.log(`Server running on the port ${process.env.PORT}`);
    })
}).catch((err)=>{
        console.log("Error connecting to DB");
});
