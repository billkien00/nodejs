//lifecycle của node là 1 event loop (luôn chạy để lắng nghe sự kiện) keep running as long as there are event listeners registered
//process.exit(); đùng để kết thúc life cycle của nodejs
const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req);
  // process.exit();
});

server.listen(3000);
