require("dotenv").config();
const express = require("express");
const mysql = require("mysql");
const app = express();
const cors = require("cors");
// rest of your code

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
app.post("/upload", upload.single("file"), async (req, res) => {
    const file = req.file;
    const params = new putObjectCommand({
        Bucket: bucketName,
        Key: file.originalname,
        Body: file.buffer,
        contentType: file.mimetype,
    });

    const command = new putObjectCommand({params});

    await s3Client.send(command);

    res.send({});


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
