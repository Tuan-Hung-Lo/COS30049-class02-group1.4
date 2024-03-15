-- Drop tables if they exist

DROP TABLE IF EXISTS assets_receipt;
DROP TABLE IF EXISTS assets;
DROP TABLE IF EXISTS account;

-- Create tables with auto-increment primary keys and adjusted data types

CREATE TABLE account (
    accountId INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50),
    password VARCHAR(50),
    firstName VARCHAR(50),
    lastName VARCHAR(50),
    publicKey VARCHAR(255)
);

CREATE TABLE assets (
    assetId INT AUTO_INCREMENT PRIMARY KEY,
    authorId INT,
    name VARCHAR(100),
    category VARCHAR(50),
    publishDate DATE,
    amount DECIMAL(10,4),
    price DECIMAL(10,4),
    description TEXT,
    FOREIGN KEY (authorId) REFERENCES account(accountId)
);

CREATE TABLE assets_receipt (
    receiptId INT AUTO_INCREMENT PRIMARY KEY,
    accountId INT,
    assetId INT,
    date DATE,
    FOREIGN KEY (accountId) REFERENCES account(accountId),
    FOREIGN KEY (assetId) REFERENCES assets(assetId)
);