import { SHOW_ALL_TODOS, ADD_TODO  } from '../actionTypes';
import axios from 'axios';

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

export const addTodo = ({ id, todo, tipo, dataEntrega, finalizado }) => ({
  type: ADD_TODO,
  payload: { id, todo, tipo, dataEntrega, finalizado }
})

export const createTodo = (todo, tipo, dataEntrega) =>
  (dispatch) => {
  return axios.post(`${SERVER_URL}/todos/`,
    { todo, tipo, dataEntrega }, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(res => {
      const { id, todo, tipo, finalizado, dataEntrega } = res.data
      dispatch(addTodo({ id, todo, tipo, dataEntrega, finalizado }))
    })
    .catch(err => console.log(err))
}

