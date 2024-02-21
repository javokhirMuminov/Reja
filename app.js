const express = require("express");
const app = express();

const db = require("./server").db();
const mongodb = require("mongodb");

// 1. express ga kirib kelayotgan malumotlarga bogliq bulgan kodlar.
app.use(express.static("public")); // harqanday  browserdan kirib kelgan request uchun public fulderi ochiq degan manoni anglatadi.
app.use(express.json()); // kirib kelayotgan json formatdagi datani object formtga uzgartirib beradi.
app.use(express.urlencoded({ extended: true })); // html da form request ni qabul qilishda ishlatiladi.

// 2. Session code

// 3. BSSR (backend server side rendering) - backend da view yasash backend da html yasab browser ga yuboriladi.
app.set("views", "views");
app.set("view engine", "ejs"); // ejs engine template

// 4. router lar
app.post("/create-item", function (req, res) {
  const new_reja = req.body.reja;
  db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
    console.log(data.ops[0]);
    res.json(data.ops[0]);
  });
});

app.post("/delete-item", (req, res) => {
  const id = req.body.id;
  db.collection("plans").deleteOne(
    { _id: new mongodb.ObjectId(id) },
    (err, data) => {
      res.json({
        status: "succsess",
      });
    }
  );
});

app.get("/", (req, res) => {
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
});

app.post("/edit-item", (req, res) => {
  const data = req.body;
  db.collection("plans").findOneAndUpdate(
    { _id: new mongodb.ObjectId(data.id) },
    { $set: { reja: data.new_input } },
    (err, data) => {
      res.json({ state: "success" });
    }
  );
});

app.post("/delete-all", (req, res) => {
  if (req.body.delete_all) {
    db.collection("plans").deleteMany(function () {
      res.json({ state: "hamma rejalar uchirildi" });
    });
  }
});

module.exports = app;