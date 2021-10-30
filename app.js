const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const expressHbs = require("express-handlebars");

const app = express();

app.engine(
  "hbs",
  expressHbs({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", "views");

const adminData = require("./routes/admin");
const shopRouters = require("./routes/shop");
const { use } = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
// trả về path của thư mục public1
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use(shopRouters);
app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page Not Found" });
});

app.listen(3000);
