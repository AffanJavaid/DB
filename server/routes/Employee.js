const express = require('express');
const router = express.Router();
const db=require('./DB');
//route for show the result from database to employee
router.get('/readEmployee', async (req,res)=>{
    const selectSql="select * from EMPLOYEE ";
    db.query(selectSql, (err,result) => {
        if(err){
            console.log(err);
        }
        else{
            //sending the result from backend to front end
            res.send(result);
        }
            
    })
})
//routes for inserting into employee
router.post('/insertEmployee', async (req,res)=>{
    
    const eid =req.body.eid;
    const oid =req.body.oid;
    const fname = req.body.fname;
    const lname = req.body.lname;
    const city = req.body.city;
    const houseno = req.body.houseno;
    const email = req.body.email;
    const contact = req.body.contact;
    const insertSql="INSERT INTO EMPLOYEE VALUES (?,?,?,?,?,?,?,?)";
    db.query(insertSql,[eid,oid,fname,lname,city,houseno,email,contact], (err,result) => {
        if(err)
        {
            console.log(err);
            res.send(err);
        }
        else
        {
            console.log(result);
        }
    })
});
//To update data in database
router.put('/updateEmployee', (req,res) => {
    const id = req.body.id;
    const contact = req.body.contact;
    console.log(contact);
    db.query('UPDATE EMPLOYEE SET CONTACT = ? WHERE e_id = ?',[contact,id],(err,result) =>{
        if(err)
        {
            console.log(err);
            res.send(err);
        }
        else
        {
            console.log(result,"Updated");

        }
    })

})

//to delete from database 
router.delete('/deleteEmployee/:id',(req,res)=>{
    const id = req.params.id;
    console.log(id);
    db.query('DELETE FROM employee WHERE e_id = ? ', id, (err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(result);
            console.log(result);
        }
    });
})

module.exports = router;