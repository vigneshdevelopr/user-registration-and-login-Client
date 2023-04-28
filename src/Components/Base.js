import React from 'react'
import ResponsiveNavBar from './ResponsiveNavbar'

function Base({title,children}) {
  return (
    <div className='main-component'>
<ResponsiveNavBar  />
<main>
    {children}
</main>
</div>
  )
}

export default Base