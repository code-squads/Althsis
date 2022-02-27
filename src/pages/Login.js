import React from 'react'
import { useAuth } from '../context/authorisation';

const Login = () => {
  const auth = useAuth();

  return (
    <div>Login</div>
    
  )
}

export default Login