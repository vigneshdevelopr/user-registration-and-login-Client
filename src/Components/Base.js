import React from 'react'
import ResponsiveNavBar from './ResponsiveNavbar'

function Base({title,description,children}) {
  return (
    <div className='main-component'>
<ResponsiveNavBar />
<main>
    {description}
    {children}
</main>
</div>
  )
}

export default Base