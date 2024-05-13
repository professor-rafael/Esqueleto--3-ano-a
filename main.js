const textos = document.querySelectorAll(".aba-conteudo");
const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2024-12-29T00:00:00");

const tempo = tempoObjetivo1 ;

function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);
  
    segundos %= 60;
    minutos %= 60;
    horas %= 24;
    if (tempoFinal > 0) {
      return [dias, horas, minutos, segundos];
    } else {
      return [0, 0, 0, 0];
    }
  }

  function atualizaCronometro() {
    document.getElementById("dias0").textContent = calculaTempo(tempo)[0];
    document.getElementById("horas0").textContent = calculaTempo(tempo)[1];
    document.getElementById("min0").textContent = calculaTempo(tempo)[2];
    document.getElementById("seg0").textContent = calculaTempo(tempo)[3];
  
    for (let i = 0; i < contadores.length; i++) {
      // contadores[i].textContent = calculaTempo(tempos[i]);
    }
  }

  function comecaCronometro() {
    atualizaCronometro();
    setInterval(atualizaCronometro, 1000);
  }
  
  comecaCronometro();