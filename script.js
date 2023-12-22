function waterAmount() {
  const weightInput = document.getElementById("my-weight");
  let weight = weightInput.value * 30;

  let resultDiv = document.getElementById("result");
  resultDiv.textContent = weight + " ml";

  let bottleDiv = document.getElementById("bottle");
  bottleDiv.textContent = (weight / 1500).toFixed(1) + " butelek wody 1,5 l";

  let glassDiv = document.getElementById("glass");
  glassDiv.textContent = (weight / 350).toFixed(1) + " szklanek 350 ml";

  let cupDiv = document.getElementById("cup");
  cupDiv.textContent = (weight / 200).toFixed(1) + " kubków 200 ml";
}

let inputElement = document.getElementById("my-weight");
inputElement.addEventListener("input", waterAmount);
