const socket = io()

$(()=>{

$("#chat").hide()

$("#btn1").click(()=>{
    
    socket.emit("login" , {
          name : $("#name").val()
    })


})

 $("#btn").click(()=>{

   socket.emit("btn-click" ,{

       msg : $("#inp").val()
   })

 })

 socket.on("sending" , (data)=>{
     if(data.add!==socket.id){
     $("#list").append(
         $("<li>").text("<" + data.id +">"+ " .... " + data.message)
     )
     }
     else{
        $("#list").css("text-align","center")
        $("#list").append(
            $("<li>").text("<" + data.id +">" + " .... " + data.message).css("text-align","end")
        )
        }

    
 })


 socket.on("login-success" , ()=>{
     $("#login").hide()
     $("#chat").show()


 })



})