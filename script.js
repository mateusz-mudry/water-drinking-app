function waterAmount() {
  const weightInput = document.getElementById("my-weight");
  let weight = weightInput.value * 30;

  let resultDiv = document.getElementById("result");
  resultDiv.textContent = weight + " ml";

  let bottleDiv = document.getElementById("bottle");
  bottleDiv.textContent = (weight / 1500).toFixed(1);

  let glassDiv = document.getElementById("glass");
  glassDiv.textContent = (weight / 350).toFixed(1);

  let cupDiv = document.getElementById("cup");
  cupDiv.textContent = (weight / 200).toFixed(1);
}

let inputElement = document.getElementById("my-weight");
inputElement.addEventListener("input", waterAmount);
