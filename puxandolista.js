const cliente = {
    nome: "Marinela",
    idade: 36,
    cpf: "98767845876",
    email: "marinela@teste.com",
    fones: ["123456987", "987654321"],
    dependentes: [{
            nome: "Arendeu Souza",
            parentesco: "filho",
            dataNasc: "01/02/2000"
        }

        , {
            nome: "Ana",
            parentesco: "filha",
            dataNasc: "03/03/2003"
        }
    ],
    saldo: 100,
    depositar: function(valor) {
        this.saldo = valor
    }
}
let relatorio = "";

for (let info in cliente) {
    if (typeof cliente[info] === "object" || typeof cliente[info] === "function") {
        continue
    } else {
        relatorio +=
            '${info} ==> ${cliente [info]}'

    }

}
console.log(relatorio)