var session = require('express-session');
var express = require('express')
var mysql = require('mysql');
const router = express.Router()
const db = require('../Config/connection');



 let bodyParser= require('body-parser')
 router.use(bodyParser.json())
 
  router.post('/admin', function(request, response) {
     
     var admins ={
        "adm_id":request.body.adm_id,
       "adm_name":request.body.adm_id,
       "cell_number":request.body.cell_number,
       "password":request.body.password  
     }
     db.query('INSERT INTO admin SET ?', admins , function (error, results,fields) {
     if (error) {
       console.log("error ocurred",error);
     } else {
       response.send({data:results, message:"admin registered"});
          }     
     });
    
  })

  module.exports = router;