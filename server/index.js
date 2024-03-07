require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const app = express();

const connection = mysql.createConnection({
  host: 'cos30049.cf26i4a4s0yp.eu-west-1.rds.amazonaws.com',
  user: 'admin',
  password: '12345678',
  database: 'nifty',
});

connection.connect();

// API endpoint to get all users
app.get('/users', (req, res) => {
  const query = 'SELECT * FROM account';

  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error fetching users:', error);
      res.status(500).send('Internal Server Error');
      return;
    }

    res.json({ users: results });
  });
});

app.get('/assets', (req, res) => {
  const query = 'SELECT * FROM assets';

  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error fetching users:', error);
      res.status(500).send('Internal Server Error');
      return;
    }

    res.json({ assets: results });
  });
});

// Close the MySQL connection when the server shuts down
process.on('SIGINT', () => {
  connection.end();
  process.exit();
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
