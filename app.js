const express = require("express");
const bodyParser = require("body-parser");
const got = require("got");
const https = require("https");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "signup.html");
});

app.post("/", function(req, res){

const firstName = req.body.fName;
const lastName = req.body.lName;
const email = req.body.email;

const data = {
  member: [
    {
      email_address: email,
      status: "subsribed",
      merge_fields: {
        FNAME: firstName,
        LNAME: lastName
      }

    }
  ]
};

const jsonData = JSON.stringify(data);

const url = ""

https.request(url, options, function(response) {

})

});



app.listen(3000, function(){
console.log("Server's up on port 3000");
});


//API KEY

//40735dd4df5a1d839dcd3f3bbf85db63-us1

// ListID
// dfeb58201a
