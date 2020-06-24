const express = require('express');
const router = express.Router();
const sql = require('mysql');
const db = require('../../Config/connection');

//retrieve data from user
router.get('/getdata', function(req,res){
    db.query('SELECT sfc_id, fac_id, sfc_name, sfc_position, sfc_img FROM sfc',function(error,rows,fields){
        if(error){
            console.log('error');
        }
            res.send({
                data: rows,
                message: "Got all data"
            })
    });
});

//post 
router.post('/registerSFC', function(req,res) {

  var fac = {
      "sfc_id" : req.body.sfc_id,
      "fac_id" : req.body.fac_id, 
      "sfc_name" : req.body.sfc_name,
      "sfc_position" : req.body.sfc_position,
      "sfc_img" : req.body.sfc_img
    };

  if (!fac) {
    return res.status(400).send({ 
        error:true,
        message: 'provide parties'
    });
  }

  db.query('INSERT INTO sfc SET ?', [fac], function (error, results, fields){
      if(error){
        console.log(error)
        res.send({
            data: error,
            code: 400,
            message: "Cannot Insert"
        });
      }
      else{
        console.log(results);
        res.send({
            data: results,
            code : 200,
            Success: "Successfully posted"
        });
      }
  });
});

//delete
router.delete('/sfcDel/:sfc_id',function(req,res){
    var sfc_id = req.params.sfc_id;
    var myQuery = 'DELETE FROM sfc WHERE sfc_id = \"' + sfc_id +"\"";

    db.query(myQuery, function(error,result){
        if(error){
            console.log(error)
        } else {
        console.log(result)
         res.send({
             data: result
         });
        }
    })
});

//update
router.put('/update', (req, res) =>
{
	var sql = 'UPDATE sfc SET sfc_position = ?, sfc_name = ? WHERE sfc_id = ?';
	db.query(sql, [req.body.sfc_position,req.body.sfc_name,req.body.sfc_id],(err, results, rows, fields) =>
	{
		if(!err)
		{
			res.send('Updated Successfully');
		}
		else
		{
			console.log(err);
		}
	});
});


module.exports = router;