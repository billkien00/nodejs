const http = require("http");
const express = require("express");
const app = express();
// const port = 3000

const server = http.createServer(app);

server.listen(3000);

// app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`)
//   })
