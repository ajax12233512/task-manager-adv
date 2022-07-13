import React from 'react'
import Menu from '../../components/Menu/Menu'
import Focus from '../../components/Focus/Focus'
import Calander from '../../components/Calandar/Calander'
import NewNote from '../../components/NewNote/NewNote'
import './Home.css'
const style = {
  backgroundColor: '#f5f5f5',
}
function Home() {
  return (
    <div>
        <h1 className='header'>Task Manager</h1>
        <div className='container'>
          <div className='row'>
            <NewNote />
            <Menu />
          </div>
          <div className='row container'>
            <div className='container col-lg-6 col-md-12'><Focus /></div>
            <div className='container col-lg-6 col-md-12'><Calander /></div>
          </div>

        </div>

    </div>
  )
}

export default Home