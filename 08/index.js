const cpf = "011.022.033-44";

function formaataCpfCnpJ(dado){
let formatado = ""
for(let i = 0; i < dado.length;i++){
    if(typeof parseInt(dado[i] == 'number') && dado[i] != "." && dado[i] != "-"){
      formatado += dado[i]
    } 
}
return formatado
}

console.log(formaataCpfCnpJ(cpf))


