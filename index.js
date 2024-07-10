// Click Function Trigger

let weightInput = document.getElementById("parameter1");
let heightInput = document.getElementById("parameter2");

let calculate = document.getElementById("calculateButton");

let output = document.getElementById("output");

function bmiCalculator() {
  let kilograms = parseInt(weightInput.value);
  let centimeters = parseInt(heightInput.value);

  let bmi = Number((kilograms / (centimeters/100) ** 2).toFixed(2));

  output.textContent = "Your BMI is " + bmi;
}

calculate.addEventListener("click", bmiCalculator);

// Enter-Key Function Trigger

weightInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    calculate.click();
  }
});

heightInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    calculate.click();
  }
});
