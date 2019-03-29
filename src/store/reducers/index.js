import { combineReducers } from 'redux';
import todosReducer from './todos.reducers';

const rootReducer = combineReducers({
  todosReducer
})

export default rootReducer;
