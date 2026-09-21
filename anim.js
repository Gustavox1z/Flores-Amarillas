var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Ajuste global en segundos:
// Si la letra sigue apareciendo antes de tiempo, sube este número (ej. 2.0 o 2.5).
// Si ahora aparece tarde, bájalo (ej. 1.0 o 0.8).
var delayOffset = 1.5;

var lyricsData = [
  { text: "At the time", time: 15 },
  { text: "The whisper of birds", time: 18 },
  { text: "Lonely before the sun cried", time: 27 },
  { text: "Fell from the sky", time: 32 },
  { text: "Like water drops", time: 33 },
  { text: "Where I'm now? I don't know why", time: 41 },
  { text: "Nice butterflies in my hands", time: 47 },
  { text: "Too much light for twilight", time: 54 },
  { text: "In the mood for the flowers love", time: 59 },
  { text: "That vision", time: 67 },
  { text: "Really strong, blew my mind", time: 72 },
  { text: "Silence Let me see what it was", time: 78 },
  { text: "I only want to live in clouds", time: 83 },
  { text: "Where I'm now? I don't know why", time: 91 },
  { text: "Nice butterflies in my hands", time: 97 },
  { text: "Too much light for twilight", time: 104 },
  { text: "In the mood for the flowers love", time: 108 },
  { text: "At the time", time: 144 },
  { text: "The whisper of birds", time: 148 },
  { text: "Lonely before the sun cried", time: 153 },
  { text: "Fell from the sky", time: 158 },
  { text: "Like water drops", time: 164 },
  { text: "Where I'm now? I don't know why", time: 169 },
  { text: "Nice butterflies in my hands", time: 176 },
  { text: "Too much light for twilight", time: 183 },
  { text: "In the mood for the flowers", time: 188 },
  { text: "Love.", time: 191 }
];

function syncLyrics() {
  if (audio && !audio.paused && !audio.ended) {
    // Aplica la compensación para que la letra no se adelante
    var currentTime = audio.currentTime - delayOffset;

    var currentLine = lyricsData.find(
      (line) => currentTime >= line.time && currentTime < line.time + 4.8
    );

    if (currentLine) {
      if (lyrics.innerHTML !== currentLine.text) {
        lyrics.innerHTML = currentLine.text;
        lyrics.style.opacity = 1;
      }
    } else {
      lyrics.style.opacity = 0;
    }
  }
  requestAnimationFrame(syncLyrics);
}

if (audio) {
  audio.addEventListener("play", () => {
    requestAnimationFrame(syncLyrics);
  });
  if (!audio.paused) {
    requestAnimationFrame(syncLyrics);
  }
}

function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  if (titulo) {
    titulo.style.animation = "fadeOut 3s ease-in-out forwards";
    setTimeout(() => {
      titulo.style.display = "none";
    }, 3000);
  }
}

setTimeout(ocultarTitulo, 216000);
// Inserta la letra 'Y' en cada corazon SVG automaticamente
document.querySelectorAll("svg.heart").forEach((heartSvg) => {
  var textElem = document.createElementNS("http://www.w3.org/2000/svg", "text");
  textElem.setAttribute("x", "16");
  textElem.setAttribute("y", "17");
  textElem.setAttribute("text-anchor", "middle");
  textElem.setAttribute("dominant-baseline", "central");
  textElem.setAttribute("fill", "#ffffff");
  textElem.setAttribute("font-size", "11");
  textElem.setAttribute("font-weight", "bold");
  textElem.setAttribute("font-family", "Arial, sans-serif");
  textElem.textContent = "Y";
  heartSvg.appendChild(textElem);
});