import React from 'react'
import '../components/signUp.css'

const SignUp = () => {
  return (
    <div id='sign-main'>
      <p>Join us!</p>
      <h1>Create your account and start now</h1>
      <div className="form-sign">
        <form>
          <label>First Name</label>
          <input type="text"
          name='name'
          placeholder='John'
          required/>
          <label>Last Name</label>
          <input type="text"
          name="name"
          placeholder='Doe'
          required />
          <label>E-mail</label>
          <input type="email"
          name="email"
          placeholder='john@doe.com'
          required />
          <label>Password</label>
          <input type="password"
          name="password"
          placeholder='min 6 caracters'
          required />
          <button>Create Account</button>
        </form>
      </div>
      <div className="footer">
        <p>Have you Account? <a href='/register'>Log in</a></p>
      </div>
    </div>
  )
}

export default SignUp
