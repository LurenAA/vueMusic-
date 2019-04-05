var express = require('express');
var router = express.Router();
var https=require("https");
let homePageUrl = require('../api/homePage')
let homePageMvUrl = require('../api/homePageMvList')
let mvPagesUrl = require('../api/mvPage')
let newSong = require('../api/newSong')

let f = function(x) {
  return new Promise(function (resolve, reject) {
    https.get(x,function(data) {
      var str="";
      data.on("data",function(chunk){
        str+=chunk;
      })
      data.on("end",function(){
        // console.log(str)
        resolve(str)
      })  
      data.on('err',function(){
        console.log('err')
        reject(new Error('get Error'))
      })
    }) 
  })
}

let handle = function(x) {
  return function(req, res, next) {
      f(x).then(json => {
        res.send(json)
      }).catch(e => {
        res.send('err')
      })  
  }
}

router.get('/mvlist',handle(homePageMvUrl))
router.get('/recom',handle(homePageUrl))
router.get('/song',function(req, res, next) {
  f(newSong(req.query.mid))
  .then(json => {
    res.send(json)
  })
  .catch(e => {
    res.send('err')
  })  
})

router.get('/mv',function(req, res, next) {
  f(mvPagesUrl(req.query.vid))
  .then(json => {
    res.send(json)
  })
  .catch(e => {
    res.send('err')
  })  
})

module.exports = router;
