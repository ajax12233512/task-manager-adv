import React from 'react'
import './Menu.css'
import menuItems from './MenuItems'
function Menu() {
  return (
    <div className='menu-main'>
      <h2>Sections</h2>
        {menuItems.map(({name, cName, path, carets}) => {
            return (
                <button className={cName}>{carets ? carets[0] : null}{name}</button>
            )
        })}
    </div>
  )
}

export default Menu