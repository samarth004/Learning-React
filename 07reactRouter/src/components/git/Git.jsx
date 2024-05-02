import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
export function Git(props) {

  const data = useLoaderData()
  //  const [data,setData]= useState([])
  //    useEffect(() => {
  //       fetch('https://api.github.com/users/samarth004')
  //       .then(res => res.json())
  //       .then(data => {
  //           console.log(data);
  //           setData(data)
  //       })
  //    })
    return (
        <>
          <div className=' text-center m-4 text-white bg-gray-700
           p-4 text-3xl'>
            Following : {data.following}
          </div>  
        </>
    )
}

export const gitInfoLoader = async() => {
  const res = await fetch('https://api.github.com/users/samarth004')
  return res.json()

}
