import { ADD_TODO, SHOW_ALL_TODOS } from '../actionTypes';

export default (state=[], action) => {
  switch (action.type) {
    case SHOW_ALL_TODOS:
      return [...state, action.todos]
    case ADD_TODO:
      debugger
      return [...state, [...state.todos, action.payload ]]
    default:
      return state
  }
}