var express = require('express');
var router = express.Router();
var https=require("https");
let homePageUrl = require('../api/homePage')

router.get('*',async function(req, res, next) {
  let json
  try{
    json = await (function() {
      return new Promise(function (resolve, reject) {
        https.get(homePageUrl,function(data) {
          var str="";
          data.on("data",function(chunk){
            str+=chunk;
          })
          data.on("end",function(){
            resolve(str)
          })  
          data.on('err',function(){
            reject(new Error('get Error'))
          })
        }) 
      })
    })() 
  }catch(e){
    console.log('homePage get')
    res.send(e)
    return 
  }
  res.send(json)
});

module.exports = router;
