-- Drop tables if they exist

DROP TABLE IF EXISTS keyss;
DROP TABLE IF EXISTS assets_receipt;
DROP TABLE IF EXISTS transaction;
DROP TABLE IF EXISTS assets;
DROP TABLE IF EXISTS account;

-- Create tables with auto-increment primary keys and adjusted data types

CREATE TABLE account (
    accountId INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50),
    password VARCHAR(50),
    firstName VARCHAR(50),
    lastName VARCHAR(50)
);

CREATE TABLE keyss (
    keysId INT AUTO_INCREMENT PRIMARY KEY,
    accountId INT,
    privateKey VARCHAR(255),
    publicKey VARCHAR(255),
    FOREIGN KEY (accountId) REFERENCES account(accountId)
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

CREATE TABLE transaction (
    transactionId INT AUTO_INCREMENT PRIMARY KEY,
    accountId INT,
    amount DECIMAL(10,4),
    price DECIMAL(10,4),
    date DATE,
    toaccount VARCHAR(255),
    FOREIGN KEY (accountId) REFERENCES account(accountId)
);
