const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const logger = require("./middleware/logger");
const members = require('./Members')

const app = express();

// Init middleware
// app.use(logger);

// Handbars Middileware
app.engine("handlebars", exphbs.engine({ defaultlayout: "main" }));
app.set("view engine", "handlebars");

// Body Parser Init
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Hompepage Route
app.get("/", (req, res) => res.render("index", {
  title: 'Member App',
  members
}));

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

// Members API Routs
app.use("/api/members", require("./Routs/api/members"));

const PORT = process.env.PORT || 5000;

/*
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

*/

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
