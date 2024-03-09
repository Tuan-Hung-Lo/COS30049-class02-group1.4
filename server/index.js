require("dotenv").config();
const express = require("express");
const mysql = require("mysql");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const connection = mysql.createConnection({
  host: "cos30049.cf26i4a4s0yp.eu-west-1.rds.amazonaws.com",
  user: "admin",
  password: "12345678",
  database: "nifty",
});

connection.connect();

// API endpoint to get all users
app.get("/users", (req, res) => {
  const query = "SELECT * FROM account";

  connection.query(query, (error, results) => {
    if (error) {
      console.error("Error fetching users:", error);
      res.status(500).send("Internal Server Error");
      return;
    }

    res.json({ users: results });
  });
});

app.get("/assets", (req, res) => {
  const query = `
    Select a2.assetID, a1.username, a2.name, a2.category, a2.publishDate, a2.amount, a2.price, a2.description
    From account a1
    Join assets a2
    On a1.accountID = a2.authorId
  `;

  connection.query(query, (error, results) => {
    if (error) {
      console.error("Error fetching users:", error);
      res.status(500).send("Internal Server Error");
      return;
    }

    res.json({ assets: results });
  });
});

app.post("/signup", (req, res) => {
  const sql = "INSERT INTO account (username, password, firstName, lastName) VALUES (?, ?, ?, ?)";
  const values = [req.body.userName, req.body.password, req.body.firstName, req.body.lastName];

  connection.query(sql, values, (error, results) => {
    if (error) {
      console.log(error);
      res.status(400).send("Error signing up");
      return;
    }

    // Send back the ID of the new user
    res.send(`${results.insertId}`);
  });
});



// Close the MySQL connection when the server shuts down
process.on("SIGINT", () => {
  connection.end();
  process.exit();
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});