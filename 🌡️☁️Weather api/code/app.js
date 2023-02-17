const express = require("express");
const https = require("https");
const bodyparser = require("body-parser");

const app = express();

app.use(bodyparser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
  //   res.send("server is up and running.");
});

app.post("/", function (req, res) {
  console.log("post req");
  const query = req.body.cityName;
  console.log(query);
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    query +
    "&appid=7c36a95946ebe9aa709b2285e1be4aea&units=metric";

  https.get(url, function (response) {
    console.log(response.statusCode);

    response.on("data", function (data) {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const weatherdesc = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imageurl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";

      res.write("<p> The weather is currently " + weatherdesc + "<p>");
      res.write("<h1> The temperature in " + query + " is " + temp + "</h1> ");
      res.write("<img src=" + imageurl + ">");
    });
  });
});

app.listen(3000, function () {
  console.log("server is running at 3000");
});
