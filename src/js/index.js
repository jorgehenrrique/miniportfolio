/*
    OBJETIVO - quando clicarmos na aba temos que mostrar o conteúdo da aba que foi clicada pelo usuário e esconder o conteúdo da aba anterior

    - passo 1 - dar um jeito de pegar os elementos que representam as abas no HTML
    - passo 2 - dar um jeito de identificar o clique no elemento da aba
    - passo 3 - quando o usuário clicar, desmarcar a aba selecionada
    - passo 4 - marcar a aba clicada como selecionado
    - passo 5 - esconder o conteúdo anterior
    - passo 6 - mostrar o conteúdo da aba selecionada
*/

const abas = document.querySelectorAll(".aba"); //passo 1

abas.forEach(aba => { //passo 2
    aba.addEventListener("click", function() { //passo3

        if(aba.classList.contains("selecionado")){
            return;
        }
        const abaSelecionada = document.querySelector(".aba.selecionado");
        abaSelecionada.classList.remove("selecionado");

        aba.classList.add("selecionado"); //passo 4
    });
});