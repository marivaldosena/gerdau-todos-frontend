import React, { Component } from 'react';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: '',
      tipoId: '',
      dataConclusao: '',
    }
  }

  handleInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <form className="form-inline">
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
          <select name="tipo" id="tipo" className="form-control"
            onChange={this.handleInput}
            >
            <option value="1">Pessoal</option>
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
          <button className="button button--primary"
            onClick={() => alert('Enviado!')}
          >
            Adicionar
          </button>
        </div>
      </form>
    );
  }
}

export default TodoForm;