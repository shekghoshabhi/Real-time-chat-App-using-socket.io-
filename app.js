const express = require("express")
const http = require("http")
const socketio = require("socket.io")
const { Socket } = require("dgram")

const app= express()
const server = http.Server(app)
const io = socketio(server)

app.use("/",express.static(__dirname+"/static"))


let mapping = []

io.on("connection",(socket)=>{
    console.log("connection extablished at "+socket.id)

    socket.on("btn-click",(data)=>{
        
        io.emit("sending",{
            message : data.msg,
            id :mapping[socket.id] ,
            add:socket.id  
        })


    })

    socket.on("login" , (data)=>{
        mapping[socket.id] = data.name
          socket.emit("login-success")
    })

})


server.listen(4441,()=>{
    console.log("done")
})
