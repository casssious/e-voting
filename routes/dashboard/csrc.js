const express = require('express');
const router = express.Router();
const sql = require('mysql');
const db = require('../../Config/connection');

//retrieve data from user
router.get('/retrieve', function(req,res){

    db.query('SELECT csrc_id, csrc_name, csrc_img  FROM csrc',function(error,results,fields){
        if(error) 
        {
            console.log('error occur');
        }
        else{
            return res.send(results);
        }
            
        
    });
});

router.post('/saved', function(request, response) {
     
    var save ={
      "csrc_id":request.body.csrc_id,
      "csrc_name":request.body.csrc_name,
      "csrc_img":request.body.csrc_img
      
    }
    db.query('INSERT INTO  csrc SET ?', save , function (error, results,fields) {
    if (error) {
      console.log("error ocurred",error);
    } else {
      response.send({
          data:results, 
          message:" csrc candidate registered sucessfully"});
         }     
    });
   
 })

//delete
router.delete('/csrc/:id',function(req,res){
    var csrc = {id:req.params.id};

    db.query('DELETE FROM csrc WHERE csrc_id ='+ req.params.id,csrc, function(error,result){
        if(error){
            console.log('error')
        } else {
        return res.send('delete success');
        }
    })
});

router.put('/upda', (req, res) =>
{
	var sql = 'UPDATE csrc SET csrc_name= ?, csrc_name = ? WHERE csrc_id = ?';
	db.query(sql, [req.body.csrc_name,req.body.csrc_name,req.body.csrc_id],(err, results, rows, fields) =>
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

