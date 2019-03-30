import React from 'react';

const TodoItem = ({ todo }) => {
  return (
    <tr>
      <td>{todo.todo}</td>
      <td>{todo.tipo}</td>
      <td>{new Date(todo.dataEntrega).toLocaleString('pt-BR')}</td>
      <td>{todo.finalizado ? true : false}</td>
      <td>Ações</td>
    </tr>
  );
}

export default TodoItem;
