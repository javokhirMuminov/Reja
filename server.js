console.log("Web Serverni boshlash");
const express = require("express");
const app = express();
const http = require("http");



// 1 - chi bosqich kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


//2- chio bosqich Session code



//3 - chi bosqich Views code
app.set("views", "views");
app.set("view enfine", "ejs");


//4 Routing code
app.get("/hello", function (req, res) {
  res.end(`<h1 style="background:red">Hello World my name Javokhir</h1>`);
});

app.get("/gift", function (req, res) {
  res.end(`<h1 ">Siz sovgalar bolimidasiz.`);
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(`The server is running successfully on port: ${PORT}`);
})