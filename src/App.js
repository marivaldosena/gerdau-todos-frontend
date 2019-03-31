import React, { Component } from 'react';
import { connect } from 'react-redux';
import './sass/App.scss';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import {
  fetchAllTodos,
  createTodo,
  deleteTodo
} from './store/actions/todos.actions';

class App extends Component {
  componentDidMount() {
    this.props.fetchAllTodos();
  }

  render() {
    const { todos, createTodo, deleteTodo } = this.props;
    
    return (
      <div className="App">
        <TodoForm createTodo={createTodo} />
        {todos.length ?
          <TodoList todos={todos} deleteTodo={deleteTodo} /> :
          <div className="App--sem-atividades">
            <p>Não há atividades registradas.</p>
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps, {
  fetchAllTodos, createTodo, deleteTodo
})(App);
