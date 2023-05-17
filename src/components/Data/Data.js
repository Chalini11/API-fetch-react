import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function Data() 
{

  const [data,setData] = useState([]);
  const request = async ()=>{
    await axios.get("http://localhost:4000/PowerRangers")
    .then(
        (response) =>
        {
            console.log(response.data)
            setData(response.data)
        })
    

    
}

useEffect(()=>{
    request()  },[])

return(
    <div>
        <h1>Data</h1>
        {
            data.map((each)=>(
                <div>{each.title}</div>

            ))
            }

    </div>
  )
}
