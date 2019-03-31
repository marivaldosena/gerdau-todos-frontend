import React, { Component } from 'react';
import { connect } from 'react-redux';
import './sass/App.scss';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import {
  fetchAllTodos,
  createTodo,
  deleteTodo,
  doUpdateTodo
} from './store/actions/todos.actions';

class App extends Component {
  componentDidMount() {
    this.props.fetchAllTodos();
  }

  render() {
    const {
      todos,
      createTodo,
      deleteTodo,
      doUpdateTodo
    } = this.props;
    
    return (
      <div className="App">
        <header>
          <h1>To Do List</h1>
        </header>
        <TodoForm createTodo={createTodo} />
        {todos.length ?
          <TodoList
            todos={todos}
            deleteTodo={deleteTodo}
            doUpdateTodo={doUpdateTodo}
          /> :
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
  fetchAllTodos, createTodo, deleteTodo, doUpdateTodo
})(App);
