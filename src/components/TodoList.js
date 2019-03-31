import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, deleteTodo }) => {
  const tarefas = todos.map((todo, index) =>
   (<TodoItem key={index} todo={todo} deleteTodo={deleteTodo} />))

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
        {todos ? tarefas : <div>Carregando...</div>}
      </tbody>
    </table>
  );
}

export default TodoList;