var express = require ('express');
app = express();

app.post("/",function(req,res){

    res.send("this is simple post request");
})

//request with url query

app.post("/one",function(req,res){
    let firstName = req.query.firstName;
    let lastName = req.query.lastName;

    res.end(firstName+" "+lastName);
})

//request with header

app.post("/two",function(req,res){

    let userName = req.header("userName");
    let password = req.header("password");
    res.send("UserName:" +userName +" "+ "Password:"+password);
})

app.listen(7040,function(){
    console.log("server run success");
})