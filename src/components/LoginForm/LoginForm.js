import React from "react";
import './LoginForm.css';

import {Input, Button, Form} from 'antd';
import {EyeInvisibleOutlined, EyeTwoTone} from '@ant-design/icons';

//hooks
import useChange from "../../hooks/onChange";

const LoginForm = () => {
    const inputMail = useChange();
    const inputPassword = useChange();

    return (
        <Form onSubmit className='loginForm'>
            <Form.Item>
                <Input
                    type='email'
                    placeholder='you@example.com'
                    size='large'
                    {...inputMail}
                />
            </Form.Item>
            <Form.Item>
                <Input.Password
                    placeholder='Password'
                    size='large'
                    {...inputPassword}
                    iconRender={visible => (visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>)}
                />
            </Form.Item>
            <Form.Item>
                <Button style={{width: '100%'}} type='primary' size='large'>Login</Button>
            </Form.Item>
        </Form>
    )
};

export default LoginForm;
