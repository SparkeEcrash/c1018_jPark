import React from 'react'
import LoginForm from './LoginForm';
import './LoginBanner.css';

function LoginBanner() {
  return (
    <div className="login-banner d-flex align-items-center">
      <LoginForm/>
    </div> 
  )
}

export default LoginBanner
