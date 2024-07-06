const express = require('express');
const app=express();
const PORT=8000;
const path = require('path');
app.use(express.urlencoded({extended:true}));
//Express will be able to understand the data in the url encoded form.

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
//the above line is used to serve the static files such as html,css,js

let posts=[
    {
        username:"heyhey",
        content:"I love it"
    },
    {
        username:"good",
        content:"better"
    },
    {
        username:"best",
        content:"best of best"
    },
    {
        username:"Ohh! Yeahh",
        content:"Ohh Noo"
    },
]

app.get("/",(req,res)=>{
    res.send("server working very well");
});

app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
