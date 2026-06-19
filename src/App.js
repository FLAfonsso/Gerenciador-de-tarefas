import React, { useState, useEffect } from 'react';
import { useTasks } from './context/TaskContext';
import ListaDeTarefas from './components/ListaDeTarefas';

function App() {
  const [novoTexto, setNovoTexto] = useState('');
  const [temaEscuro, setTemaEscuro] = useState(false);
  const { dispatch, ACTIONS } = useTasks();

  // Aplica o tema ao carregar e quando muda
  useEffect(() => {
    if (temaEscuro) {
      document.documentElement.setAttribute('data-tema', 'escuro');
    } else {
      document.documentElement.removeAttribute('data-tema');
    }
  }, [temaEscuro]);

  const handleAdicionar = (e) => {
    e.preventDefault();
    if (novoTexto.trim()) {
      dispatch({ type: ACTIONS.ADICIONAR, payload: novoTexto.trim() });
      setNovoTexto('');
    }
  };

  const toggleTema = () => {
    setTemaEscuro(!temaEscuro);
  };

  return (
    <>
      <button 
        className="btn-tema" 
        onClick={toggleTema}
        title={temaEscuro ? 'Mudar para tema claro' : 'Mudar para tema escuro'}
      >
        {temaEscuro ? '☀️' : '🌙'}
      </button>

      <div className="app-container">
        <div className="app-card">
          <h1 className="app-titulo">📋 Gerenciador de Tarefas</h1>

          <form onSubmit={handleAdicionar} className="form-tarefa">
            <input 
              type="text" 
              value={novoTexto} 
              onChange={(e) => setNovoTexto(e.target.value)} 
              placeholder="O que precisa ser feito?" 
              className="input-tarefa"
            />
            <button type="submit" className="btn-adicionar">
              Adicionar
            </button>
          </form>

          <ListaDeTarefas />
        </div>
      </div>
    </>
  );
}

export default App;