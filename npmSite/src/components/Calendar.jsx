import React, { useState,useRef } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "./calendar.css"
import dash from "../svg/dash.svg"
import Booked from "./Booked"
const date = new Date()


const times = ["12:00","13:00","14:00","15:00","16:00","17:00"]

const Calendarr = (props) => {
  let[first,setFirst] = useState("");
  let[sphone,setShoneNumber] = useState("")

  let[phone,setPhoneNumber] = useState("")
  let[name,setName] = useState("")
  let[email,setEmail] = useState("")
  const [value, onChange] = useState(new Date());

const posthandler = (e) => {  
  e.preventDefault();
  fetch("http://10.100.102.6:8000/Clinet-info",{
  method:`POST`,
  headers:{
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body:
    JSON.stringify({
      
      name:name,
      email:email,
      call_Date :[
        {
        date: `${value.getDate()} / ${value.getMonth() +1} / ${+ value.getFullYear()}`,
        time:first,
            phone_number:`${sphone}- ${phone}`

    }] 
    
    })
  
}).then((response => response.json()))
}












    const[flag,setFlag] = useState(!open);
    const[model,setModel] = useState(!open);
    
    
    
    const toggler = () => {
        setFlag((current) => !current)
    }

    const modelToggler = (e) => {
        setModel((current) => !current)
        setFirst(e.target.innerText)
    e.preventDefault()
    }
  
    
  



    return (
        <div id="cal" className='z-[-10] '>
      <div id='cd' className='flex justify-center mt-[5rem] relative'>
        <div className='a absolute top-[-40px] text-[2rem] cursor-pointer' onClick={props.toggler}>X</div>
        <Calendar  className="w-[60vw] " onChange={onChange} onClickDay={toggler} value={value} calendarType={"Hebrew"} minDate={date}/>
      
      
      </div>

      <div className='flex justify-center mt-[3rem] relative'> 
      <div className='flex flex-col items-center bg-white w-[30vw] '>
      
      {flag ? 
        times.map(time => {
            return <div className='cursor-pointer text-center w-[100%]' >  <p className='py-2 text-[1.2rem] hover:bg-[blue]' onClick={modelToggler}>{time}</p></div>
        }
        )
      
      :null
       
    }
    {model? 
      
      <div className='model '>
        
            <i className='text-white text-[2rem] float-right pr-5' onClick={modelToggler}>X</i>
                
                <p className='text-white text-center text-[2rem]'>Your about to scedule a call in  {first}</p>
                <form action="" className=' text-[#eb5858]  mt-5' onSubmit={posthandler}>
                    <div className='pr-5 flex justify-center'>
                        <div className='mr-5'>
                            <label className='pr-3 text-[1.2rem]'  htmlFor="name">Your name:</label>
                            <input type="text"  onChange={(e) => {setName(e.target.value)}} required/>
                        </div>
                        <div>   
                            <label className='pr-3 text-[1.2rem]' htmlFor="email">Your Email:</label>
                            <input type="email" onChange={(e)=> {setEmail(e.target.value)}} required/>
                        </div>   
                    </div>
                   
                    <div className='justify-center flex mt-[3rem] items-center' >
                        <label htmlFor="phone_numer_s">Phone Number:</label>
                        <input type="text" className='w-[3rem]'  onChange={e => setShoneNumber(e.target.value)}/>
                        <label htmlFor="phone_numer" className='px-1'><img  src={dash} alt="" /></label>
                        <input type="tel" className='w-[10rem]' onChange={e => setPhoneNumber(e.target.value)}/>
                    </div>
                    <div className='flex justify-center mt-[10rem] h-max'>
                        <button className='mx-5 border-2 border-black px-[2rem] py-2'>Submit</button>
                       <button className='border-2 border-black px-[2rem] py-2' onClick={modelToggler}>Cancel</button>
                    </div>
                </form>

        </div>


      
      :null}
     </div>
      </div>
    
      
      </div>
      
    );
  }
    
    
    




export default Calendarr