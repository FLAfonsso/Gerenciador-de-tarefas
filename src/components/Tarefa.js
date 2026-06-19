import React from 'react';
import { useTasks } from '../context/TaskContext';

function Tarefa({ tarefa }) {
  const { dispatch, ACTIONS } = useTasks();

  const handleToggle = () => {
    dispatch({ type: ACTIONS.ALTERNAR, payload: tarefa.id });
  };

  return (
    <li 
      className={`item-tarefa ${tarefa.concluida ? 'concluida' : ''}`}
      onClick={handleToggle}
    >
      <input 
        type="checkbox" 
        checked={tarefa.concluida} 
        onChange={handleToggle}
        className="checkbox-tarefa"
        onClick={(e) => e.stopPropagation()}
      />
      <span className="texto-tarefa">{tarefa.texto}</span>
    </li>
  );
}

export default Tarefa;