import { AUTH, LOGOUT } from '../constants/actionType.js'

const authReducer = (state = { authData: null }, action) => {
    switch (action.type) {
        case AUTH:
            localStorage.setItem('profile', JSON.stringify({ ...action.data }))
            return { ...state, authData: action.data }
        default:
            return state
    }

}

export default authReducer