const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'i-voter'
});

db.connect(function(error,res){
    if (!!error) {
        console.log('Error');
       
        res.json({code : 100, status : "Error in connection database"});
		return;
    } else {
        console.log('Connected to the database');
    }
});


module.exports=db;
