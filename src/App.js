import React, { Component } from 'react';
import { connect } from 'react-redux';
import './sass/App.scss';

import TodoForm from './components/TodoForm';
import { fetchAllTodos, createTodo } from './store/actions/todos.actions';

class App extends Component {
  componentDidMount() {
    this.props.fetchAllTodos();
  }

  render() {
    return (
      <div className="App">
        <TodoForm createTodo={createTodo} />
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
  fetchAllTodos, createTodo
})(App);
