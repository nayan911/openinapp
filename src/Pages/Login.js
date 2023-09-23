import { Form, Input} from 'antd'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../styles/LoginStyle.css";
import { IconContext } from 'react-icons';
import * as FaIcons from 'react-icons/fc';
import * as FaIconss from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

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
              Sign In
            </div>
            <div className='form-sign'>
                <div className='formgoogle'>
                  <FaIcons.FcGoogle style={{fontSize: '20'}} /> Sign in with google
                </div>
                <div className='formapple'>
                  <AiIcons.AiFillApple style={{fontSize: '40'}} /> sign in with apple
                </div>
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
