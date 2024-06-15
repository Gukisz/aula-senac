// Importa a biblioteca sqlite3 e cria uma nova instancia do banco de dados SQLite, conectando-se ao arquivo exemplo.db
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('exemplo.db');


//Comando SQL para criar tabela Funcionarios (se ainda nao existir)
db.run ( 
    `
        CREATE TABLE IF NOT EXISTS Funcionarios (
        id INTERGER PRIMARY KEY,
        nome TEXT NOT NULL,
        cargo TEXT,
        salario REAL
        )
     `,
     
     //O callback (err) em db.run() é usado para capturar e relatar erros caso ocorram durante a execução do comando SQL.
    (err) => {
        if (err){
            console.error('Erro ao criar a tabela Funcionarios:', err.message);
        } else {
            console.log('Tabela Funcionarios criada com sucesso.');
            
            // Dados dos funcionarios a serem inseridos na tabela
            const funcionarios = [
                {nome: 'João Silva', cargo: 'Desenvolvedor', salario: 4500.00},
                {nome: 'Maria Oliveira', cargo: 'Analaista', salario: 5500.00},
                {nome: 'Pedro Souza', cargo: 'Gerente', salario: 7500.00}
            ];

            // Comando SQL para inserir dados na tela de Funcionarios
            const insertQuery = `
                INSERT INTO Funcionarios (nome, cargo, salario)
                VALUES (?, ?, ?)
            `;

            //Função para inserir cada funcionario
            funcionarios.forEach((funcionario) => {
                db.run(insertQuery, [funcionario.nome, funcionario.cargo, funcionario.salario], function(err) {
                    if (err) {
                        console.error('Erro ao inserir funcionário:', err.message)
                    } else {
                        console.log(`Funcionário inserido com sucesso. ID: ${this.lastID}`);
                    }
                });
            });
        
            //Fechar conexão com o banco de dados SQLite após a inserção
            db.close((err) => {
                if (err) {
                    return console.error('Erro ao tentar fechar o banco de dados:', err.message)
                }
                console.log('Conexão com banco de dados SQlite Fechada.')
            }); 
        }
    }  
)
