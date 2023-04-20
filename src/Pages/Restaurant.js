import React from 'react'
import Base from '../Components/Base'

function Restaurant() {
  const token = localStorage.getItem("userToken")

  //Fetching The Data:
const Allrestaurants = async()=>{
  try {
    const response = await fetch('https://user-registration-and-login.vercel.app/restaurant',{
      method:"GET",
      body: JSON.stringify(),
      headers:{
        "content-type": "application/json",
        "x-auth-token": token
      }
    
  })

  const data = await response.json();
  console.log(data);
  } catch (error) {
    console.log(error);
  }
}
Allrestaurants();


  




  return (
    <div className=' px-5 bg-black text-white '>
      <Base>
      <h2>Hey</h2>
      </Base>
    </div>
  )
}

export default Restaurant