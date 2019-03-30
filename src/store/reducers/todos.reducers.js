import { ADD_TODO, SHOW_ALL_TODOS } from '../actionTypes';

export default (state=[], action) => {
  switch (action.type) {
    case SHOW_ALL_TODOS:
      return [...action.todos]
    case ADD_TODO:
      const { id, todo, tipo, dataEntrega, finalizado } = action.payload
      return [...state, { id, todo, tipo, dataEntrega, finalizado }]
    default:
      return state
  }
}