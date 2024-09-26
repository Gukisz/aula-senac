
# To-Do List com Fila (FIFO)

## Descrição

Este projeto implementa uma aplicação de To-Do List utilizando a estrutura de dados de fila (FIFO - First In, First Out). O sistema utiliza uma fila para gerenciar as tarefas.

## Funcionalidades

- Adicionar novas tarefas com descrição e prioridade.
- Remover a tarefa mais antiga da fila.
- Listar todas as tarefas na fila.
- Marcar a primeira tarefa da fila como concluída.
- Interação com o usuário via um menu no terminal.

## Pré-requisitos

- Node.js instalado.
- Pacote readline-sync para capturar a interação com o usuário no terminal.

## Instalação

1. Clone o repositório para o seu ambiente local:

```bash
git clone <URL_DO_REPOSITORIO>
```

2. Navegue até o diretório do projeto:

```bash
cd nome-do-diretorio
```

3. Instale as dependências: Certifique-se de que você tem o readline-sync instalado:

```bash
npm install readline-sync
```

## Como Executar

Compile e execute o código: Se estiver usando TypeScript:

```bash
ts-node index.ts
```

Se preferir, compile o arquivo TypeScript para JavaScript e execute:

```bash
tsc index.ts
node index.js
```

Interaja com o menu: Você verá um menu interativo no terminal com as seguintes opções:

1. Adicionar tarefa: Permite adicionar uma nova tarefa à fila.
2. Remover tarefa: Remove a tarefa mais antiga (a primeira) da fila.
3. Listar tarefas: Exibe todas as tarefas na fila.
4. Marcar tarefa como concluída: Marca a primeira tarefa da fila como "Concluída".
5. Sair: Encerra a aplicação.

Após escolher uma opção, siga as instruções apresentadas no terminal.

## Exemplo de Uso

- *Adicionar uma tarefa*
Ao escolher a opção "1", será solicitado:

- *Descrição da tarefa*
Prioridade da tarefa (0 para opcional).
Após adicionar a tarefa, a mensagem "Tarefa adicionada com sucesso!" será exibida.

- *Listar tarefas*
Ao escolher a opção "3", o sistema exibe todas as tarefas na fila, com detalhes como a descrição, prioridade e status (pendente ou concluída).

- *Remover uma tarefa*
Ao escolher a opção "2", a tarefa mais antiga será removida da fila e o nome da tarefa será exibido.

- *Marcar uma tarefa como concluída*
Ao escolher a opção "4", a primeira tarefa da fila será marcada como "Concluída".

## Contribuição
Se desejar contribuir, sinta-se à vontade para abrir issues ou fazer um pull request.