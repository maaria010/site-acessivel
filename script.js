document.addEventListener ( 'DOMContentLoaded', function(){
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
    const botaoDeAcessibilidade = document.getElementById('opcoes-acessibildade');

    botaoDeAcessibilidade.addEventListener('click',function'){
        botaoDeAcessibilidade.classList.toggle('btacao-botao');
        botaoDeAcessibilidade.classList.toggle('apresenta-lista');

    }
    const aumentaFonteBotao = document.getElementById('aumenta--fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');
    let tamanhoAtualFonte = 1;
    aumentaFonteBotao.addEventListener('click', function( ){
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`

    });

    diminuiFonteBotao.addEventListener('click', function( ){
        tamanhoAtualFonte -= 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`

    });
});