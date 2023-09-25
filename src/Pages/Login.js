import { Form, Input} from 'antd'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../styles/LoginStyle.css";
import { IconContext } from 'react-icons';
import * as FaIcons from 'react-icons/fc';
import * as FaIconss from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';


const Login = () => {

    const navigate = useNavigate();
    const onfinishHandler = async ()=>{
        navigate('/home');
    }

  return (
    <section className='register-form'>
        <div className='dashboard'>
            <div className='dashboard-logo'>
                Logo
            </div>
            <div className='dashboard-name'>
                Board.
            </div>
            <div className='dashboard-icons'>
              <div>
                <AiIcons.AiFillGithub style={{margin: 10}}/>
                <AiIcons.AiFillTwitterCircle style={{margin: 10}}/>
                <AiIcons.AiFillLinkedin style={{margin: 10}}/>
                <FaIconss.FaDiscord style={{margin: 10}}/>
              </div>
            </div>
        </div>
        <div className="formstyle">
          <div className='form-list'>
            <div className='form-text'>
              <span className='form-text-signin'>Sign In</span><br></br>
              <span className='form-text-signin-account'>Sign in to your account</span>
            </div>
            <div className='form-sign'>
            <GoogleOAuthProvider clientId="540670254248-n1d3qq95rh7t8li46njsu5m2hkkv5ndo.apps.googleusercontent.com">
                <GoogleLogin 
                  onSuccess={credentialResponse => {
                    navigate('/home')
                  }}
                  onError={() => {
                    console.log('Login Failed');
                  }}
                />
            </GoogleOAuthProvider>
                <button className='formapple'>
                  <AiIcons.AiFillApple style={{fontSize: '15'}} /> sign in with apple
                </button>
            </div>
            <div className='form-values'>
                <Form layout="vertical" onFinish={onfinishHandler}>
                    <Form.Item label="Email Address" name="email">
                        <Input type="email" required />
                    </Form.Item>
                    <Form.Item label="Password" name="password">
                        <Input type="password" required />
                    </Form.Item>
                    <Link to='/'>Forgot Password?</Link><br></br><br></br>
                    <button className="btn btn-primary" type="submit">Sign In</button>
                </Form>
            </div>
            Do not have an account? <Link>Register Here</Link>
          </div>
        </div>
    </section>
  )
}

export default Login
