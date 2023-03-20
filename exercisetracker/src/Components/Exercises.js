import React, { useEffect, useState } from 'react'
import { getData } from '../Service/api';


export default function Exercises() {

  const [UserData,setUserData] =useState([]);

  useEffect(()=>{
    getDetails();
  },[])

  const getDetails = async()=>{
    const result =await getData();
    setUserData(result.data);
  }

  return (
    <>
      <table class="table">
  <thead>
    <tr>
      
      <th scope="col">Name</th>
      <th scope="col">Description</th>
      <th scope="col">Duration</th>
    </tr>
  </thead>
  <tbody>
    {
      UserData.map(details =>(
        <tr>
          <td>{details.UserName}</td>
          <td>{details.Description}</td>
          <td>{details.Duration}</td>
        </tr>
      ))
    }    
    
  </tbody>
</table>
    </>
  )
}
