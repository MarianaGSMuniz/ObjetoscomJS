const objPersonagem = {
    nome: "Nono",
    classe: "mago",
    nivel: "25"
}

const objPersonagem2 = objPersonagem
objPersonagem2.nome = "Nono, o Zubu"

console.log(objPersonagem.nome)
console.log(objPersonagem2.nome)