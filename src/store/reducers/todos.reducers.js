import { ADD_TODO, SHOW_ALL_TODOS, REMOVE_TODO } from '../actionTypes';

export default (state=[], action) => {
  switch (action.type) {
    case SHOW_ALL_TODOS:
      return [...action.todos]
    case ADD_TODO:
      const { id, todo, tipo, dataEntrega, finalizado } = action.todo
      return [...state, { id, todo, tipo, dataEntrega, finalizado }]
    case REMOVE_TODO:
      console.log(action.payload)
      return [...state.filter(item => item.id !== action.id)]
    default:
      return state
  }
}