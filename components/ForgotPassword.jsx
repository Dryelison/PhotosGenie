import React from 'react'
import "../components/ForgotPassword.css"

const ForgotPassword = () => {
    const handleInvalidity = (e) => {
        e.target.setCustomValidity ("Provide a valid e-mail address");
    };

    const handleInput = (e) => {
        e.target.setCustomValidity('')
      };




  return (
    <div className="main">
      <div className="forgot-password">
      <h1>Reset your Password</h1>
      <p>Enter your email address below to start the reset password process.</p>
      <form>
      <input type="email"
      name='email'
      required
      onInput={handleInput}
      onInvalid={handleInvalidity}
      placeholder='E-mail'/>
      <br />
      <button>Send Reset Link</button>
      <p>Remember your password? <a href='/register'>login</a></p>
      </form>
      </div>
    </div>
  )
}

export default ForgotPassword
