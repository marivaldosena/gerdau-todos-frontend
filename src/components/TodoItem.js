import React from 'react';

const TodoItem = ({ todo }) => {
  return (
    <tr>
      <td>{todo.todo}</td>
      <td>{todo.tipo}</td>
      <td>{new Date(todo.dataEntrega).toLocaleString('pt-BR')}</td>
    <td>
      <label className="checkbox">
        <input type="checkbox" />
        <span className="check"></span>
      </label>
    </td>
    <td>
      <div className="icons">
        <i className="fas fa-edit"></i>
        <i className="fas fa-trash-alt"></i>
      </div>
    </td>
    </tr>
  );
}

export default TodoItem;
