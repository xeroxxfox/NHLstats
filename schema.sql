DROP DATABASE IF EXISTS nhl_db;

CREATE DATABASE nhl_db;

USE nhl_db;


CREATE TABLE teams (
    id INT NOT NULL,
    teamName VARCHAR(30) NOT NULL,
    city VARCHAR(45) NOT NULL,
    abbreviation VARCHAR(5) NOT NULL,
    divisionName VARCHAR(40) NOT NULL,
    divisionID INT NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE players (
    id INT NOT NULL,
    nhlID INT NOT NULL,
    playerName VARCHAR(50) NOT NULL,
    position VARCHAR(15) NOT NULL,
    shots INT NOT NULL,
    goals INT NOT NULL,
    assists INT NOT NULL,
    points INT NOT NULL,
    TOI_per_game VARCHAR(10) NOT NULL,
    hits INT NOT NULL, 
    shots_per_game INT NOT NULL,
    PRIMARY KEY (id)
)