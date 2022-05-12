import React from 'react'
import './Menu.css'
import menuItems from './MenuItems'
function Menu() {
  return (
    <div className='menu-main'>
      <h2>Sections</h2>
        {menuItems.map(({name, cName, path}) => {
            return (
                <button className={cName}>{name}</button>
            )
        })}
    </div>
  )
}

export default Menu