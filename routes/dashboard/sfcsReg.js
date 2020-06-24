var session = require('express-session');
var express = require('express')
var mysql = require('mysql');
const router = express.Router()
const db = require('../../Config/connection');



 let bodyParser= require('body-parser')
 router.use(bodyParser.json())
 
  router.post('/faculty', function(request, response) {
     
     var fac ={
       "sfc_id":request.body.sfc_id,
       "fac_id":request.body.fac_id,
       "sfc_name":request.body.sfc_name,
       "sfc_position":request.body.sfc_position,
       "sfc_img":request.body.sfc_img  
     }
     db.query('INSERT INTO sfc SET ?', fac , function (error, results,fields) {
     if (error) {
       console.log("error ocurred",error);
     } else {
       response.send({data:results, message:"sfc candidate registered sucessfully"});
          }     
     });
    
  })
    
//retrieve data from user
router.get('/candidates', function(req,res){

  db.query('SELECT sfc_id, fac_id, sfc_name, sfc_position, sfc_img FROM sfc',function(error,results,fields){
      if(error) throw error;
   
          return res.send({data:results});
      
          
  });
});

/*router.put('/update',function(req, res) {
  let user={sfc_id:req.body.sfc_id,sfc_name:req.body.sfc_name,sfc_position:req.body.sfc_position}
  if(!user){
    return res.status(400).send({ error:true, message: 'insert' });

  }
  db.query('UPDATE sfc SET sfc_id = ?',[user],function(error,results,fields){
    if(error){
      
      console.log('error')
    }
       res.send('successfully updated');
  });

  res.end();
});*/
 
module.exports = router;