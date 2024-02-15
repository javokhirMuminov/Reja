
const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString =
  "mongodb+srv://javokhir:775577@cluster0.3gmdffb.mongodb.net/Reja?retryWrites=true&w=majority";
mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log("db connect ERROR:", err);
    else {
      console.log("run MongoDB");
      module.exports = client;
      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 3000;
      server.listen(PORT, function () {
        console.log(
          `This server is running seccessfully on port: ${PORT}, http://localhost:${PORT}`
        );
      });
    }
  }
);