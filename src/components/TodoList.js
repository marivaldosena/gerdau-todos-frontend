import React from 'react';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tipo: 'nome',
      desc: false
    }
  }

  toggleOrdenacao = (tipo, desc) => {
    if (tipo === this.state.tipo) {
      this.setState(prevState => ({ desc: !prevState.desc }))
    } else {
      this.setState({ desc: true, tipo })
    }
  }

  ordenarAtividades = (atividades, tipo, desc) => {
    switch (tipo) {
      case 'tipo':
        return this.ordenarPorTipo(atividades, desc)
      case 'periodo':
        return this.ordenarPorPeriodo(atividades, desc)
      case 'status':
        return this.ordenarPorStatus(atividades, desc)
      default:
        return this.ordenarPorNome(atividades, desc)
    }
  }

  ordenarPorNome = (atividades, desc) => {
   atividades.sort(function(item1, item2) {
      const a = item1.todo.toLowerCase();
      const b = item2.todo.toLowerCase();

      if (a > b) {
        return desc ? 1 : -1;
      }

      if (b > a) {
        return desc ? -1 : 1;
      }

      return 0
    })

    return this.mostrarAtividades(atividades);
  }

  ordenarPorTipo = (atividades, desc) => {
    atividades.sort(function(item1, item2) {
       const a = item1.tipo.toLowerCase();
       const b = item2.tipo.toLowerCase();
 
       if (a > b) {
         return desc ? 1 : -1;
       }
 
       if (b > a) {
         return desc ? -1 : 1;
       }
 
       return 0
     })
 
     return this.mostrarAtividades(atividades);
   }

  ordenarPorPeriodo = (atividades, desc) => {
    atividades.sort(function(item1, item2) {
      const a = new Date(item1.dataEntrega)
      const b = new Date(item2.dataEntrega)

      if (desc) {
        return b - a;
      } else {
        return a - b;
      }
    })

    return this.mostrarAtividades(atividades);
  }

  ordenarPorStatus = (atividades, desc) => {
    atividades.sort(function(item1, item2) {
       const a = item1.finalizado
       const b = item2.finalizado
 
       if (desc) {
         return b - a;
       } else {
         return a - b;
       }
     })
 
     return this.mostrarAtividades(atividades);
   }

  mostrarAtividades = (atividades) => {
    return atividades.map(todo =>
      <TodoItem key={todo.id} todo={todo}
        deleteTodo={this.props.deleteTodo}
        doUpdateTodo={this.props.doUpdateTodo}
    />)
  }

  render() {
    const { todos } = this.props;
    const { tipo, desc } = this.state;
    const atividades = this.ordenarAtividades(todos, tipo, desc);
        
    return (
      <table>
        <thead>
          <tr>
            <th onClick={() => this.toggleOrdenacao('nome', desc)}>
              <i className="fas fa-angle-down"></i> Nome
            </th>
            <th onClick={() => this.toggleOrdenacao('tipo', desc)}>
              <i className="fas fa-angle-down"></i> Tipo
            </th>
            <th onClick={() => this.toggleOrdenacao('periodo', desc)}>
              <i className="fas fa-angle-down"></i> Período
            </th>
            <th onClick={() => this.toggleOrdenacao('status', desc)}>
              <i className="fas fa-angle-down"></i> Status
            </th>
            <th>
              <i className="fas fa-angle-down"></i> Editar
            </th>
          </tr>
        </thead>
        <tbody>
          {todos ?
            atividades :
            <div>Carregando...</div>
          }
        </tbody>
      </table>
    );
  }
}

export default TodoList;