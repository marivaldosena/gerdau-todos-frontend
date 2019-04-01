import {
  SHOW_ALL_TODOS,
  ADD_TODO,
  REMOVE_TODO,
  UPDATE_TODO,
} from '../actionTypes';
import axios from 'axios';

const SERVER_URL = process.env.SERVER_URL || "" //|| 'http://localhost:5000';

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
  todo: { id, todo, tipo, dataEntrega, finalizado }
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

export const removeTodo = (id) => {
  return {
    type: REMOVE_TODO,
    id
  }
}

export const deleteTodo = (id) => (dispatch) => {
  return axios.delete(`${SERVER_URL}/todos/${id}`)
  .then(_ => dispatch(removeTodo(id)))
  .catch(err => console.log(err))
}

export const updateTodo = ({ id, todo, tipo, finalizado, dataEntrega }) => {
  return {
    type: UPDATE_TODO,
    todo: { id, todo, tipo, finalizado, dataEntrega }
  }
}

export const doUpdateTodo = ({ id, todo, tipo, finalizado, dataEntrega }) =>
  (dispatch) => {
    return axios.put(`${SERVER_URL}/todos/${id}`, {
      todo, tipo, finalizado, dataEntrega }, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => dispatch(updateTodo({ id, todo, tipo, finalizado, dataEntrega } = res.data)))
      .catch(err => console.log(err))
}

