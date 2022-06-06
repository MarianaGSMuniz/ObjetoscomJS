const clientes = [{
        nome: "Marinela",
        idade: 36,
        cpf: "98767845876",
        email: "marinela@teste.com",
        fones: ["123456987", "987654321"],
        dependentes: [{
            nome: "Arendeu Souza",
            parentesco: "filho",
            dataNasc: "01/02/2000"
        }, {
            nome: "Ana",
            parentesco: "filha",
            dataNasc: "03/03/2003"
        }],
    },
    {
        nome: "Mariana",
        idade: 30,
        cpf: "978965478841",
        email: "mari@teste.com",
        fones: ["129999997", "98887745"],
        dependentes: [{
            nome: "Mingal Souza",
            parentesco: "filho",
            dataNasc: "19/10/2021"
        }, {
            nome: "Lua",
            parentesco: "filha",
            dataNasc: "19/10/2022"
        }],
    }
]

const ListaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes]

console.log(ListaDependentes)