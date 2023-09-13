const celular = 99918888;
let n = "KAUAN"

function nomeAoContrario(texto){
   let conversor = celular.toString()

   if(conversor.length == 10){
    console.log(`(${conversor[0] + conversor[1]}) 9 ${conversor[2]+conversor[3]+conversor[4]+conversor[5]}-${conversor[6]+conversor[7]+conversor[8]+conversor[9]}`)
   }else if(conversor.length == 8 ){
    console.log(`9 ${conversor[0]+conversor[1]+conversor[2]+conversor[3]}-${conversor[4]+conversor[5]+conversor[6]+conversor[7]}`)
   }else{
    console.log("Numero Invalido")
   }
}


nomeAoContrario(celular)
