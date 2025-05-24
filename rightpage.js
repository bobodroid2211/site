const hiddenMessages = [
  "масяня",
  "масяня",
  "масяня",
  "масяня",
  "масяня",
  "масяня",
  "масяня",
  "масяня",
  "масяня",
  "люблю вафлю",
];

const container = document.getElementById("hidden-messages-container");

function createMessage(text, x, y) {
  const msg = document.createElement("div");
  msg.className = "hidden-message";
  msg.textContent = text;
  msg.style.left = `${x}px`;
  msg.style.top = `${y}px`;
  container.appendChild(msg);

  // Анимация появления
  requestAnimationFrame(() => {
    msg.style.opacity = 1;
  });

  // Через 3 секунды скрываем и удаляем
  setTimeout(() => {
    msg.style.opacity = 0;
    setTimeout(() => {
      msg.remove();
    }, 500);
  }, 3000);
}

let lastTimeout = 0;

document.body.addEventListener("mousemove", (e) => {
  const now = Date.now();

  // Создаём не чаще, чем раз в 500мс, чтобы не перегружать
  if (now - lastTimeout > 500) {
    lastTimeout = now;

    const x = e.clientX + (Math.random() * 100 - 50);
    const y = e.clientY + (Math.random() * 50 - 25);

    const randomText =
      hiddenMessages[Math.floor(Math.random() * hiddenMessages.length)];
    createMessage(randomText, x, y);
  }
});