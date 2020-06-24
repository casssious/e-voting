const db = require('../Config/connection');
var express = require('express');
var session = require('express-session');
const router = express.Router();
var jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const secretOrKey = 'secretKey';
router.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
router.use(bodyParser.urlencoded({extended : true}));
router.use(bodyParser.json());




router.post('/', function(request, response) {
	var student_id = request.body.student_id;
   // var year = request.body.year;
    //year=2019;
	//console.log(response)
	if ( student_id ) {
		var myQuery = 'SELECT * FROM votes WHERE student_id = ? AND year = 2019';

		db.query(myQuery, [student_id  ], function(error, results, fields) {
			
			if (error) throw error;
			if (results.length > 0) {
				// request.session.loggedin = true;
				// request.session. student_id =  student_id;
				// response.redirect('/ballot');

				var payload = {
					id: results[0].student_id,
					name:results[0].sfc_name,
					Year:results[0].year
				};
				var token = jwt.sign(payload,secretOrKey,{expiresIn:60*5}); //made it that the tokken expires in 5 minuts
				
				response.json({
					message:"True",
					token:token,
					data : results,
					status: 200
				})
				
			} else {
				response.status(401).json({
					message:"False"
				})
			}			
			
		});
	} else {
		response.status(401).json({
		//	message:'Please enter student number and password!'
		});
	}
});
module.exports = router;