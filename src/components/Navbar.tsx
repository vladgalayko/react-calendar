import React, { FC } from 'react';
import {Layout, Row, Menu} from 'antd';
import {useNavigate,} from 'react-router-dom';
import { RouteNames } from '../router';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { AuthActionCreators } from '../store/reducers/auth/action-creators';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'react';

const Navbar:FC = () => {
    const dispatch: Dispatch<any> = useDispatch();
    const navigate = useNavigate();
    const {isAuth, user } = useTypedSelector(state => state.auth)
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
                            onClick={() => dispatch(AuthActionCreators.logout())} 
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