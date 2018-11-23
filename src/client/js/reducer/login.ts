import axios from "axios";

import { reducerWithInitialState } from "typescript-fsa-reducers";

import {
    loginAction,
    logoutAction
} from '../actions';

const authorInit = {
    session: '',
    isLogin: false
}

axios.get('/api/getInfo')
             .then(res => {
                 if (res.data) {
                    authorInit.session = res.data;
                    authorInit.isLogin = true;
                 }
             })
             .catch(err => {
                 console.log(err);
             })

const login = (state, author) => {
    return {...state, session: author.session, isLogin: true };
}

const logout = (state) => {
    return {...state, session: '', isLogin: false };
}

export default reducerWithInitialState(authorInit)
                .case(loginAction, login)
                .case(logoutAction, logout)