import React from 'react'
import axios from 'axios'
import {useQuery} from 'react-query';

export default function NewAbout() {

    const {data} = useQuery('unique-data',()=> {
       return axios.get("http://localhost:4000/PowerRangers");

    })
    console.log(data.data)
  return (
    <div>
        {data?.data.map(item=>{
                return <div key={item.id}>
                    <h4>{item.title}</h4>
                </div>
            })
        }
    </div>
  )
}
