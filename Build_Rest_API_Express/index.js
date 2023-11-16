import express from "express";
import bodyParser from "body-parser"; //middleware

import usersRouts from "./routes/users.js";
const app = express();
const PORT = 5000;

app.use(bodyParser.json()); //bodyParser middleware

app.use("/users", usersRouts);

app.get("/", (req, res) => {
  res.send("Hello from Home Page.");
});

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
