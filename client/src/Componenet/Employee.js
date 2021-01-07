import '../App.css';
import React,{ useEffect, useState } from 'react';
import axios from 'axios';
function Employee(){

    const [Emp, setEmp] =useState([]);
    //use effect to get something
    const getEmployee = () => {
      axios.get('http://localhost:3031/Employee/readEmployee').then((response)=>{
      console.log(response);
      setEmp(response.data); })
    }

    //update employee
    const [newcontact, setnewcontact]=useState(0);
    const updateEmployee = (id) =>{
      axios.put('http://localhost:3031/Employee/updateEmployee',{
      id:id,  
      contact:newcontact,
      }).then( () => {
        console.log("Updated");
      })
    }
  //delete Employee
  const deleteEmployee= (id)=>{
    axios.delete(`http://localhost:3031/Employee/deleteEmployee/${id}`,{
    }).then(()=>{
      console.log('deleted ');
    })
  }
    const [EID, setEID] = useState(0);
    const [OID, setOID] = useState(0);
    const [FNAME, setFNAME] = useState('');
    const [LNAME, setLNAME] = useState('');
    const [CITY, setCITY] = useState('');
    const [HOUSENO, setHOUSENO] = useState(0);
    const [EMAIL, setEMAIL] = useState('');
    const [CONTACT, setCONTACT] = useState(0);
    
    //inserting into database 
    const InsertEmp = () =>{
        {}
        axios.post('http://localhost:3031/Employee/insertEmployee',{
          eid:EID,
          oid:OID,
          fname:FNAME,
          lname:LNAME,
          city:CITY,
          houseno:HOUSENO,
          email:EMAIL,
          contact:CONTACT,
    
        }).then( ()=> {
           console.log("Succesfully sent to DB")
        });
      };

    return(
    <div className="container">
    <h4 className="center blue-text">Employee</h4>
      <div className="form">

        <label>EID</label>
        <input type="number" name="CID" onChange={(e)=>{
          setEID(e.target.value)
        }}/>

        <label>OID</label>
        <input type="number" name="EID" onChange={(e)=>{
         setOID(e.target.value)
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
        <input type="number" name="CONTACT" onChange={(e)=>{
          setCONTACT(e.target.value)
        }}/>    
        <button onClick={InsertEmp}>Insert</button>
        <h6 className='center blue-text'>Data from Database</h6>
        <button onClick={getEmployee}>Read Employee</button>
      
       {
        Emp.map((val)=>{
        return(         
            <div className="employee ">
              <div>
                <h6>EID:{val.e_id} </h6>
                <h6>OID:{val.O_ID} </h6>
                <h6>FNAME:{val.FNAME} </h6>
                <h6>LNAME:{val.LNAME} </h6>
                <h6>CITY:{val.CITY} </h6>
                <h6>HOUSENO:{val.HOUSENO} </h6>
                <h6>CONTACT:{val.CONTACT} </h6>
              </div>
              <div>
                  <input type="number" name="newcontact"  onChange={(e)=>{
                    setnewcontact(e.target.value);
                  }}/> 
                  <button onClick={()=>{updateEmployee(val.e_id);}}>Update</button>  
                  <button onClick={()=>{deleteEmployee(val.e_id)}}>Delete</button>
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