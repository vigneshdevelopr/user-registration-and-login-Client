import React from 'react'
import { useHistory } from 'react-router-dom';

function Button(props) {
    const history = useHistory();
const logout = () =>{
    localStorage.clear();
    history.push('/')
}



  return (
    <button onClick={logout} className='rounded py-2 px-2 md:ml-7 hover:bg-yellow-300 bg-yellow-200 duration-500'>{props.children}</button>
  )
}

export default Button