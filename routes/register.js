var session = require('express-session');
var express = require('express')
var mysql = require('mysql');
const router = express.Router();
const db = require('../Config/connection');

router.post('/insert', function (request, response) {

  var today = new Date();
  var post = {
    "student_id": request.body.student_id,
    "student_fname": request.body.student_fname,
    "student_lname": request.body.student_lname,
    "student_password": request.body.student_password,
    "fac_id": request.body.fac_id
  };

  if (!post) {
    res.send({
      code: 400,
      message: "False"
    })
  }

  db.query('INSERT INTO student SET ?', [post], function (error, results, fields) {
    if (error) {
      response.send({
        data: error,
        status: 400,
        message: "Student already exists, Please login"
      })

    } else {
      response.send({
        data: results,
        status: 200,
        message: "Registered Sucessfully"
      });

    }

  });


})

//  let path = require('path')
//  router.use((req, res, next)  => {
//      console.log(`${new Date().toString()} => ${req.originalUrl}`)
//      next()
//  })







module.exports = router;
