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

function calcular(){ // Retorna os valores dos calculos efetuados
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
        descontoMin,
        preco
    }
}


function validar(){ //realiza a validação de campos, caso os valores sejam 0 ou menores
    const {frota, mediaManu, valor} = capturar();
    const {valorMax, valorMin, descontoMax, descontoMin, preco} = calcular();
    const descontoMed = (descontoMax + descontoMin)/2;

    if(frota <= 0 || mediaManu <= 0 || valor <= 0){ // Retorna uma mensagem de erro caso o usuario insira 0 ou valores menores que 0
        alert('Preencha os campos corretamente e clique novamente');
        return false;
    }else{ // mostra a tabela com os calculos após a validação ser realizada
        tabela.innerHTML = `
        <table>
    
        <tr>
            <th>Gastos com Manutenção</th>
            <td class = 'inicial'>${preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
        </tr>
        
        <tr>
            <th>Desconto 30%</th>
            <td class = 'descontos'>${valorMax.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
        </tr>
        
        <tr>
            <th>Desconto 10%</th>
            <td class = 'descontos'>${valorMin.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
        </tr>

        <tr>
            <th>Desconto médio</th>
            <td class = 'descontos'>${descontoMed.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
        </tr>
        
            <tr>
                <th>Prejuizo max</th>
                <td class = 'prejuizo'>${descontoMax.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
            </tr>
            
            <tr>
                <th>Prejuizo min</th>
                <td class = 'prejuizo'>${descontoMin.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
            </tr>
        </table>`;
        // texto de mensagem sobre os calculos
        mensagem.innerHTML = `Com o uso do nosso sistema é garantido um desconto de <span>10</span> a <span>30%</span> nas manutenções`;
    }
}