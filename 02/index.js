const cpf = "12345678900";
const cnpj = "12345678900";
const cnpjw = "12345678000199";

function cpfFormatado(x){
    if(x.length == 11){
        let primeiraParte = x.slice(0,3)
        let segundaParte = x.slice(3,6)
        let terceiraParte = x.slice(6,9)
        let ultimaParte = x.slice(9,11)
        return `${primeiraParte}.${segundaParte}.${terceiraParte}-${ultimaParte}`
    }else{
        return "Cpf Invalido"
    }
}

function cnpjFormatado(x){
    if(x.length == 14){
        let primeiraParte = x.slice(0,2)
        let segundaParte = x.slice(2,5)
        let terceiraParte = x.slice(5,8)
        let ultimaParte = x.slice(8,12)
        let agoraSim = x.slice(12,14)
        return `${primeiraParte}.${segundaParte}.${terceiraParte}/${ultimaParte}-${agoraSim}`
    }else{
        return "Cpf Invalido"
    }
}
console.log(cnpjFormatado(cnpjw))
console.log(cpfFormatado(cpf))

