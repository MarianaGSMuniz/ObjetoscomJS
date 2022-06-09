function Cliente(nome, cpf, email, saldo) {
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor) {
        this.saldo += valor
    }
}
const andre = new Cliente("Mariana", "741698459634", "mari@test.com", 100)
console.log(Mariana)