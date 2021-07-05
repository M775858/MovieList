const express = require('express') ///
const bodyparser = require('body-parser')
const app = express()
const port = 9000

 

app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json()) 

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html");
})

app.post('/addMovie' , (req, res) =>{
   name =  req.body.movieName;
   console.log(name);

  let user = {

    student: " 218743743",
     ModuleCode : "23454"

   }



   res.json({
      Movie :  name , 
      user
   })
})



app.listen(port, () => {
  console.log("Ziyakhipha at port " + port)
})