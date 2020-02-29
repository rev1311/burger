CREATE TABLE burgers (
    id INT AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(50) NOT NULL,
    devoured INT DEFAULT 0,
    createdAt TIMESTAMP NOT NULL,
    PRIMARY KEY(id)
);

