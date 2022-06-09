function Cliente(nome, cpf, email, saldo) {
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor) {
        this.saldo += valor
    }
}

function ClientePoupança(nome, cpf, email, saldo, saldoPoup) {
    Cliente.call(this.nome, cpf, email, saldo)
    this.saldoPoup = saldoPoup
}

const ju = new ClientePoupanca("Ari", "78954321478", "ari@email.com", 200, 307)

console.log(ju)

ClientePoupança.prototype.depositarPoup = function(valor) {
    this.saldoPoup += valor
}
ari.depositarPoup(32)

console.log(ari.saldoPoup)