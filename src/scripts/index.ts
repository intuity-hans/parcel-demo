import { getRandomInt } from "./lib";

const container = document.getElementById("random-number");

if (container) {
  console.log("found container");

  const num = getRandomInt(100);
  container.textContent = num.toFixed(0);
} else {
  console.log("not found");
}
