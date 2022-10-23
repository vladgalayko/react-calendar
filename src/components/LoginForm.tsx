import React, { FC, useState } from 'react';
import { Form, Input, Button } from 'antd';
import { rules } from '../utils/rules';
import { useDispatch } from 'react-redux';
import { AuthActionCreators } from '../store/reducers/auth/action-creators';
import { Dispatch } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

const LoginForm:FC = () => {
    const dispatch: Dispatch<any> = useDispatch();
    const {error, isLoading} = useTypedSelector(state => state.auth);
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const {login} = useActions();

    const submit = () => {
        login(username, password)
    }

    return (
        <Form
        onFinish={submit}
        >
            {error && <div style={{color: 'red'}}>
                {error}
            </div>}
            <Form.Item
                label="Username"
                name="username"
                rules={[rules.required('Please input your username!')]}>
                <Input 
                    value={username} 
                    onChange={e => setUserName(e.target.value)}/>
            </Form.Item>
            <Form.Item
                label="Password"
                name="password"
                rules={[rules.required('Please input your password!')]}>
                <Input.Password value={password} onChange={e => setPassword(e.target.value)}/>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit" loading={isLoading}>
                    Login
                </Button>
            </Form.Item>
        </Form>
    );
};

export default LoginForm;