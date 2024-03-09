function capturar(){ //captura os dados dos campos e atribui a variaveis
    const frota = Number(qtdFrota.value);
    const mediaManu = Number(manutencoes.value);
    const valor = Number(val.value);

    return{
        frota,
        mediaManu,
        valor
    }
}

function calcular(){
    const {frota, mediaManu, valor} = capturar();

    const preco = frota * (valor * mediaManu);
    const descontoMax = preco  * 0.3;
    const descontoMin = preco  * 0.1;
    const valorMax = preco - descontoMax;
    const valorMin = preco - descontoMin;

    return{
        valorMax,
        valorMin,
        descontoMax,
        descontoMin
    }
}


function validar(){ //realiza a validação de campos, caso os valores sejam 0
    const {frota, mediaManu, valor} = capturar();
    const {valorMax, valorMin, descontoMax, descontoMin} = calcular();

    if(frota <= 0 || mediaManu <= 0 || valor <= 0){
        alert('Preencha os campos corretamente e clique novamente');
        return false;
    }else{
        tabela.innerHTML = ``;
    }
}