export function isLoggedIn(log, pass) {
    return {
        type: 'IS_LOGGED_IN',
        payload: {
          login: log,
          password: pass
        }
      }
}

export function logOut() {
    return {
        type: 'LOGOUT',
        payload: {
            
        }
    }
}