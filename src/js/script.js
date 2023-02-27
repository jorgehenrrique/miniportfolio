const abaSobre = document.querySelector('#sobre-mim');
const abaRedes = document.querySelector('#minhas-redes');

const infoSobre = document.querySelector('#informacao-sobre-mim');
const infoRedes = document.querySelector('#informacao-minhas-redes');

abaSobre.addEventListener('click', function () {
    if (infoSobre.classList.contains('selecionado')) return;

    infoSobre.classList.add('selecionado');
    infoRedes.classList.remove('selecionado');

    abaSobre.classList.add('selecionado');
    abaRedes.classList.remove('selecionado');
});

abaRedes.addEventListener('click', function () {
    if (infoRedes.classList.contains('selecionado')) return;

    infoRedes.classList.add('selecionado');
    infoSobre.classList.remove('selecionado');

    abaRedes.classList.add('selecionado');
    abaSobre.classList.remove('selecionado');
});