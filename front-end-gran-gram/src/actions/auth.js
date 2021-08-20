import { AUTH } from '../constants/actionType'
import * as api from '../api'

export const login = (formData, history) => async (dispatch) => {
    try {
        history.push('/')
    } catch (error) {
        console.log(error)
    }
}


export const signup = (formData, history) => async (dispatch) => {
    try {
        history.push('/')
    } catch (error) {
        console.log(error)
    }
}


