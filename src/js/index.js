/* 
OBJETIVO 1 - quando passar o mouse em cima do personagem temos que:

- colocar a classe selecionado no personagem que passamos o mouse em cima para adicionar a animação nele

- retirar a classe selecionado do personagem que está selecionado


OBJETIVO 2 -  quando passar o mouse em cima do personagem, trocar a imagem e o nome do personagem grande

- alterar a imagem do jogador 1 
- alterar o nome do jogador 1

*/





// const homemDeFerro = document.getElementById('homem-de-ferro')

// homemDeFerro.addEventListener('mouseenter', () => {
//     homemDeFerro.classList.add('selecionado');
// })

// const hulk = document.getElementById('hulk')

// hulk.addEventListener('mouseenter', () => {
//     hulk.classList.add('selecionado');
// })


const personagens = document.querySelectorAll('.personagem')

console.log(personagens);

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        /* 
        OBJETIVO 1 - quando passar o mouse em cima do personagem temos que:

        - colocar a classe selecionado no personagem que passamos o mouse em cima para adicionar a animação nele

        - retirar a classe selecionado do personagem que está selecionado

        */
        const personagemSelecionado = document.querySelector('.selecionado')
        personagemSelecionado.classList.remove('selecionado')

        personagem.classList.add('selecionado')

        /* OBJETIVO 2 -  quando passar o mouse em cima do personagem da listagem, trocar a imagem e o nome do personagem grande

        - alterar a imagem do jogador 1 
        - alterar o nome do jogador 1

        */

        const idSelecionado = personagem.attributes.id.value;

        const imagemJogador1 = document.getElementById('personagem-jogador-1');
        imagemJogador1.src = `./src/imagens/${idSelecionado}.png`;

    });
})




