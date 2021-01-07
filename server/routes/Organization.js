const express = require('express');
const router = express.Router();
const db=require('./DB');
//route for show the result from database to organization 
router.get('/readOrganization', async (req,res)=>{
    const selectSql="select * from ORGANIZATION ";
    db.query(selectSql, (err,result) => {
        console.log(err);
        res.send(result);
    })
})
//route for insert on organization  from front end
router.post('/insertOrganization', async (req,res)=>{
    
    const id =req.body.id;
    const name = req.body.name;

    const insertSql="INSERT INTO ORGANIZATION VALUES (? , ?)";
    db.query(insertSql,[id,name], (err,result) => {
        console.log(err,result);
    })
});

module.exports = router;