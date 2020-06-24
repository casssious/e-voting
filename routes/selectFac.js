var session = require('express-session');
var express = require('express')
var mysql = require('mysql');
const router = express.Router()
var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'i-voter'
});

db.connect(function(error){
    if (!!error) {
      //  console.log('Error');
    } else {
      //  console.log('Connected to the database');
    }
});


 let bodyParser= require('body-parser')
 router.use(bodyParser.json())
 
  router.get('/selectInfo',(reg, res) =>{

      db.query('Select * From faculty', (err, rows, fields)=>
      {
        if(!err)
        {
          res.send({
            data : rows,
            code:200,
            Success:"Got The information from faculty"
          })
        }
        else{
          res.send({
            code:400,
            message:"Couldnt Get all from Faculty"
          })
        }
      })

  })
      
 let path = require('path')
 router.use((req, res, next)  => {
   /* NB: Kgaugelo if any query
   
   fix this thing pronto David

==================================================================================================




   send date not console it
   */
     console.log(`${new Date().toString()} => ${req.originalUrl}`)
     next()
 })


 



     

module.exports = router;


