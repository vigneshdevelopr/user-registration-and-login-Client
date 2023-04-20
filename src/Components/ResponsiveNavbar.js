import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../assets/logo.png';

function ResponsiveNavBar() {
  const token = localStorage.getItem('userToken');
  const history = useHistory();

  if (!token) {
    history.push('/');
  }

  useEffect(() => {}, []);

  return (
    <div className='flex flex-row bg-black '>
      <img onClick={()=>{
        window.location.reload();
      }} className='max-h-20 cursor-pointer' src={logo} alt='logo' />
      <nav className='text-yellow-200 font-semibold w-full flex justify-center'>
        <ul className='flex flex-wrap justify-center space-x-7 py-5'>
          <li className=''>
            <a href='https://google.com'>Home</a>
          </li>
          <li className=''>
            <a>About</a>
          </li>
          
        </ul>
      </nav>
      <div className='text-yellow-200 py-5 flex ml-auto gap-5'>
      <button >Signout</button>
      <button >Login as Cook</button>

      </div>

    </div>
  );
}

export default ResponsiveNavBar;
