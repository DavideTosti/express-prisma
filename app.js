import express from "express";
import booksRouter from "./routers/books.js";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Homepage");
});

app.use("/books", booksRouter);

app.listen(port, () => {
  console.log(`Server avviato su http://localhost:${port}`);
});
