import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5000' })




export const fetchPosts = () => API.get('/posts')
export const createPost = (newPost) => API.post('/posts', newPost)
export const likePost = (id) => API.patch(`/posts/${id}/likePost`)
export const deletePost = (id) => API.delete(`'/posts/${id}`)

export const login = (formData) => API.post('/users/login', formData)
export const signup = (formData) => API.post('/users/signup', formData)