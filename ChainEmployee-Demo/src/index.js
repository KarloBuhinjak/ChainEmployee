const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const userRoute = require("./Routes/post");
const authRoute = require("./Routes/auth");
const chatRoute = require("./Routes/chat");
const todoRoute = require("./Routes/todo");
const projectRoute = require("./Routes/project");
const employeeRoute = require("./Routes/employee");
const path = require("path");

require("./Config/DatabaseConfig");

const app = express();
console.log(__dirname);

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "Public")));
app.set("views", path.join(__dirname, "Views"));

app.use(
  session({
    secret: "tajna",
    resave: false,
    saveUninitialized: false,
  })
);

app.use("/api/v1/post", userRoute);
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/chat", chatRoute);
app.use("/api/v1/user", todoRoute);
app.use("/api/v1/project", projectRoute);
app.use("/api/v1/employee", employeeRoute);

const PORT = 4001;
app.listen(PORT, () => console.log(`Running on port ${PORT}`));
