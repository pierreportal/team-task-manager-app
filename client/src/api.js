import axios from 'axios'

export const signup = (username, password) => {
  return axios.post('/auth/signup', { username, password }).then(response => response.data)
}

export const login = (username, password) => {
  return axios.post('/auth/login', { username, password }).then(response => response.data)
}