# 📋 Gerenciador de Tarefas

Aplicacao desenvolvida em **React** para gerenciamento de tarefas diarias.

![Tela da aplicacao](https://via.placeholder.com/600x400/f0f2f5/2c3e50?text=Gerenciador+de+Tarefas)

## ✨ Funcionalidades

- ✅ **Adicionar tarefas** — Digite no campo e clique em "Adicionar"
- ✅ **Marcar como concluida** — Clique no checkbox ao lado da tarefa
- ✅ **Filtrar tarefas** — Visualize Todas, Concluidas ou Pendentes
- 🌙 **Tema Claro/Escuro** — Alterne entre os temas com o botao no canto superior

## 🚀 Como executar

```bash
# Clone o repositorio
git clone https://github.com/seu-usuario/gerenciador-tarefas.git

# Entre na pasta
cd gerenciador-tarefas

# Instale as dependencias
npm install

# Execute a aplicacao
npm start
```

Acesse `http://localhost:3000` no navegador.

## 🛠️ Tecnologias

- **React** 18
- **Hooks**: useState, useContext, useReducer, useEffect
- **Context API** para estado global
- **CSS Variables** para tema dinamico

## 📁 Estrutura

```
src/
├── index.js              # Ponto de entrada
├── index.css             # Estilos globais (com tema claro/escuro)
├── App.js                # Componente principal + toggle de tema
├── context/
│   └── TaskContext.js    # Estado global (useReducer + Context)
└── components/
    ├── ListaDeTarefas.js # Lista com filtros
    └── Tarefa.js         # Item individual
```

## 📝 Sobre

Projeto desenvolvido como atividade academica em **Linguagem de Programacao para a Internet**.

Testado e funcionando. Atualmente estudando outras linguagens e frameworks para expandir meus conhecimentos em desenvolvimento web.

---

Feito com 💙 e React
