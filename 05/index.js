const numeroCartao = '1111222233334444';
let cartaoOculto = "";

for (let i = 0; i < numeroCartao.length; i++) {
    if (i === 4 || i === 8 || i === 5 || i === 6 || i === 7 || i === 9 || i === 10 || i === 11) {
        cartaoOculto += "*";
    } else {
        cartaoOculto += numeroCartao[i];
    }
}

console.log(cartaoOculto);