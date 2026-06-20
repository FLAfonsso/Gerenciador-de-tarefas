📋 Gerenciador de Tarefas
React JavaScript

Uma aplicacão moderna e responsiva para gerenciamento de tarefas diarias, desenvolvida em React com estado global via Context API e useReducer.

App Preview

✨ Funcionalidades
✅ Adicionar Tarefas - Campo de entrada intuitivo para criar novas tarefas
✅ Marcar como Concluida - Checkbox interativo ao lado de cada tarefa
🔍 Filtrar Tarefas - Visualize Todas, Concluidas ou Pendentes
🌙 Tema Claro/Escuro - Alterne entre os temas com um clique
📱 Responsivo - Adapta-se perfeitamente a dispositivos moveis, tablets e desktop
🎨 Design Limpo - Interface organizada com cards, sombras leves e bordas arredondadas

🚀 Tecnologias Utilizadas
React 18 - Biblioteca para construcao de interfaces
Hooks - useState, useContext, useReducer, useEffect
Context API - Gerenciamento de estado global
CSS3 - Estilizacao com variaveis CSS e tema dinamico
GitHub Pages - Hospedagem gratuita (opcional)

📁 Estrutura do Projeto
gerenciador-tarefas/
│
├── public/
│   └── index.html          # Pagina principal com favicon e titulo
│
├── src/
│   ├── index.js            # Ponto de entrada da aplicacao
│   ├── index.css           # Estilos globais (tema claro/escuro)
│   ├── App.js              # Componente principal + toggle de tema
│   │
│   ├── context/
│   │   └── TaskContext.js  # Estado global com useReducer + Context API
│   │
│   └── components/
│       ├── ListaDeTarefas.js  # Lista com filtros e mensagens
│       └── Tarefa.js          # Item individual da lista
│
├── package.json            # Dependencias e scripts
├── README.md               # Documentacao
└── .gitignore              # Arquivos ignorados pelo Git
