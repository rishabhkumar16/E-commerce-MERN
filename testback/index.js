const express = require("express");

const app = express();

const port = 8000;

// app.get('/', (req, res) => {
//     res.send('Hello World!')
//   })
  
//   app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`)
//   })

app.get("/",(req, res)=>{
    return res.send("Hello There!!");
});

app.get("/login",(req, res)=>{
    return res.send("You are in login route");
});

app.get("/signup",(req, res)=>{
    return res.send("You are in signup route");
});
app.listen(port, () =>{
    console.log("Server is up and running....");
});
