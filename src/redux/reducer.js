const initialState = {
    login: '123',
    password: 'ddd',
    auth: false
}

function reducer(state = initialState, action) {

    switch(action.type){
        case 'IS_LOGGED_IN':
            const { login, password } = state;
            if (login === action.payload.login && password === action.payload.password) {
                console.log('leha')
                return {
                    ...state, auth: true
                }
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