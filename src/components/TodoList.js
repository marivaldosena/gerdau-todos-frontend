import React from 'react';
import TodoItem from './TodoItem';

const TodoList = (props) => {
  const tarefas = props.todos.map((todo, index) =>
   (<TodoItem key={index} todo={todo} />))

  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Tipo</th>
          <th>Período</th>
          <th>Status</th>
          <th>Editar</th>
        </tr>
      </thead>
      <tbody>
        {props.todos ? tarefas : <div>Carregando...</div>}
      </tbody>
    </table>
  );
}

export default TodoList;