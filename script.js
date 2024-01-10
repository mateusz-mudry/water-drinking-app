function animateNumber(element, targetNumber) {
  let currentNumber = 0;
  const animationSpeed = 10;
  const updateInterval = 2;

  const update = () => {
    if (currentNumber < targetNumber) {
      currentNumber += Math.ceil(
        (targetNumber - currentNumber) / animationSpeed
      );
      element.textContent = currentNumber + " ML";
      setTimeout(update, updateInterval);
    } else {
      element.textContent = targetNumber + " ML";
    }
  };

  update();
}

function waterAmount() {
  const weightInput = document.getElementById("my-weight");
  let weight = weightInput.value * 30;

  // let resultDiv = document.getElementById("result");
  // resultDiv.textContent = weight + " ml";

  let resultDiv = document.getElementById("result");
  resultDiv.textContent = "0 ML";
  animateNumber(resultDiv, weight);

  let bottleDiv = document.getElementById("bottle");
  bottleDiv.textContent = (weight / 1500).toFixed(1);

  let glassDiv = document.getElementById("glass");
  glassDiv.textContent = (weight / 350).toFixed(1);

  let cupDiv = document.getElementById("cup");
  cupDiv.textContent = (weight / 200).toFixed(1);
}

// let inputElement = document.getElementById("my-weight");
// inputElement.addEventListener("input", waterAmount);

let calculateButton = document.getElementById("calculateButton");
calculateButton.addEventListener("click", waterAmount);
