import React, { FC } from 'react';
import {Layout, Row, Menu} from 'antd';
import {useNavigate,} from 'react-router-dom';
import { RoutNames } from '../router';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { AuthActionCreators } from '../store/reducers/auth/action-creators';
import { useActions } from '../hooks/useActions';

const Navbar:FC = () => {
    const navigate = useNavigate();
    const {isAuth, user } = useTypedSelector(state => state.auth);
    const {logout} = useActions();
    return (
        <Layout.Header>
            <Row justify='end'>
                {isAuth 
                    ?
                    <>
                    <div style={{color:'white'}}>
                      {user.username}
                    </div>
                    <Menu theme='dark' mode='horizontal' selectable={false}>   
                        <Menu.Item 
                            onClick={logout} 
                            key={1}>
                            Log out
                        </Menu.Item>
                    </Menu>
                    </>
                    :
                    <Menu theme='dark' mode='horizontal' selectable={false}>
                        <Menu.Item 
                            onClick={() => navigate(RoutNames.LOGIN)} 
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