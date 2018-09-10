import axios from "axios";

let userLogin = {
    session: '',
    isLogin: false
}

axios.get('/api/getInfo')
             .then(res => {
                 if (res.data) {
                    userLogin.session = res.data;
                    userLogin.isLogin = true;
                 }
             })
             .catch(err => {
                 console.log(err);
             })

const loginReducer = (state = userLogin, action) => {
    switch (action.type) {
        case 'LOG_IN':
            return {...state, session: action.session, isLogin: true };
        case 'LOG_OUT':
            return {...state, session: '', isLogin: false };
        default:
            return state;
    }
}

export default loginReducer;