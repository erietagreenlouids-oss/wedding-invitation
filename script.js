const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let hasStarted = false;

/* 🔊 PLAY με ΠΡΩΤΟ ΑΓΓΙΓΜΑ ΟΠΟΥΔΗΠΟΤΕ */
function startMusicOnce() {
  if (!hasStarted) {
    music.volume = 0.6;
    music.play().then(() => {
      hasStarted = true;
      musicBtn.textContent = "🔊";
    }).catch(() => {});
  }
}

/* Πρώτο touch / click στη σελίδα */
document.addEventListener("touchstart", startMusicOnce, { once: true });
document.addEventListener("click", startMusicOnce, { once: true });

/* 🔈 ΚΟΥΜΠΙ ΜΟΥΣΙΚΗΣ */
musicBtn.addEventListener("click", (e) => {
  e.stopPropagation(); // ΠΟΛΥ ΣΗΜΑΝΤΙΚΟ

  if (music.paused) {
    music.play().then(() => {
      hasStarted = true;
      musicBtn.textContent = "🔊";
    }).catch(() => {});
  } else {
    music.pause();
    musicBtn.textContent = "🔈";
  }
});

/* ⏳ COUNTDOWN */
const weddingDate = new Date("October 25, 2026 16:00:00").getTime();
const countdown = document.getElementById("countdown");

setInterval(() => {
  const now = new Date().getTime();
  const diff = weddingDate - now;

  if (diff <= 0) {
    countdown.textContent = "Σήμερα είναι η μεγάλη μέρα!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  countdown.textContent =
    `${days} Ημέρες  ${hours} Ώρες  ${minutes} Λεπτά  ${seconds} Δευτερόλεπτα`;
}, 1000);
