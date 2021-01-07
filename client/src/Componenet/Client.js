import React,{ useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';

function Client()
{
  //use effect to get something
  const [client, setclient] =useState([]);
  const readClient=()=>{
    axios.get('http://localhost:3031/Client/readClient').then((response)=>{
      console.log(response);
      setclient(response.data);
    })
  }
  //usestate to send something
  const [CID, setCID] = useState(0);
  const [EID, setEID] = useState(0);
  const [FNAME, setFNAME] = useState('');
  const [LNAME, setLNAME] = useState('');
  const [CITY, setCITY] = useState('');
  const [HOUSENO, setHOUSENO] = useState(0);
  const [EMAIL, setEMAIL] = useState('');
  const [CONTACT, setCONTACT] = useState('');
  const [AccountNO, setAccountNo] = useState(0);
  //post request sending whetever the reqeust on react to node js using axios 
  const onSubmitting = () =>{
    axios.post('http://localhost:3031/Client/insertClient',{
      cid:CID,
      eid:EID,
      fname:FNAME,
      lname:LNAME,
      city:CITY,
      houseno:HOUSENO,
      email:EMAIL,
      contact:CONTACT,
      accountno:AccountNO,

    }).then( ()=> {
      alert('successful sent ');
    });
  }
  return (
    <div className="container">
      <h4 className="centre blue-text">Client</h4>
      <div className="form">

        <label>CID</label>
        <input type="number" name="CID" onChange={(e)=>{
          setCID(e.target.value)
        }}/>

        <label>EID</label>
        <input type="number" name="EID" onChange={(e)=>{
         setEID(e.target.value)
        }}/> 

        <label>FNAME</label>
        <input type="text" name="FNAME" onChange={(e)=>{
          setFNAME(e.target.value)
        }}/> 
        <label>LNAME</label>
        <input type="text" name="LNAME" onChange={(e)=>{
          setLNAME(e.target.value)
        }}/>
        <label>CITY</label>
        <input type="text" name="CITY" onChange={(e)=>{
          setCITY(e.target.value)
        }}/>
        <label>HOUSENO</label>
        <input type="number" name="HOUSENO" onChange={(e)=>{
          setHOUSENO(e.target.value)
        }}/>        
        <label>EMAIL</label>
        <input type="text" name="EMAIL" onChange={(e)=>{
          setEMAIL(e.target.value)
        }}/>
        <label>CONTACT</label>
        <input type="text" name="CONTACT" onChange={(e)=>{
          setCONTACT(e.target.value)
        }}/>
        <label>ACCOUNT</label>
        <input type="number" name="AccountNO" onChange={(e)=>{
          setAccountNo(e.target.value)
        }}/>     
        <button onClick={onSubmitting}>Submit</button>
        <h6>Data from Database</h6>
        <button onClick={readClient}>Read Client </button>
        
        {client.map((val)=>{
        return( 
          <div className="employee blue-text ">
                <h6>CID:{val.C_ID} </h6>
                <h6>EID:{val.E_ID} </h6>
                <h6>FNAME:{val.FNAME} </h6>
                <h6>LNAME:{val.LNAME} </h6>
                <h6>CITY:{val.CITY} </h6>
                <h6>HOUSENO:{val.HOUSENO} </h6>
                <h6>CONTACT:{val.contact} </h6>
                <h6>AccountNO:{val.ACCOUNT_NO}</h6>
            </div> 
          );
      })
      } 
      </div>
    </div>
 );
    
}
export default Client;