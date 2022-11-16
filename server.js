const express = require("express");


const app = express();
app.use(express.json());
const db = require("./app/models");
db.sequelize.sync();
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Chao mung den binh nguyen vo tan ${PORT}.`);
});
app.get("/", (req, res) => {
  res.json({ message: "Welcome to application." });
});
require('./app/routes/user.routes')(app);