const express = require('express') ///
const app = express()
const port = 9000

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html");
})
app.get("/register" , (req , res) =>{
   res.sendFile(__dirname +"/register.html")
})
app.get("/login", (req, res)=>{
  res.send("Login with your details")
})


app.listen(port, () => {
  console.log("Ziyakhipha at port " + port)
})