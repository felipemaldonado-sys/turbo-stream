const totalSeconds = 15 * 60;
let remainingSeconds = totalSeconds;

function updateTimer() {
  const minutes = String(Math.floor(remainingSeconds / 60)).padStart(2, "0");
  const seconds = String(remainingSeconds % 60).padStart(2, "0");

  const timer = document.getElementById("timer");
  if (timer) {
    timer.textContent = `Turbo ${minutes}:${seconds}`;
  }

  remainingSeconds -= 1;

  if (remainingSeconds < 0) {
    remainingSeconds = totalSeconds;
  }
}

updateTimer();
setInterval(updateTimer, 1000);

const progressFill = document.getElementById("progressFill");
let progress = 54;
let direction = 1;

setInterval(() => {
  progress += direction * 2;
  if (progress >= 70) direction = -1;
  if (progress <= 52) direction = 1;

  if (progressFill) {
    progressFill.style.width = `${progress}%`;
  }
}, 500);

// CAMBIA ESTO POR TU DOMINIO EXACTO PUBLICADO
const SITE_HOST = "TU-DOMINIO-EXACTO.vercel.app";

// CAMBIA ESTO POR EL SEGUNDO CANAL REAL
const streams = [
  {
    label: "Stream 1",
    channel: "felipe_maldonado2"
  },
  {
    label: "Stream 2",
    channel: "OTRO_CANAL_AQUI"
  }
];

const twitchFrame = document.getElementById("twitchFrame");
const tabs = document.querySelectorAll(".stream-tab");

function buildTwitchUrl(channel) {
  return `https://player.twitch.tv/?channel=${channel}&parent=${SITE_HOST}&muted=true&autoplay=true`;
}

function setStream(channel) {
  if (twitchFrame) {
    twitchFrame.src = buildTwitchUrl(channel);
  }
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((btn) => btn.classList.remove("active"));
    tab.classList.add("active");
    setStream(tab.dataset.channel);
  });
});

// stream inicial
setStream(streams[0].channel);
