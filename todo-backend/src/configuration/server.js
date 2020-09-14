const express = require("express");
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");
const todoService = require("../api/todo/todoService");
const cors = require("./cors");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors);

app.use("/api", router);
todoService.register(router, "/todos");

app.get("/", (req, res) => res.send("API Running"));

const PORT = process.env.PORT || 8081;

app.listen(PORT, () => console.log(`Server started on port${PORT}`));




