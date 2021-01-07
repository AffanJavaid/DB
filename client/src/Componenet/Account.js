import '../App.css';
import React,{ useEffect, useState } from 'react';
import axios from 'axios';
function Employee(){

    const [Account, setAccount] =useState([]);
    
    //use effect to get something
    const getAccount = () => {
      axios.get('http://localhost:3031/Account/readAccount').then((response)=>{
      console.log(response);
      setAccount(response.data); })
    }

    //update employee
    const [newBalance, setnewBalance]=useState(0);
    const updateAccount = (id) =>{
      axios.put('http://localhost:3031/Account/updateAccount',{
      id:id,  
      balance:newBalance,
      }).then( () => {
        console.log("Updated");
      })
    }
  //delete Employee
  const deleteAccount= (id)=>{
    axios.delete(`http://localhost:3031/Account/deleteAccount/${id}`,{
    }).then((response)=>{
      alert(response);
      console.log(response);
    })
  }
    const [AccountNo, setAccountNo] = useState(0);
    const [BRAND, setBRAND] = useState('');
    const [CODE, setCODE] = useState(0);
    const [BALANCE, setBALANCE] = useState(0);
    const [OPEN, setOPEN] = useState('');
    const [CLOSE, setCLOSE] = useState('');
    const [LIMIT, setLIMIT] = useState(0);
    const [OVERDRAFT, setOVERDRAFT] = useState(0);
    
    //inserting into database 
    const insertAccount = () =>{
        {}
        axios.post('http://localhost:3031/Account/insertAccount',{
          aid:AccountNo,
          brand:BRAND,
          code:CODE,
          balance:BALANCE,
          open:OPEN,
          close:CLOSE,
          creditLimit:LIMIT,
          overdraftLimit:OVERDRAFT,

    
        }).then( ()=> {
           console.log("Succesfully sent to DB")
        });
      };

    return(
    <div className="container">
    <h4 className="center blue-text">Account</h4>
      <div className="form">

        <label>AccountNo</label>
        <input type="number" name="accountNo" onChange={(e)=>{
          setAccountNo(e.target.value)
        }}/>

        <label>BRAND</label>
        <input type="text" name="brand" onChange={(e)=>{
         setBRAND(e.target.value)
        }}/> 

        <label>CODE</label>
        <input type="number" name="code" onChange={(e)=>{
          setCODE(e.target.value)
        }}/> 
        <label>BALANCE</label>
        <input type="number" name="balance" onChange={(e)=>{
          setBALANCE(e.target.value)
        }}/>
        <label>OpeningDate</label>
        <input type="date" name="open" onChange={(e)=>{
          setOPEN(e.target.value)
        }}/>
        <label>ClosingDate</label>
        <input type="date" name="close" onChange={(e)=>{
          setCLOSE(e.target.value)
        }}/>
        <label>creditLimit</label>
        <input type="number" name="creditLimit" onChange={(e)=>{
          setLIMIT(e.target.value)
        }}/>
        <label>OVERDRAFT_LIMIT</label>
        <input type="number" name="overdraftLimit" onChange={(e)=>{
          setOVERDRAFT(e.target.value)
        }}/>         
        <button onClick={insertAccount}>Insert</button>
        <h6 className='center blue-text'>Data from Database</h6>
        <button onClick={getAccount}>Read </button>
      
       {
        Account.map((val)=>{
        return(         
            <div className="employee ">
              <div>
                <h6>ACCOUNT_NO:{val.ACCOUNT_NO} </h6>
                <h6>BRAND:{val.BRAND} </h6>
                <h6>CODE:{val.CODE} </h6>
                <h6>BALANCE:{val.BALANCE} </h6>
                <h6>CREDIT_LIMIT:{val.CREDIT_LIMIT} </h6>
                <h6>OVERDRAFT_LIMIT:{val.OVERDRAFT_LIMIT} </h6>
              </div>
              <div>
                  <input type="number" placeholder="newbalance"  onChange={(e)=>{
                    setnewBalance(e.target.value);
                  }}/> 
                  <button onClick={()=>{updateAccount(val.ACCOUNT_NO);}}>Update</button>  
                  <button onClick={()=>{deleteAccount(val.ACCOUNT_NO)}}>Delete</button>
              </div>
            </div> 
        );
        })
       }      
      </div>
      <div></div>
    </div>
    );
}

export default Employee;