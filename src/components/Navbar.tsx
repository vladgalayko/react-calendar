import React, { FC } from 'react';
import {Layout, Row, Menu} from 'antd';
import {useNavigate,} from 'react-router-dom';
import { RouteNames } from '../router';
import { useTypedSelector } from '../hooks/useTypedSelector';

const Navbar:FC = () => {
    const navigate = useNavigate();
    const {isAuth} = useTypedSelector(state => state.auth)
    return (
        <Layout.Header>
            <Row justify='end'>
                {isAuth 
                    ?
                    <>
                    <div style={{color:'white'}}>
                     Vlad
                    </div>
                    <Menu theme='dark' mode='horizontal' selectable={false}>   
                        <Menu.Item 
                            onClick={() => console.log('log out')} 
                            key={2}>
                            Log out
                        </Menu.Item>
                    </Menu>
                    </>
                    :
                    <Menu theme='dark' mode='horizontal' selectable={false}>
                        <Menu.Item 
                            onClick={() => navigate(RouteNames.LOGIN)} 
                            key={1}>
                            Login
                        </Menu.Item>
                    </Menu>
                    }
                
            </Row>
        </Layout.Header>
    );
};

export default Navbar;