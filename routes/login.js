const db = require('../Config/connection');
var express = require('express');
var session = require('express-session');
const router = express.Router();
var jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const secretOrKey = 'secretKey';
const nodemailer = require("nodemailer");
const randomstring = require("randomstring");

router.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.post('/Login', function (req, res) {
	const student_id = req.body.student_id;
	const student_password = req.body.student_password;
	if (student_id) {

		//Sending an email
		var transporter = nodemailer.createTransport({
			service: 'Outlook',
			auth: {
				user: 'e-Voting@outlook.com',
				pass: '@eVoting2019'
			}
		});

		const OTPSent = randomstring.generate({
			length: 4,
			charset: 'numeric'
		});

		var mailOptions = {
			from: 'e-Voting@outlook.com',
		    to: student_id + '@tut4life.ac.za',
			subject: 'Testing',
			text: 'Confirmation OTP: ' + OTPSent + '\n\n\n\n\n Regards eVoting'

		};

		transporter.sendMail(mailOptions, function (err, res, info) {
			if (err) {
				console.log(err);
			} else {
				console.log(mailOptions);
				console.log('Email sent: ' + info.res)
				res.json({
					data: res,
					status: 200,
					message: "A pin has been sent to your TUT4LIFE account."
				})
			}
		})

		//Testing if sent O TP and Entered OTP are the same

		var OTPEntered = req.body.OTPSent;	
		console.log(OTPSent);
		console.log(OTPEntered);
		//OTPEntered == OTPSent && student_id && student_password
		if (OTPEntered == OTPSent && student_id && student_password) {
			var myQuery = 'SELECT * FROM student WHERE student_id = ? AND student_password = ?';

			db.query(myQuery, [student_id, student_password], function (error, results, fields) {

				if (error){
					res.json({
					data: error
				})
				}else{

					if (results.length > 0) {
	
						var payload = {
							id: results[0].student_id,
							name: results[0].student_fname,
							lastName: results[0].student_lname
						};
						var token = jwt.sign(payload, secretOrKey, { expiresIn: 60 * 5 }); //made it that the tokken expires in 5 minuts
	
						res.json({
							message: "LoggedIn Successfully",
							token: token,
							data: results,
							status: 200
						});
					}
				}
			});
		}else {
			console.log('Incorrect Pin');
		}
	} else {
		res.json({
			status: 401,
			message: "Incorect student number and password!"
		})
	}
		
	// } else {
	// 	res.send({
	// 		status: 401,
	// 		message: "Please enter student number and password!"
	// 	});
	// }

});

// router.post('/LoginAdmin', function (req, res, results) {

// 	var adm_id = req.body.adm_id;
// 	var password = req.body.password;

// 	if (adm_id && password) {
// 		var myQuery = 'SELECT * FROM admin WHERE adm_id = ? AND password = ?';

// 		db.query(myQuery, [adm_id, password], function (error, results, fields) {

// 			if (error) throw error;
// 			if (results.length > 0) {

// 				var payload = {
// 					id: results[0].adm_id,
// 					name: results[0].adm_name,
// 					cell_number: results[0].cell_number
// 				};
// 				var token = jwt.sign(payload, secretOrKey, { expiresIn: 60 * 5 }); //made it that the tokken expires in 5 minuts

// 				res.json({
// 					message: "LoggedIn Successfully",
// 					token: token,
// 					data: results,
// 					status: 200
// 				})

// 			} else {
// 				res.json({
// 					status: 401,
// 					message: "Incorect staff number and password!"
// 				})
// 			}
// 		});
// 	} else {
// 		res.json({
// 			status: 401,
// 			message: 'Please enter staff number and password!'
// 		});
// 	}

// });

module.exports = router;



