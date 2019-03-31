import React from 'react';

const TodoItem = ({ todo, deleteTodo, doUpdateTodo }) => {
  return (
    <tr className={verificarStatus(todo.finalizado)}>
      <td>
        {todo.todo}
        <hr className={verificarStatus(todo.finalizado)} />
      </td>
      <td>{todo.tipo}</td>
      <td>{new Date(todo.dataEntrega).toLocaleDateString()}</td>
      <td>
        <label className="checkbox">
          <input type="checkbox"
            value={todo.finalizado}
            checked={todo.finalizado}
            onChange={() => doUpdateTodo({ ...todo, finalizado: ! todo.finalizado })} />
          <span className="check"></span>
        </label>
      </td>
      <td>
        <div className="icons">
          <i className="fas fa-edit" onClick={() => console.log('asdfkh')}></i>
          <i className="fas fa-trash-alt" onClick={() => deleteTodo(todo.id)}></i>
        </div>
      </td>
    </tr>
  );
}

const verificarStatus = (status) => {
  if (status) {
    return 'completed'
  }
}

export default TodoItem;
