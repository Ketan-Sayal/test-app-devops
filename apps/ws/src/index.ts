import {WebSocketServer} from "ws";
import {prisma} from "@repo/db/client";

const server = new WebSocketServer({
    port: 3001
});

server.on("connection", async  (socket)=>{
    const user = await prisma.user.create({
        data:{
            name:Math.random().toString(),
            password: Math.random().toString(),
            email: Math.random().toString()
        }
    })
    console.log(user);
    
    socket.emit("Hi there you are connected to ws!!!")
})