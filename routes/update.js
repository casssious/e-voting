var session = require('express-session');
var express = require('express')
var mysql = require('mysql');
const router = express.Router();
const db = require('../Config/connection');


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
