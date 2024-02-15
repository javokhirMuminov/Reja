console.log("Web Serverni boshlash");
const express = require("express");
const app = express();
const fs = require("fs");
// const res = require("express/lib/response");
const db = require("./server").db();

let user;
fs.readFile("database/user.json", "utf8", (err,data) => {
  if(err) {
    console.log("Error", err);
  }else {
    user = JSON.parse(data);
  }
});

console.log("Salom")

// 1 - chi bosqich kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


//2- chio bosqich Session code



//3 - chi bosqich Views code
app.set("views", "views");
app.set("view engine", "ejs");


//4 Routing code
// app.post("/create-item", (req, res) => {
//   console.log(req.body);
//   res.json({test:"success"});
// })

app.post("/create-item", (req, res) => {
  //TODO: code with db here
  console.log(req.body);
  const new_reja = req.body.reja;
  db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
    if (err) {
      console.log(err);
      res.end("err");
    } else {
      res.end("success");
    }
  });
});

// app.get("/author", (req, res) => {
//   res.render("author", {user:user} );
// });

app.get("/", function (req, res) {
  db.collection("plans")
  .find()
  .toArray((err, data) => {
    if (err) {
      console.log(err);
      res.end("err");
    } else {
      res.render("reja", { items: data });
    }
  });

})
module.exports = app;