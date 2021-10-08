const calcular = document.getElementById('calcular');


function imc () {
    const nome = document.getElementById('nome').value;
    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);
    const resultado = document.getElementById('resultado');

    if (nome == '' | altura == '' | peso == '') {
        alert('Para calcular o seu IMC , preencha todos os campos.');
        return;
    }
    if ( 1 > altura > 2.2 | 30 > peso > 300) {
        alert("O IMC é um medidor válido somente para adultos! Confira se digitou os dados corretamente!");
        return;
    }
    var peso_maximo = Math.round((altura ** 2) * 25)
    var peso_minimo =  Math.round((altura ** 2) * 18.5)
    var faixa_de_peso = `Tente manter seu peso entre ${peso_minimo} e ${peso_maximo}`
    const imc = peso / altura ** 2;
    let classificacao = "";
    if (imc < 18.5){
        classificacao = 'abaixo do peso.';
    }else if (imc < 25) {
        faixa_de_peso = ""
        classificacao = 'com o peso ideal. Parabéns!';
    }else if (imc < 30){
        classificacao = 'levemente acima do peso.';
    }else if (imc < 35){
        classificacao = 'com obesidade grau I.';
    }else if (imc < 40){
        classificacao = 'com obesidade grau II.';
    }else {
        classificacao = 'com obesidade grau III.';
    }
    resultado.textContent = `Olá, ${nome}! Com ${peso}kg e ${altura}m, seu IMC é ${Math.round(imc)}.\n Atualmente, você está ${classificacao}\n ${faixa_de_peso}`;
}
calcular.addEventListener('click', imc)