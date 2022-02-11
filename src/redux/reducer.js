const initialState = {
    login: '123',
    password: 'ddd',
    auth: localStorage.getItem('auth')
}

function reducer(state = initialState, action) {

    switch(action.type){
        case 'IS_LOGGED_IN':
            const { login, password } = state;
            if (login === action.payload.login && password === action.payload.password) {
                state = {
                    ...state, auth: true
                }
                return state
             } else return {
                 ...state, auth: false
             };
        case 'LOGOUT': 
            return {
                ...state, auth: false
            }
        default: return state;
    }  
}

export default reducer;