import React from 'react'
import './Form.css'
function Form() {
  return (
    <form id='form'>
        <h2 className='form-title'>Login</h2>
        <div className="form-group">
            <div className='form-group-item'>
                <label htmlFor="first-name">First Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter first name" />
            </div>
            <div className='form-group-item'>
                <label htmlFor="last-name">Last Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter lastname name" />
            </div>
            <div className='form-group-item'>
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="name" placeholder="Enter email" />
            </div>
            <div className='form-group-item'>
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="name" placeholder="Enter password" />
            </div>
            <div className='form-group-item'>
                <label htmlFor="confirm-password">Comfirm Password</label>
                <input type="password" className="form-control" id="name" placeholder="Confirm password" />
            </div>
        </div>
    </form>
  )
}

export default Form