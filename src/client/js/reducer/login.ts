import { reducerWithInitialState } from "typescript-fsa-reducers";
import {loginAction, logoutAction} from '../actions';

const authorInit = {
    session: undefined,
    isLogin: false
}

const login = (state, session) => {
    return {...state, session, isLogin: true };
}

const logout = (state) => {
    return {...state, session: undefined, isLogin: false };
}

export default reducerWithInitialState(authorInit)
                .case(loginAction, login)
                .case(logoutAction, logout)