import React from 'react'
import Menu from '../../components/Menu/Menu'
import Focus from '../../components/Focus/Focus'
import Calander from '../../components/Calandar/Calander'
import './Home.css'
function Home() {
  return (
    <div>
        <h1 className='header'>Task Manager</h1>
        <div className='home-ctn'>
          <Menu />
          <Focus />
          <Calander />
        </div>

    </div>
  )
}

export default Home