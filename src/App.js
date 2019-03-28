import React, { Component } from 'react';
import './sass/App.scss';

import TodoForm from './components/TodoForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoForm />
      </div>
    );
  }
}

export default App;
