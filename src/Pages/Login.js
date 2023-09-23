import { Form, Input} from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate();
    const onfinishHandler = async ()=>{
        navigate('/home');
    }

  return (
    <div>
      <Form layout="vertical" onFinish={onfinishHandler} className='register-form'>
                <h3 className="text-center">Login From</h3>
                    <Form.Item label="Email" name="email">
                        <Input type="email" required />
                    </Form.Item>
                    <Form.Item label="Password" name="password">
                        <Input type="password" required />
                    </Form.Item>
                    {/* <Link to='/' className='m-2'>Not a user clik here</Link> */}
                <button className="btn btn-primary" type="submit">Login</button>
            </Form>
    </div>
  )
}

export default Login
