const teclas = document.querySelectorAll('.key')        // Seleciona todo meu teclado


function tocarSom(idAudio) {        // Parametro aonde é necessario o ID do meu audio para tocar o piano
    document.querySelector(idAudio).play()          // .play para inciar o audio
}

for (contador = 0; contador < teclas.length; contador++) {
    const teclaSelecionada = teclas[contador]   //Tecla pressionado
    const audioSelecionado = teclaSelecionada.classList[3]      //Entre nas classes e seleciona a classe para complementar
    const idAudio = `#som_${audioSelecionado}`      // Complementar o meu audio que inicia com "som_" com a devida classe da tecla selecionada

    teclaSelecionada.onclick = function () {
        tocarSom(idAudio)
    }
}