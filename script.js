const openGift = document.getElementById("openGift");
const letter = document.getElementById("letter");
const moreLove = document.getElementById("moreLove");
const ending = document.getElementById("ending");
const again = document.getElementById("again");

function reveal(section) {
  section.classList.remove("hidden");
  setTimeout(() => {
    section.scrollIntoView({ behavior: "smooth", block: "center" });
  }, 80);
}

openGift.addEventListener("click", () => reveal(letter));
moreLove.addEventListener("click", () => reveal(ending));

again.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Little floating birthday hearts / stars.
const doodles = ["♡", "♡", "✦", "✿", "·", "☆"];
const layer = document.querySelector(".sky-doodles");

for (let i = 0; i < 13; i++) {
  const item = document.createElement("span");
  item.textContent = doodles[i % doodles.length];
  item.style.left = Math.random() * 96 + "%";
  item.style.top = Math.random() * 95 + "%";
  item.style.fontSize = 12 + Math.random() * 18 + "px";
  item.style.animationDelay = Math.random() * 4 + "s";
  layer.appendChild(item);
}
