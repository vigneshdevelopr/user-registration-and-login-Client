import React from 'react'
import Base from '../Components/Base'

function Restaurant() {
  const token = localStorage.getItem("userToken")

  //Fetching The Data:
const Allrestaurants = async()=>{
  try {
    const response = await fetch('https://user-registration-and-login.vercel.app/restaurant',{
    // const response = await fetch('http://localhost:5000/restaurant',{
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
    <div >
      <Base>
      <div className='text-white text-center '>
Restaurants
      </div>
      </Base>
    </div>
  )
}

export default Restaurant