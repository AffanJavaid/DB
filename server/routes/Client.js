const express = require('express')
const router = express.Router()
const db=require('./DB');
//route for show the result from database to employee
router.get('/readClient', async (req,res)=>{
    const selectSql="select * from CLIENT ";
    //to write the qeury of mysql in nodejs
    db.query(selectSql, (err,result) => {
        console.log(err);
        res.send(result);
    })
})
//routes for inserting into Client
router.post('/insertClient', async (req,res)=>{
    
    const cid =req.body.cid;
    const eid =req.body.eid;
    const fname = req.body.fname;
    const lname = req.body.lname;
    const city = req.body.city;
    const houseno = req.body.houseno;
    const email = req.body.email;
    const contact = req.body.contact;
    const insertSql="INSERT INTO CLIENT VALUES (?,?,?,?,?,?,?,?)";
    db.query(insertSql,[cid,eid,fname,lname,city,houseno,email,contact], (err,result) => {
        if(err)
        {
            console.log(err);
        }
        else
        {
            console.log(result);
        }
    })
});    


module.exports = router;