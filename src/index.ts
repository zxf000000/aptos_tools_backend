import express from "express";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

const port = process.env.SERVER_PORT;
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
