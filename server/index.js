
const express = require('express');
const bp = require('body-parser');
const { urlencoded } = require('body-parser');
const cors = require('cors');
const org = require('./routes/Organization');
const emp=require('./routes/Employee');
const client=require('./routes/Client');
const account=require('./routes/Account')


//create express app 
const app=express();


app.get('/', (req, res) => {
          res.send("Hello World From Affan! ")
    });
app.use(cors());    
app.use(bp.urlencoded({extended: true}));
//allow  to grab info as json from front end
app.use(express.json());

//routes
app.use('/Organiaztion',org);
app.use('/Employee',emp);
app.use('/Client',client);
app.use('/Account',account);
//app starts on port 
app.listen('3031', () => {
    console.log('Server started on port 3031')
})
