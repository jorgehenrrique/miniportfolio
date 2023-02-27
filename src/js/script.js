const sobre = document.querySelector('#sobre-mim');
const redes = document.querySelector('#minhas-redes');

const infoSobre = document.querySelector('#informacao-sobre-mim');
const infoRedes = document.querySelector('#informacao-minhas-redes');

sobre.addEventListener('click', function () {
    if (infoSobre.classList.contains('selecionado')) return;

    infoSobre.classList.add('selecionado');
    infoRedes.classList.remove('selecionado');

    sobre.classList.add('selecionado');
    redes.classList.remove('selecionado');
});

redes.addEventListener('click', function () {
    if (infoRedes.classList.contains('selecionado')) return;

    infoRedes.classList.add('selecionado');
    infoSobre.classList.remove('selecionado');

    redes.classList.add('selecionado');
    sobre.classList.remove('selecionado');
});