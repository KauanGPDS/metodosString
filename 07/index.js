const email = "aluno@@cubos.academy";

function email100correto(texto){
   let emailValido = true;
       if(email.indexOf("@") < 0){
        emailValido = false;
       }else if(email.indexOf(".") < 0){
         emailValido = false
       }else if(email.indexOf(".") === 0){
        emailValido = false
      }else if(email.indexOf(".") === email.length -1){
        emailValido = false
      }
      if(emailValido){
        console.log("Email Valido Parabens")
      }else{
        console.log("Email Não valido")
      }
}
email100correto(email)
// const separa = email.indexOf(".")
// let resto = email.slice(separa)
// console.log(email)
// console.log(separa)