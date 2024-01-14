var express = require('express');
app = express();

//get request in url query

app.get('/',function(req,res){

   let firstName = req.query.firstName;
   let lastName = req.query.lastName;


    res.end(firstName+" "+lastName);
})

//request header

app.get('/one',function(req,res){

    let firstName = req.header("firstName");
    let lastName = req.header("lastName");
    let userAgent = req.header("User-Agent");
 
 
     res.end(firstName+" "+lastName);
     //res.end(userAgent);
 })

app.listen(8070,function(){
    console.log("server run success");
})