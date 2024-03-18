function comprar()

{
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidade = parseInt(document.getElementById('qtd').value);

    if (quantidade < 1 || quantidade > 10)
    {
        alert('Digite uma quantidade entre 1 à 10 ingressos!');
    }
    else
    {
        if (tipoIngresso == 'pista')
        {
            comprarPista(quantidade);
        }
        else if (tipoIngresso == 'superior')
        {
            comprarSuperior(quantidade);
        }
        else if (tipoIngresso == 'inferior')
        {
            comprarInferior(quantidade);
        }
        else
        {
            alert('Escolha o seu tipo ingresso!');
        }
    }
}

function comprarPista(quantidade)
{
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if(quantidade > qtdPista)
    {
        alert('Quantidade indiponivel para pista!');
    } 
    else
    {
        qtdPista = qtdPista - quantidade;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Compra realizada com sucesso!');
    }
}

function comprarSuperior(quantidade)
{
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if(quantidade > qtdSuperior)
    {
        alert('Quantidade indiponivel para Superior!');
    } 
    else
    {
        qtdSuperior = qtdSuperior - quantidade;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert('Compra realizada com sucesso!');
    }
}

function comprarInferior(quantidade)
{
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if(quantidade > qtdInferior)
    {
        alert('Quantidade indiponivel para Inferior!');
    } 
    else
    {
        qtdInferior = qtdInferior - quantidade;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert('Compra realizada com sucesso!');
    }
}