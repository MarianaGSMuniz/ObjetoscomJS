const cliente = {
    nome: "Marinela",
    idade: 36,
    cpf: "98767845876",
    email: "marinela@teste.com",
    fones: ["123456987", "987654321"]

}

cliente.dependentes = {
    nome: "Arendeu",
    parentesco: "filho",
    dataNasc: "01/02/2000"
}

console.log(cliente)
cliente.dependentes.nome = "Arendeu Souza"