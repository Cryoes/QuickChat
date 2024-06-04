//Imports
import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"
import connectToMongoDB from "./db/connectToMongoDB.js";
import cookieParser from "cookie-parser";

//Express dotENV MongoDB setup
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json()) //Parse Incoming Requests with JSON payloas (from req.body)
app.use(cookieParser());
dotenv.config()



app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Express Server listening on port ${PORT}`)
});



//Get Endpoints
app.get ("/", (req, res) =>{
    res.send("/ End point hit")
})

//Middleware
app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)
app.use("/api/users", userRoutes)

