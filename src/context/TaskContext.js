import React, { createContext, useReducer, useContext } from 'react';

// Definicao do estado inicial
const initialState = {
  tarefas: [],
  filtro: 'todas' // opcoes: 'todas', 'concluidas', 'pendentes'
};

// Tipos de acoes para o reducer
const ACTIONS = {
  ADICIONAR: 'ADICIONAR_TAREFA',
  ALTERNAR: 'ALTERNAR_STATUS',
  DEFINIR_FILTRO: 'DEFINIR_FILTRO'
};

// Reducer para gerenciar a logica de estado de forma imutavel
function tarefaReducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADICIONAR:
      return {
        ...state,
        tarefas: [...state.tarefas, { id: Date.now(), texto: action.payload, concluida: false }]
      };
    case ACTIONS.ALTERNAR:
      return {
        ...state,
        tarefas: state.tarefas.map(t => 
          t.id === action.payload ? { ...t, concluida: !t.concluida } : t
        )
      };
    case ACTIONS.DEFINIR_FILTRO:
      return {
        ...state,
        filtro: action.payload
      };
    default:
      return state;
  }
}

const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [state, dispatch] = useReducer(tarefaReducer, initialState);

  return (
    <TaskContext.Provider value={{ state, dispatch, ACTIONS }}>
      {children}
    </TaskContext.Provider>
  );
}

// Hook personalizado para facilitar o acesso ao contexto
export function useTasks() {
  return useContext(TaskContext);
}