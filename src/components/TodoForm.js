import React, { Component } from 'react';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: '',
      tipoId: '1',
      dataConclusao: '',
    }
  }

  handleInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    const { todo, tipoId, dataConclusao } = this.state;
    debugger
    this.props.createTodo(todo, tipoId, dataConclusao)

    event.preventDefault();
  }

  render() {
    return (
      <form className="form-inline" method="POST" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="todo"
            id="todo"
            className="form-control"
            placeholder="Nome da Atividade"
            onChange={this.handleInput}
          />
        </div>
        <div className="form-group">
          <select name="tipoId" id="tipoId" className="form-control"
            onChange={this.handleInput} value={this.state.tipoId}
            >
            <option defaultValue value="1">Pessoal</option>
            <option value="2">Profissional</option>
          </select>
        </div>
        <div className="form-group">
          <input
            type="date"
            name="dataConclusao"
            id="dataConclusao"
            className="form-control"
            onChange={this.handleInput}
          />
        </div>
        <div className="form-group">
          <button  type="submit"
            className="button button--primary">
            Adicionar
          </button>
        </div>
      </form>
    );
  }
}

export default TodoForm;