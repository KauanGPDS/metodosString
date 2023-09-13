const nome1 = 'Guido Cerqueira';

function nickName(nome){
    let semEspaco = nome.replace(/\s+/g, '')
    let minuscula = semEspaco.toLowerCase()
    console.log(`@${minuscula}`)
}

console.log(nickName(nome1))