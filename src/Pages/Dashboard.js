import React from 'react'
import Base from '../Components/Base'
import pizza from "../assets/food-pizza.jpg"
import { useHistory } from 'react-router-dom'

function Dashboard() {
  const history = useHistory();
  return (
    <div className=' px-5 bg-black '>
          <Base>
    <div className=' '>
    <div className=''>
    <img className=' float-right max-w-xs rounded-lg ' src={pizza} alt="pizza" /> 

    </div>
    <div class=" text-white items-center py-40">
  <div className='flex justify-center items-center text-pink-400 font-bassy text-7xl '>
    <h1>Food Ordering Made Easy !</h1>

  </div>
  <button className='flex m-auto mt-20 bg-yellow-600 font-medium p-2 rounded-lg' onClick={()=>history.push("/restaurant")}>Order Now !</button>

  
</div>
    </div>
    </Base>
    </div>

  )
}

export default Dashboard
