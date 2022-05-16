import React from 'react'
import './Menu.css'
import menuItems from './MenuItems'
import { useState } from 'react'
function Menu() {
  const [toggle, setToggle] = useState(false)
  const toggleMenu = () => {

  }
  return (
    <div className='menu-main'>
      <h2>Sections</h2>
      <div className='section-mobile-ctn'>
        {menuItems.map(({name}) => {
          return <div className='menu-item'>{name}</div>
        })}
      </div>
      <div className='section-view-ctn'>
        {menuItems.map(({name, cName, path, carets}) => {
            return (
                <button className={cName}>{carets ? carets[0] : null}{name}</button>
            )
        })}
      </div>  
    </div>
  )
}

export default Menu