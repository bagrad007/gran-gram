import { FETCH_ALL, CREATE, DELETE, UPDATE } from '../constants/actionType'

import * as api from '../api'

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts()
        dispatch({ type: FETCH_ALL, payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id)
        dispatch({ type: DELETE, payload: id })
    } catch (error) {
        console.log(error)
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post)

        dispatch({ type: CREATE, payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const likePost = (id) => async (dispatch) => {
    try {
        const { data } = await api.likePost(id)
        dispatch({ type: UPDATE, payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const searchPosts = (tag) => async (dispatch) => {
    try {
        if (tag === "") {
            const { data } = await api.fetchPosts()
            dispatch({ type: FETCH_ALL, payload: data })
        } else {
            const { data } = await api.searchPosts(tag)
            dispatch({ type: FETCH_ALL, payload: data })
        }
    } catch (error) {
        console.log(error)
    }
}