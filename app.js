console.log("Web Serverni boshlash");
const express = require("express");
const app = express();
const fs = require("fs");
// const res = require("express/lib/response");
const db = require("./server").db();
const mongodb = require("mongodb");

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
    console.log(data.ops);
    res.json(data.ops[0]);
  });
});
app.post("/delete-item", (req, res) => {
  const id = req.body.id;
  db.collection("plans").deleteOne({ _id: new mongodb.ObjectId(id)}, function (err, data) {
    res.json({state: "success"});
  })
});
// app.get("/author", (req, res) => {
//   res.render("author", {user:user} );
// });


app.post("/adit-item", (req, res) => {
  const data = req.body;
  console.log(data);
  db.collection("plans").findOneAndUpdate(
    {_id: new mongodb.ObjectId(data.id)},
    {$set: {reja: data.new_input }},
    function (err, data) {
      res.json({state: "success"});
    }
  );

});

app.post("/delete-all", (req,res) => {
  if (req.body.delete_all) {
    db.collection("plans").deleteMany(function () {
      res.json({state:"hamma rejalar ochirildi"});
    })
  }
})


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