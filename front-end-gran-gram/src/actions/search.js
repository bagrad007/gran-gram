import { SEARCH } from '../constants/actionType'

import * as api from '../api'


export const search = (query) => async (dispatch) => {
    try {
        const { data } = await api.search(query)
        dispatch({ type: SEARCH, payload: data })
    } catch (error) {
        console.log(error)
    }
}