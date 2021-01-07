import React,{ useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';

function Organization()
{
  const [ORGANIZATION, setORGANIZATION] =useState([]);
    //use effect to get something
    
  useEffect(()=>{
  axios.get('http://localhost:3031/Organization/readOrganization').then((response)=>{
  console.log(response);
  setORGANIZATION(response.data); })
  })



  //usestate to send something
  const [O_ID, setO_ID] = useState(0);
  const [O_NAME, setO_NAME] = useState('');
  
  //post request sending whetever the reqeust on react to node js using axios 
  const onSubmitting = () =>{
    axios.post('http://localhost:3031/Organziation/insertOrganization',{
      id:O_ID,
      name:O_NAME,
    }).then( ()=> {
      alert('successful sent ');
    });
  }

  return (
    <div className="container">
      <h3 className='center blue-text'>Organization</h3>
      <div className="form">

        <label>O_ID</label>
        <input type="number" name="O_ID" onChange={(e)=>{
          setO_ID(e.target.value)
        }}/>

        <label>O_NAME</label>
        <input type="text" name="O_NAME" onChange={(e)=>{
          setO_NAME(e.target.value)
        }}/>
      <button onClick={onSubmitting}>Submit</button>
      <h4>Data from Database</h4>
      {ORGANIZATION.map((val)=>{
        return( 
          <div className="employee">
            <h6>OID:{val.O_ID} </h6>
            <h6>OName:{val.O_NAME} </h6>
          </div>
        );
        })
      }       

      </div>
    </div>
 );
    
}
export default Organization;