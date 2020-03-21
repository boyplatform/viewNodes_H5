//import section
var express= require('express');
var app=express();
var bodyParser = require('body-parser');
 

var BoyH5Validation=require('../src/boyH5Validation');
var boyH5ValidationObj=new BoyH5Validation();
 

var boyH5Common=require('../src/boyH5Common');
var conf=require('../src/config.js');

 
 

//install midware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


//Programe Entry
var server=app.listen(8080,'0.0.0.0',function(){
 
     console.log('Intelligent boy-hub is running on current crystal node at:'+(new Date()).toLocaleString()," on IP:",boyH5Common.getCurrentServerIpAdress().trim());
       
      
})


 



app.post('/h5Entry',async function(req,res){

      //入口参数验证
      let validationRs=await boyH5ValidationObj.InputValidator(req.body,'/h5Entry');
      if(validationRs.Result===false){
         
            res.end(JSON.stringify(validationRs));
            return;
      }
      let jsonBody=req.body;  
       
    
     
         

})

 

 