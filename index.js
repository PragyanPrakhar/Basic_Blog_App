const express = require("express");
const app = express();
const PORT = 5252;
const path = require("path");
const {v4:uuidv4}=require("uuid");
app.use(express.urlencoded({ extended: true }));
// Express will be able to understand the data in the url encoded form.

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
// The above line is used to serve the static files such as html, css, js

let posts = [
    {
        username: "heyhey",
        content: "I love it",
        id: uuidv4()
    },
    {
        username: "good",
        content: "better",
        id: uuidv4()
    },
    {
        username: "best",
        content: "best of best",
        id: uuidv4()
    },
    {
        username: "Ohh! Yeahh",
        content: "Ohh Noo",
        id: uuidv4()
    },
];

app.get("/", (req, res) => {
    res.send("server working very well");
});

app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
});

app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});

app.post("/posts", (req, res) => {
    let { username, content } = req.body;
    let id=uuidv4();
    posts.push({ username, content,id });
    res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    if (!post) {
        res.render("error.ejs");
    } else {
        res.render("show.ejs", { post });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
