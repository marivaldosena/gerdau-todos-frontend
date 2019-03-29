import { SHOW_ALL_TODOS, ADD_TODO  } from '../actionTypes';
import axios from 'axios';
import { process } from 'ipaddr.js';

const SERVER_URL = process.env.SERVER_URL || 'http://localhost:5000';

export const loadAllTodos = (todos) => ({
  type: SHOW_ALL_TODOS,
  todos
})

export const fetchAllTodos = () => (dispatch) => {
  return axios.get(`${SERVER_URL}/todos`)
    .then(res => dispatch(loadAllTodos(res.data)))
    .catch(err => console.log(err))
}

export const addTodo = (todo, tipoId, dataConclusao) => ({
  type: ADD_TODO,
  payload: { todo, tipoId, dataConclusao }
})

export const createTodo = (todo, tipoId, dataConclusao ) =>
  (dispatch) => {
  
  return axios.post(`${SERVER_URL}/todos/`,
    { todo, tipoId, dataConclusao })
    .then(res => dispatch(addTodo(res.data)))
}

