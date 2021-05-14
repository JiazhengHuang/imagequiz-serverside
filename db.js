require("dotenv").config();
const { Pool } = require("pg");

let host = process.env.host;
let database = process.env.database;
let port = process.env.port;
let username = process.env.username;
let password = process.env.password;

let connectionString = `postgres://${username}:${password}@${host}:${port}/${database}`;

let connection = {
    connectionString: process.env.DATABASE_URL
        ? process.env.DATABASE_URL
        : connectionString,
    ssl: { rejectUnauthorized: false },
};

const pool = new Pool(connection);

let saveFlowers = (name, picture) => {
    return pool
        .query(
            "insert into imagequiz.flowers(name, picture) values ($1, $2, $3, $4)",
            [id, name, picture]
        )
        .then(() => console.log("the flower was saved"))
        .catch((e) => console.log(e));
};

let saveQuizzes = (quiznumber, questionid) => {
    return pool
        .query(
            "insert into imagequiz.quizzes(quiznumber, questionid) values ($1, $2, $3) return id",
            [id, quiznumber, questionid]
        )
        .then(() => console.log("the quizzes was saved"))
        .catch((e) => console.log(e));
};

let saveQuestions = (flowerid, choices, answer) => {
    return pool
        .query(
            "insert into imagequiz.questions(flowerid, choices, answer) values ($1, $2, $3, $4) return id",
            [id, flowerid, choices, answer]
        )
        .then(() => console.log("the questions was saved"))
        .catch((e) => console.log(e));
};

let saveScore = (customerid, quizid, score) => {
    return pool
        .query(
            "insert into imagequiz.scores(customerid, quizid, score) values ($1, $2, $3) return id",
            [id, flowerid, choices, answer]
        )
        .then(() => console.log("the scores was saved"))
        .catch((e) => console.log(e));
};

module.exports = { saveFlowers, saveQuizzes, saveQuestions, saveScore };
