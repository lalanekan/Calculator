
const express = require("express");
const bodyParser = require("body-parser");

const app =express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/" , function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/" , function(req, res){
var num1 = Number(req.body.n1);
var num2 = Number(req.body.n2);

var result = num1 + num2 ;
res.send("The result of the calculation is "+ result);
});


    app.get("/bmiCalculator" , function(req, res){
        res.sendFile(__dirname + "/bmiCalculator.html");
    });

    app.post("/bmiCalculator", function(req,res){
        var weight = parseFloat(req.body.weight);
        var height = parseFloat(req.body.height);

        var bmi = weight / (height * height); 
        res.send("Your bmi is " + bmi);
    });

    app.get("/multiplication", function (req, res) {
        res.sendFile(__dirname + "/multiplication.html");
    });

    app.post("/multiplication", function(req,res){
        var n1 =Number(req.body.n1);
        var n2 = Number(req.body.n2);

        var multiply = (n1 * n2);
        res.send("Your answer is " + multiply);
    });


app.listen(3000, function(){
    console.log("Server is running on port 3000.");
});