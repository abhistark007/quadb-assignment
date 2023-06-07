import React, { useEffect, useState } from 'react'
import './SummaryPage.css'
import { useLocation } from 'react-router-dom'
import TextField from '@mui/material/TextField';
import { FormControl, InputLabel, MenuItem, Select} from '@mui/material';

function SummaryPage() {
    const location = useLocation();
    const { name,image,summary } = location.state;
    const [userName,setUserName]=useState("");
    const [gender,setGender]=useState("Male");
    const [ticketsCount,setTicketsCount]=useState(1);

    const [show,setShow]=useState(false);

    useEffect(()=>{
        const items = JSON.parse(localStorage.getItem('user'));
        if(!items)return;
        const {userName,gender,ticketsCount}=items;
        setUserName(userName??"");
        setTicketsCount(ticketsCount??1);
        setGender(gender??"Male");
    },[])


    const handlePay=()=>{
        const obj={userName,gender,ticketsCount,name};
        localStorage.setItem("user",JSON.stringify(obj));
    }
    

  return (
    <div className='summarypage'>
        <img src={image} alt={name} />
        <h1>{name}</h1>
        <p dangerouslySetInnerHTML={{__html: summary}}></p>
        <button onClick={()=>setShow(!show)}>Book Tickets Now !</button>
        {
          show?(<div className="ticketform">
          <TextField id="filled-basic" label="Movie Name" variant="filled" InputProps={{
              readOnly: true,
            }} value={name} style={{background:"white"}}/>
  
          <TextField id="filled-basic" label="Your Name" variant="filled" value={userName} onChange={(e)=>setUserName(e.target.value)} style={{background:"white"}}/>
  
          <FormControl variant="filled" style={{  background:"white"}}>
          <InputLabel id="demo-simple-select-label">Gender</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={gender}
            label="Age"
            onChange={(e)=>setGender(e.target.value)}
          >
            <MenuItem value={"Male"}>Male</MenuItem>
            <MenuItem value={"Female"}>Female</MenuItem>
            
          </Select>
          </FormControl>
          
          <TextField type='number' id="filled-basic" label="Number of seats" variant="filled" value={ticketsCount} onChange={(e)=>{
              if(e.target.value>=1){
                  setTicketsCount(e.target.value)
              }else{
                  setTicketsCount(1);
              }
          }} style={{background:"white"}}/>
          
          <button onClick={handlePay}>Proceed to pay !</button>
  
          
          </div>):(<></>)
        }
    </div>
  )
}

export default SummaryPage