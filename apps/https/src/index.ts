import express from "express";
import {prisma} from "@repo/db/client";
const app = express();

app.use(express.json());

app.get("/", (req, res)=>{
    res.send("Hi there");
});

app.post("/signup", async(req, res)=>{
    const {username, password, email} = req.body;
    const user = await prisma.user.create({
        data:{
            name:username,
            email,
            password
        },
        select:{
            email:true,
            name:true
        }
    });
    res.status(200).json({
        message:"User signed up",
        user
    });
});

app.listen(3002, ()=>{
    console.log("Server is running on port 3001");
});