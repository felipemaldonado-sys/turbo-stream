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

const twitchScript = document.createElement("script");
twitchScript.src = "https://player.twitch.tv/js/embed/v1.js";

twitchScript.onload = () => {
  new Twitch.Player("twitch-player", {
    width: "100%",
    height: "100%",
    channel: "felipe_maldonado2",
    parent: ["turbo-stream-xxx.vercel.app"],
    muted: true,
    autoplay: true
  });
};

document.body.appendChild(twitchScript);
