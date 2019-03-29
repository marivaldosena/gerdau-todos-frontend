import { ADD_TODO, SHOW_ALL_TODOS } from '../actionTypes';

export default (state=[], action) => {
  switch (action.type) {
    case SHOW_ALL_TODOS:
      return [...action.todos]
    case ADD_TODO:
      return [...state, action.payload]
    default:
      return state
  }
}