import React from 'react'

function PostMethod() {
    const posthandler = () => {  fetch("http://10.100.102.6:8000/Clinet-info",{
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
      
    return (
    <></>
  )
}

export default PostMethod