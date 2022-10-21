import { AppDispatch } from './../../index';
import { IUser } from './../../../models/IUser';
import { AuthActionsEnum, SetUserAction, SetAuthAction, SetIsLoadinAction, SetErrorAction } from './types';
import axios from 'axios'

export const AuthActionCreators = {
    setUser: (user: IUser):SetUserAction => ({type: AuthActionsEnum.SET_USER, payload: user}),
    setIsAuth: (auth: boolean):SetAuthAction => ({type: AuthActionsEnum.SET_AUTH, payload: auth}),
    setIsLoading: (payload: boolean):SetIsLoadinAction => ({type: AuthActionsEnum.SET_IS_LOADING, payload}),
    setError: (payload: string):SetErrorAction => ({type: AuthActionsEnum.SET_ERROR, payload}),
    login:  (username: string, password: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AuthActionCreators.setIsLoading(true));
            setTimeout( async () => {
                const responce = await axios.get<IUser[]>('./users.json')
                const mockUser = responce.data.find(user => user.username === username && user.password === password)
                if (mockUser) {
                    localStorage.setItem('auth', 'true');
                    localStorage.setItem('username', mockUser.username);
                    dispatch(AuthActionCreators.setIsAuth(true))
                    dispatch(AuthActionCreators.setUser(mockUser));
                } else {
                    dispatch(AuthActionCreators.setError('Incorrect login or password'))
                }
                dispatch(AuthActionCreators.setIsLoading(false))
            }, 1000)
            
        } catch(e) {
            dispatch(AuthActionCreators.setError('Error with Login'))
        }
    },
    logout: () => async (dispatch: AppDispatch) => {
            localStorage.removeItem('auth')
            localStorage.removeItem('username')
            dispatch(AuthActionCreators.setUser({} as IUser));
            dispatch(AuthActionCreators.setIsAuth(false))
    }
}