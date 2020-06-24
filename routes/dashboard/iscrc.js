const express = require('express');
const router = express.Router();
const sql = require('mysql');
const db = require('../../Config/connection');



//retrieve data from user
router.get('/get', function(req,res){

    db.query('SELECT isrc_id, isrc_name, isrc_img  FROM iscrc',function(error,results,fields){
        if(error) throw error;
     
            return res.send({data:results});
        
    });
});

router.post('/isrc', function(request, response) {
     
    var inse ={
      "isrc_id":request.body.isrc_id,
      "isrc_name":request.body.isrc_name,
      "isrc_img":request.body.isrc_img
      
    }
    db.query('INSERT INTO  iscrc SET ?', inse, function (error, results,fields) {
    if (error) {
      console.log("error ocurred",error);
    } else {
      response.send({data:results, message:" isrc candidate registered sucessfully"});
         }     
    });
   
 })

//delete
router.delete('/isrc/:id',function(req,res){
    var isrc = {id:req.params.id};

    db.query('DELETE FROM iscrc WHERE isrc_id = '+ req.params.id,isrc, function(error,result){
        if(error){
            res.send(error)
        } else {
        return res.send('deleted successfully');
        }
    })
});


//update
router.put('/modify', (req, res) =>
{
	var sql = 'UPDATE iscrc SET isrc_name = ? WHERE isrc_id = ?';
	db.query(sql, [req.body.isrc_name,req.body.isrc_id],(err, results, rows, fields) =>
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

