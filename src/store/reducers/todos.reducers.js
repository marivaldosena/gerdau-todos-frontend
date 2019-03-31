import {
  ADD_TODO,
  SHOW_ALL_TODOS,
  REMOVE_TODO,
  UPDATE_TODO
} from '../actionTypes';

export default (state=[], action) => {
  switch (action.type) {
    case SHOW_ALL_TODOS:
      return [...action.todos]
    case ADD_TODO:
      const { id, todo, tipo, dataEntrega, finalizado } = action.todo
      return [...state, { id, todo, tipo, dataEntrega, finalizado }]
    case REMOVE_TODO:
      return [...state.filter(item => item.id !== action.id)]
    case UPDATE_TODO:
      const index = state.findIndex(item => item.id === action.todo.id)
      const newState = state
      newState.splice(index, 1,
        ...state.filter(item => item.id === action.todo.id)
        .map(item => item = ({ ...action.todo })))
      return [
        ...newState
      ]
    default:
      return state
  }
}