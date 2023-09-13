const nomeArquivo = 'Foto da Familia.pdf';

function conferir(dado){
    let depoisDoPonto = dado.slice(-3)
    if(depoisDoPonto == 'jpg' || depoisDoPonto == 'jpeg' || depoisDoPonto == 'gif'|| depoisDoPonto == 'png' ){
        return "Valido"
    }else{
        return "Invalido"
    }

}

console.log(conferir(nomeArquivo))