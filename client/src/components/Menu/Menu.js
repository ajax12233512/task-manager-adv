import React from 'react'
import './Menu.css'
import menuItems from './MenuItems'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import { useState } from 'react'
function Menu() {
  const [toggle, setToggle] = useState(false)
  const toggleMenu = () => {

  }
  return (
    <div className='menu-main container'>
      <h2>Sections <FontAwesomeIcon onClick={
        () => setToggle(!toggle)
      } icon={toggle ? solid('caret-down') : solid('caret-right')}/></h2>
      
      <div className='section-mobile-ctn container'>
        {menuItems.map(({name}) => {
          return <div className='menu-item'>{name}</div>
        })}
      </div>
      <div className='section-view-ctn container' style={
        toggle ? {display: 'block'} : {display: 'none'}
      }>
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