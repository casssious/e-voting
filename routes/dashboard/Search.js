const express = require('express');
const router = express.Router();
const db = require('../../Config/connection');

router.get('/organisationSearch', function(req, res){

    let search = req.body.search;
    let myQuery = "SELECT * FROM iscrc i, csrc c WHERE i.name = \"" + search +"\" AND c.name = \"" + search +"\"" ;

    db.query(myQuery, function(err, rows, fields){
        if (err) {
            console.log('Cannot get ', err);
            res.send({
                code: 400,
                message: "No results found!",
                data: err
            });
        } 
        else {
            console.log(rows);
            res.send({
                code: 200,
                Success: "Search results",
                data: rows
            });    
        }
    });
}); 

router.get('/candidateSearch', function(req, res){

    let search = req.body.search;
    let myQuery = "SELECT * FROM sfc WHERE name = \"" + search +"\"" ;

    db.query(myQuery, function(err, rows, fields){
        if (err) {
            console.log('Cannot get ', err);
            res.send({
                code: 400,
                message: "No results found!",
                data: err
            });
        } 
        else {
            console.log(rows);
            res.send({
                code: 200,
                Success: "Search results",
                data: rows
            });    
        }
    });

});

module.exports = router;