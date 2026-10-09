const celebrateBtn = document.getElementById("celebrateBtn");
const wishBtn = document.getElementById("wishBtn");
const toast = document.getElementById("toast");
const confettiLayer = document.getElementById("confettiLayer");
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}

function launchConfetti(amount = 100) {
  const colors = ["#ff77c8", "#a58bff", "#ffd58a", "#9cf5dc", "#ffffff"];
  for (let i = 0; i < amount; i++) {
    const piece = document.createElement("span");
    piece.className = "confetti";
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.setProperty("--duration", `${2.2 + Math.random() * 2.8}s`);
    piece.style.setProperty("--drift", `${-130 + Math.random() * 260}px`);
    piece.style.animationDelay = `${Math.random() * 0.7}s`;
    piece.style.width = `${5 + Math.random() * 6}px`;
    piece.style.height = `${7 + Math.random() * 9}px`;
    confettiLayer.appendChild(piece);
    setTimeout(() => piece.remove(), 6000);
  }
}

celebrateBtn.addEventListener("click", () => {
  launchConfetti(150);
  showToast("🎉 Make some noise for Yash!");
});

wishBtn.addEventListener("click", () => {
  document.getElementById("wishCard").scrollIntoView({ behavior: "smooth", block: "center" });
  showToast("💜 Make a wish, Yash. The world is yours!");
  launchConfetti(45);
});

// A gentle sprinkle on first load.
window.addEventListener("load", () => {
  setTimeout(() => launchConfetti(35), 500);
});
