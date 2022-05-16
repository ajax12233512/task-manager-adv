import React from 'react'
import './Form.css'
import { useState } from 'react'
function Form() {

  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [confirmPassword, setConfirmPassword] = useState()
  
  const user = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
    confirmPassword: confirmPassword
}

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(firstName, lastName, email, password, confirmPassword)
    fetch('/createUser', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => console.log(data))
  }

  return (
    <form onSubmit={e => handleSubmit(e)} id='form'>
        <h2 className='form-title'>Login</h2>
        <div className="form-group">
            <div className='form-group-item'>
                <label htmlFor="first-name">First Name</label>
                <input onKeyUp={e => setFirstName(e.target.value)} type="text" className="form-control" id="name" placeholder="Enter first name" />
            </div>
            <div className='form-group-item'>
                <label htmlFor="last-name">Last Name</label>
                <input onKeyUp={e => setLastName(e.target.value)} type="text" className="form-control" id="name" placeholder="Enter lastname name" />
            </div>
            <div className='form-group-item'>
                <label htmlFor="email">Email</label>
                <input onKeyUp={e => setEmail(e.target.value)} type="email" className="form-control" id="name" placeholder="Enter email" />
            </div>
            <div className='form-group-item'>
                <label htmlFor="password">Password</label>
                <input onKeyUp={e => setPassword(e.target.value)} type="password" className="form-control" id="name" placeholder="Enter password" />
            </div>
            <div className='form-group-item'>
                <label htmlFor="confirm-password">Comfirm Password</label>
                <input onKeyUp={e => setConfirmPassword(e.target.value)} type="password" className="form-control" id="name" placeholder="Confirm password" />
            </div>
        </div>
        <button type="submit" className="submit-btn">Submit</button>
    </form>
  )
}

export default Form