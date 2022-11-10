import React from 'react'
import './login.css'

const Login = () => {
  return (
    <div className='form'>
        <div className="formGroups">
        <div className="formLeft">
          <h4 className="formsSubTitle">Connect with friends and world around you on Kurmangali</h4>
          <h1 className='formsTitle'>Kurmangali</h1>
        </div>
        <div className="formRignt">
          <form action="">
            <div className="formGroup">
              <input type="text" placeholder='E-mail or Phone Number' />
            </div>
            <div className="formGroup">
              <input type="password" placeholder='Password' />
            </div>
            <div className="formGroup form-btnLogin">
              <button>Login</button>
            </div>
            <div className="formGroup form-btnRegister">
              <button>Create New Account</button>
            </div>
          </form>
        </div>
        </div>
    </div>
  )
}

export default Login