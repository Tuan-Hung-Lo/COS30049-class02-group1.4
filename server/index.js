require("dotenv").config();
const express = require("express");
const mysql = require("mysql");
const app = express();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const verifyToken = require("./middleware/auth");
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

app.get("/api/owned", (req, res) => {
  const username = req.query.username; // Retrieve username from query parameter
  const query = `
    SELECT a2.assetID, a1.username, a2.name, a2.category, a2.publishDate, a2.amount, a2.price, a2.description 
    FROM account a1
    JOIN assets a2 ON a1.accountID = a2.authorId
    WHERE username = ?`;

  connection.query(query, [username], (error, results) => { // Wrap username in an array
    if (error) {
      console.error("Error fetching users:", error);
      res.status(500).send("Internal Server Error");
      return;
    }

    res.json({ assets: results });
  });
});


app.get("/api/assets", (req, res) => {
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

const updateRefreshToken = (username, refreshToken) => {
  const query = "UPDATE refresh_tokens SET refreshToken = ?, expirationDate = DATE_ADD(NOW(), INTERVAL 1 HOUR) WHERE accountId = ?";
  connection.query(query, [refreshToken, username], (error, results) => {
    if (error) {
      console.error("Error updating refresh token:", error);
    }
  });
};

// Inside your /api/login endpoint handler
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  // Query the database for a user with the provided username
  const query = "SELECT * FROM account WHERE username = ?";

  connection.query(query, [username], (error, results) => {
    if (error) {
      console.error("Error fetching user:", error);
      res.status(500).send("Internal Server Error");
      return;
    }

    if (results.length > 0) {
      const user = results[0];
      // In a real app, use bcrypt to hash the incoming password and compare with the hashed password in DB
      if (password === user.password) {
        // User found and valid
        const payload = {
          accountId: user.accountId,
          username: user.username,
          // Add additional fields here if needed
        };
        const tokens = generateTokens(payload);
        updateRefreshToken(username, tokens.refreshToken);
        console.log("Access Token:", tokens.accessToken);
        console.log("Refresh Token:", tokens.refreshToken);
        console.log(user);
        const accountId = user.accountId; // Get the account ID from the user object
        const token = generateTokens({ accountId, username }); // Pass accountId to generateTokens function      
        res.json({ ...tokens, accountId }); // Send accountId along with tokens
      } else {
        // Password does not match
        res.status(401).send("Username or password is incorrect");
      }
    } else {
      // No user found with that username
      res.status(401).send("Username or password is incorrect");
    }
  });
});

app.post("/api/register", (req, res) => {
  const { firstName, lastName, username, publicKey, password } = req.body;
  const values = [firstName, lastName, username, publicKey, password];
  const query = "INSERT INTO account (firstName, lastName, username, publicKey, password) VALUES (?, ?, ?, ?, ?)";
  
  connection.query(query, values, (error, results) => {
    if (error) {
      console.error("Error registering user:", error);
      res.status(500).send("Internal Server Error");
      return;
    }
    res.status(201).send("User registered successfully");
  });
});
  app.post("/api/update-profile", (req, res) => {
    const { firstName, lastName, publicKey, password, username } = req.body;
    const values = [firstName, lastName, publicKey, password, username]; 
    // Extract accountId from the authenticated user
    
    // Update the user profile data in the database
    const query = "UPDATE account SET firstName = ?, lastName = ?, publicKey = ?, password = ? WHERE username = ? Limit 1";
    connection.query(query, values, (error, results) => {
      if (error) {
        console.error("Error updating profile:", error);
        res.status(500).send("Internal Server Error");
        return;
      }
      res.status(200).send("Profile updated successfully");
    });
  });
  app.post("/api/upload-product", (req, res) => {
    const { authorId,name, description, category, amount } = req.body;
    const values = [authorId, name, description, category, amount]; 
    // Extract accountId from the authenticated user
    
    // Update the user profile data in the database
    const query = "Insert Into assets (authorId, name, description, category, amount, publishDate, price) VALUES (?, ?, ?, ?, ?, CURDATE(), 1)";
    connection.query(query, values, (error, results) => {
      if (error) {
        console.error("Error uploading product:", error);
        res.status(500).send("Internal Server Error");
        return;
      }
      res.status(200).send("Product uploaded seccessfully");
    });
  });

const generateTokens = (payload) => {
  const { accountId, username } = payload;

  const accessToken = jwt.sign(
    { accountId, username },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "1h" }
  );

  const refreshToken = jwt.sign(
    { accountId, username },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: "1h" }
  );

  // Store refresh token in the database
  const query = "INSERT INTO refresh_tokens (accountId, refreshToken, expirationDate) VALUES (?, ?, DATE_ADD(NOW(), INTERVAL 1 HOUR))";
  connection.query(query, [accountId, refreshToken], (error, results) => {
    if (error) {
      console.error("Error storing refresh token:", error);
    }
  });

  return { accessToken, refreshToken };
};

// Modify /token endpoint to handle token refresh requests
app.post("/token", (req, res) => {
  const refreshToken = req.body.refreshToken;
  if (!refreshToken) return res.sendStatus(401);

  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
    if (err) return res.sendStatus(403);

    const { accountId, username } = decoded;

    // Check if the refresh token exists and is not expired
    const query = "SELECT * FROM refresh_tokens WHERE accountId = ? AND refreshToken = ? AND expirationDate > NOW()";
    connection.query(query, [accountId, refreshToken], (error, results) => {
      if (error) {
        console.error("Error checking refresh token:", error);
        return res.sendStatus(500);
      }

      if (results.length === 0) {
        return res.sendStatus(403); // Invalid refresh token
      }

      // Generate new access token
      const accessToken = jwt.sign({ accountId, username }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "5m" });
      res.json({ accessToken });
    });
  });
});
app.post("/api/logout", (req, res) => {
  const { refreshToken } = req.body;
  if (!refreshToken) return res.sendStatus(401);

  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
    if (err) return res.sendStatus(403);

    const { accountId } = decoded;

    // Delete the refresh token from the database
    const query = "DELETE FROM refresh_tokens WHERE accountId = ?";
    connection.query(query, [accountId], (error, results) => {
      if (error) {
        console.error("Error deleting refresh token:", error);
        return res.sendStatus(500);
      }

      res.sendStatus(204); // No Content - Successfully logged out
    });
  });
});

app.get("/getToken", (req, res) => {
  return process.env.ACCESS_TOKEN_SECRET;
});



// app
app.get('/posts', verifyToken, (req, res) => {
	res.json(posts.filter(post => post.userId === req.userId))
})
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
