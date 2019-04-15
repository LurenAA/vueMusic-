var express = require('express');
var router = express.Router();
var https=require("https");
let homePageUrl = require('../api/homePage')
let homePageMvUrl = require('../api/homePageMvList')
let mvPagesUrl = require('../api/mvPage')
let newSong = require('../api/newSong')
let mvPage = require('../api/homeMv')
let mvPageTag = require('../api/homeMvTag')
let distPage = require('../api/distPage')

let f = function(x) {
  return new Promise(function (resolve, reject) {
    https.get(x,{
      headers:{
        'referer':`https://y.qq.com/n/yqq/playlist/${x}.html`
      }
    },function(data) {
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

router.get('/homeMvTag', handle(mvPageTag))
router.get('/mvlist',handle(homePageMvUrl))
router.get('/recom',handle(homePageUrl))
router.get('/song',function(req, res, next) {
  f(newSong(req.query.mid))
  .then(json => {
    let cont = JSON.parse(json)
    res.set('Content-Type', 'text/plain');
    res.send(cont['req_0'].data.sip[0] + cont['req_0'].data.midurlinfo[0].purl)
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

router.get('/dist',function(req, res, next) {
  f(distPage(req.query.vid))
  .then(json => {
    res.send(json)
  })
  .catch(e => {
    res.send('err')
  })  
})

router.get('/homeMv', function (req,res,next) {
  let x
  if(req.query['area_id'] && req.query['version_id']) {
    x = mvPage(req.query['area_id'],req.query['version_id'])
  } else {
    x = mvPage()
  }
  f(x)
  .then(json => {
    res.send(json)
  })
  .catch(e => {
    res.send('err')
  })  
})
module.exports = router;
