import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../assets/logo.png';
import Button from './Button';
import menu from '../assets/icons8-menu.svg'
import closeMenu from '../assets/icons8-closemenu.svg'


function ResponsiveNavBar() {
  const token = localStorage.getItem('userToken');
  const history = useHistory();

  if (!token) {
    history.push('/');
  }

  useEffect(() => {}, []);


  const reload= () =>{
// window.location.reload();
history.push('/dashboard');
}

  let Lists = [
    {name:'Home', link:'https://google.com/'},
    {name:'About', link:'/'},
    {name:'Contact', link:'/'},
    {name:'Cart', link:'/'},
  ]
const[open, setOpen] = useState(false);

  return (
    // <div className='flex flex-row bg-black '>
    //   <img onClick={()=>{
    //     window.location.reload();
    //   }} className='max-h-20 cursor-pointer' src={logo} alt='logo' />
    //   <nav className='text-yellow-200 font-semibold w-full flex justify-center'>
    //     <ul className='flex flex-wrap justify-center space-x-7 py-5'>
    //       <li className=''>
    //         <a href='https://google.com'>Home</a>
    //       </li>
    //       <li className=''>
    //         <a>About</a>
    //       </li>
          
    //     </ul>
    //   </nav>
    //   <div className='text-yellow-200 py-5 flex ml-auto gap-5'>
    //   <button >Signout</button>
    //   <button >Login as Cook</button>

    //   </div>

    // </div>
    <div className='fixed shadow-md w-full top-0 left-0 '>
      <div className='md:flex items-center justify-between bg-black py-2 md:px-5 px-3'>
<div onClick={reload} className='font-bold cursor-pointer text-xl flex text-yellow-400 items-center font-bassy'>
<h1>FoodyVille</h1>

</div>
<div onClick={()=>{setOpen(!open)}} className=' duration-150 w-5 text-3xl absolute cursor-pointer  right-8 top-3 md:hidden'>
 
 {open ? <img src={closeMenu} alt='CloseMenu' /> :  <img src={menu} alt='menu icon' /> }
  
</div>

{/* lists */}
<ul className={`md:flex md:items-center md:pb-0 pb-7 absolute md:static bg-black left-0 w-full transition-all  duration-500 md:pl-0 pl-7 md:w-auto md:z-auto z-[-1] ${open ? 'top-20 opacity-100': "top-[-490px]"} md:opacity-100 opacity-0`}>
  {
    Lists.map((links)=>(
      <li key={links.name} className='md:ml-9 text-xl md:my-0 my-7'>
        <a href={links.link} target='_blank' className='text-gray-50 hover:text-gray-500  duration-500'>{links.name}</a>
      </li>
    ))
  }
  <Button>Logout</Button>
</ul>


      </div>

    </div>
  );
}

export default ResponsiveNavBar;
