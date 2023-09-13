let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";

let nomeMaiusculo = ""
const adicionarNoInicio = identificador.padStart(6,"0")
const tirandoEspaco = email.trim()
for(const item of nome.split(' ')){
    nomeMaiusculo += `${item.slice(0,1).toUpperCase()}${item.slice(1).toLowerCase()} `
}

console.log(adicionarNoInicio)
console.log(tirandoEspaco)
console.log(nomeMaiusculo)
