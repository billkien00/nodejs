const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const errorController = require("./controllers/error");
const db = require("./util/database");

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRouters = require("./routes/shop");

db.execute("SELECT * FROM products");

//middleware để dùng dùng body(lấy dữ liệu sau khi submit có method là post) node 4.16
// app.use(express.urlencoded()) gửi html lên sever
// app.use(express.json()) gửi js lên sever (XMLHttpRequest, fetch, axios,..)
app.use(bodyParser.urlencoded({ extended: true }));

// trả về path của thư mục public
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRouters);
app.use(errorController.get404);

app.listen(3000);
