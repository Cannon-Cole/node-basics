const http = require("http");

//req is the incoming request
//res is the respone sent back
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  }
  if (req.url === "/about") {
    res.end("Here is our short history");
  }

  res.end(`<h1>Oops!</h1>
  <p>We can't find the page you are looking for.`);
});

server.listen(5000);
