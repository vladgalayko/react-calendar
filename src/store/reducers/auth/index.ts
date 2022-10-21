import { IUser } from './../../../models/IUser';
import { AuthState, AuthAction, AuthActionsEnum } from './types';

const initialState: AuthState = {
    isAuth: false,
    error: '',
    isLoading: false,
    user: {} as IUser
}

export default function authReducer(state = initialState, action: AuthAction) {
    switch (action.type) {
        case AuthActionsEnum.SET_AUTH:
            return {...state, isAuth: action.payload, isLoading: false}
        case AuthActionsEnum.SET_ERROR:
            return {...state, user: action.payload}
        case AuthActionsEnum.SET_USER:
            return {...state, error: action.payload, isLoading: false}
        case AuthActionsEnum.SET_IS_LOADING:
            return {...state, isLoading: action.payload }
        default:
            return state;
    }
}