require("dotenv").config();
const express = require("express");
const mysql = require("mysql");
const app = express();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
// rest of your code
app.use(cookieParser());
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
app.get("/api/users", (req, res) => {
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

app.get("/api/assets", (req, res) => {
  const query = `
    Select a2.assetID, a1.username, a2.name, a2.category, a2.publishDate, a2.amount, a2.price, a2.description, a2.link
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


// Inside your /api/login endpoint handler
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  // Query the database for a user with the provided username
  const query = 'SELECT * FROM account WHERE username = ?';

  connection.query(query, [username], (error, results) => {
    if (error) {
      console.error('Error fetching user:', error);
      res.status(500).send('Internal Server Error');
      return;
    }

    if (results.length > 0) {
      const user = results[0];
      // In a real app, use bcrypt to hash the incoming password and compare with the hashed password in DB
      if (password === user.password) {
        // User found and valid
        const token = jwt.sign({ userId: user.id }, 'yourSecretKey', { expiresIn: '1h' });
        // Set the token as a cookie
        res.cookie('token', token, { httpOnly: true, maxAge: 3600000 }); // maxAge is in milliseconds (1 hour in this case)
        res.sendStatus(200);
      } else {
        // Password does not match
        res.status(401).send('Username or password is incorrect');
      }
    } else {
      // No user found with that username
      res.status(401).send('Username or password is incorrect');
    }
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
