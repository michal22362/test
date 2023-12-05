
const express = require("express");
const app = express();
let port = "8000";

const fsPromises = require("fs").promises;
const path = require("path");

app.get("/users", async (req,res) => {
    
    const data = await fsPromises.readFile("./users.json")
    res.send(JSON.parse(data));

});

app.get("/workers", async (req,res) => {
    
    const data = await fsPromises.readFile("./users.json")
    const users = JSON.parse(data);
    const workers = users.filter( user => user.age  >= 20 && user.employeeStatus == "employed")
    res.send(workers);


});

app.listen(port);