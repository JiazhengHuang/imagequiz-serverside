const { request, response } = require("express");

// dependencies
const express = require("express");

// creat the server
const app = express();
const port = process.env.PORT || 4002;

// parse json
app.use(express.json());

// data
let places = [];

app.get("/", (request, response) => {
    response.send("<h1>Hello!!!</h1>");
});

app.get("/add/:a/:b", (request, response) => {
    let a = request.params.a;
    let b = request.params.b;
    let sum = a + b;
    response.send("${a} + ${b} = ${sum}");
});

app.post("/place", (request, response) => {
    let name = request.body.name;
    let address = response.body.address;
    let place = { name: name, address: address };

    if (place) {
        response.json(place);
    } else {
        response.status(404).send("The place ${name} could not be found.");
    }
    // places.push(place);
    // response.send("the place ${name} was added successfully.");
});

// start the server
app.listen(port, () => console.log("Listening pon port " + port));
