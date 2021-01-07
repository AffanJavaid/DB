const express = require('express');
const router = express.Router();
const db=require('./DB');
//route for show the result from database to employee
router.get('/readAccount', async (req,res)=>{
    const selectSql="select * from ACCOUNT ";
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
router.post('/insertAccount', async (req,res)=>{
    
    const aid =req.body.aid;
    const brand =req.body.brand;
    const code = req.body.code;
    const balance = req.body.balance;
    const open = req.body.open;
    const close = req.body.close;
    const creditLimit = req.body.creditLimit;
    const overdraftLimit = req.body.overdraftLimit;
    const insertSql="INSERT INTO ACCOUNT VALUES (?,?,?,?,?,?,?,?)";
    db.query(insertSql,[aid,brand,code,balance,open,close,creditLimit,overdraftLimit], (err,result) => {
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
router.put('/updateAccount', (req,res) => {
    const id = req.body.id;
    const balance = req.body.balance;
    console.log(balance);
    db.query('UPDATE ACCOUNT SET BALANCE = ? WHERE ACCOUNT_NO = ?',[balance,id],(err,result) =>{
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
router.delete('/deleteAccount/:id',(req,res)=>{
    const id = req.params.id;
    console.log(id);
    db.query('DELETE FROM ACCOUNT WHERE ACCOUNT_NO = ? ', id, (err,result)=>{
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