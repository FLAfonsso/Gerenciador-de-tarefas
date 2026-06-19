import React from 'react';
import { useTasks } from '../context/TaskContext';
import Tarefa from './Tarefa';

function ListaDeTarefas() {
  const { state, dispatch, ACTIONS } = useTasks();
  const { tarefas, filtro } = state;

  // Logica de filtragem baseada no estado global
  const tarefasFiltradas = tarefas.filter(t => {
    if (filtro === 'concluidas') return t.concluida;
    if (filtro === 'pendentes') return !t.concluida;
    return true;
  });

  const filtros = [
    { key: 'todas', label: 'Todas' },
    { key: 'concluidas', label: 'Concluidas' },
    { key: 'pendentes', label: 'Pendentes' }
  ];

  return (
    <div>
      <div className="filtros-container">
        {filtros.map(f => (
          <button
            key={f.key}
            className={`btn-filtro ${filtro === f.key ? 'ativo' : ''}`}
            onClick={() => dispatch({ type: ACTIONS.DEFINIR_FILTRO, payload: f.key })}
          >
            {f.label}
          </button>
        ))}
      </div>

      {tarefasFiltradas.length === 0 ? (
        <p className="mensagem-vazia">
          {tarefas.length === 0 
            ? 'Nenhuma tarefa ainda. Adicione uma acima!' 
            : 'Nenhuma tarefa encontrada neste filtro.'}
        </p>
      ) : (
        <ul className="lista-tarefas">
          {tarefasFiltradas.map(t => (
            <Tarefa key={t.id} tarefa={t} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default ListaDeTarefas;