import React from "react";
import './SignUpForm.css';

import {Form, Input, Button} from 'antd';
import { DatePicker } from 'antd'
import useChange from "../../hooks/onChange";

const SignUpForm = () => {
    const inputName = useChange();
    const inputMail = useChange();
    const inputAvatar = useChange();
    const inputPassword = useChange();

    const onChange = (date, dateString) => {
        console.log(date, "date");
        date && console.log(date._d.getDate());
        console.log(dateString, "date String")
    };

    return(
        <Form onSubmit className='signUpForm'>
            <Form.Item>
                <Input
                    placeholder='Display Name'
                    size='large'
                    {...inputName}
                />
            </Form.Item>
            <Form.Item>
                <Input
                    placeholder='Avatar URL'
                    size='large'
                    {...inputAvatar}
                />
            </Form.Item>
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
                />
            </Form.Item>
            <Form.Item>
                <DatePicker size='large' style={{width: '100%'}} onChange={onChange} />
            </Form.Item>
            <Form.Item>
                <Button style={{width: '100%'}} type='primary' size='large'>Sign Up</Button>
            </Form.Item>
        </Form>
    )
};

export default SignUpForm;
