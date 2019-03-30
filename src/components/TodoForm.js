import React, { Component } from 'react';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: '',
      tipo: 'pessoal',
      dataEntrega: '',
    }
  }

  handleInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    const { todo, tipo, dataEntrega } = this.state;
    this.props.createTodo(todo, tipo, dataEntrega)
    this.setState({ todo: '', tipo: 'pessoal', dataEntrega: '' })
    event.preventDefault();
  }

  render() {
    return (
      <form className="form-inline" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="todo"
            id="todo"
            className="form-control"
            placeholder="Nome da Atividade"
            onChange={this.handleInput}
            value={this.state.todo}
          />
        </div>
        <div className="form-group">
          <select name="tipo" id="tipo" className="form-control"
            onChange={this.handleInput} value={this.state.tipo}
            >
            <option defaultValue value="pessoal">Pessoal</option>
            <option value="profissional">Profissional</option>
          </select>
        </div>
        <div className="form-group">
          <input
            type="date"
            name="dataEntrega"
            id="dataEntrega"
            className="form-control"
            onChange={this.handleInput}
            value={this.state.dataEntrega}
          />
        </div>
        <div className="form-group">
          <input
            type="submit"
            className="button button--primary"
            value="Adicionar" />
        </div>
      </form>
    );
  }
}

export default TodoForm;