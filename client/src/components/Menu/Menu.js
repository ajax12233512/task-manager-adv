import React from 'react'
import './Menu.css'
import menuItems from './MenuItems'
function Menu() {
  return (
    <div className='menu-main'>
        {menuItems.map(({name, cName, path}) => {
            return (
                <div className='menu-item'>{name}</div>
            )
        })}
    </div>
  )
}

export default Menu