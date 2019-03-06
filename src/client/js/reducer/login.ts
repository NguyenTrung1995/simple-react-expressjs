import { reducerWithInitialState } from "typescript-fsa-reducers";
import {loginAction, logoutAction, loginFailedAction} from '../actions';

const authorInit = {
    session: undefined,
    isLogin: false,
    isFailed: false
}

const loginFailed = (state) => {
    return {...state, isFailed: true};
}

const login = (state, session) => {
    return {...state, session, isLogin: true, isFailed: false };
}

const logout = (state) => {
    return {...state, session: undefined, isLogin: false };
}

export default reducerWithInitialState(authorInit)
                .case(loginAction, login)
                .case(logoutAction, logout)
                .case(loginFailedAction, loginFailed)