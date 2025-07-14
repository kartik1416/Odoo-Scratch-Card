const rewards = [
  {
    text: "🎉 Congratulations! You get 5% Off on orders above Rs 399<br>Coupon Code - <b>SPSCRATCH5</b>",
    weight: 40
  },
  {
    text: "🎉 Woah! You get a stunning 10% off on orders above Rs 399<br>Coupon Code - <b>SPSCRATCH10</b>",
    weight: 10
  },
  {
    text: "🎁 Free! You got a 15ml Tester worth Rs 499<br>Coupon Code - <b>SPTEST15</b>",
    weight: 10
  },
  {
    text: "😢 Better luck next time. Your luck can be bad sometimes, but our Perfumes never!",
    weight: 40
  },
  {
    text: "👨‍💻 Hacker or What! You get Rs 100 off<br>Coupon Code - <b>SPSCRATCH100</b>",
    weight: 10
  }
];

// Weighted random selection
function getRandomReward() {
  const total = rewards.reduce((acc, r) => acc + r.weight, 0);
  const rand = Math.random() * total;
  let sum = 0;
  for (let r of rewards) {
    sum += r.weight;
    if (rand <= sum) return r;
  }
}

const canvas = document.getElementById("scratch-canvas");
const ctx = canvas.getContext("2d");
const rewardText = document.getElementById("reward-text");

const reward = getRandomReward();
rewardText.innerHTML = reward.text;
rewardText.style.visibility = "hidden";

// Scratch mask
ctx.fillStyle = "#c2b280"; // gold-ish scratch color
ctx.fillRect(0, 0, canvas.width, canvas.height);

canvas.addEventListener("mousemove", scratch);
canvas.addEventListener("mousedown", () => isDrawing = true);
canvas.addEventListener("mouseup", () => isDrawing = false);

let isDrawing = false;
function scratch(e) {
  if (!isDrawing) return;
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  ctx.clearRect(x, y, 20, 20);

  if (getScratchPercent() > 40) {
    rewardText.style.visibility = "visible";
  }
}

// Calculates how much area is scratched
function getScratchPercent() {
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  let scratched = 0;
  for (let i = 0; i < imageData.data.length; i += 4) {
    if (imageData.data[i + 3] === 0) scratched++;
  }
  return (scratched / (canvas.width * canvas.height)) * 100;
}
