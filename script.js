const tempInput = document.getElementById('tempInput');
const conversionRadios = document.querySelectorAll('input[name="conversion"]');
const resultDiv = document.getElementById('result');
function celsiusToFahrenheit(c) {
  return (c * 9) / 5 + 32;
}

function fahrenheitToCelsius(f) {
  return ((f - 32) * 5) / 9;
}

function updateResult() {
  const tempValue = tempInput.value.trim();

  if (tempValue === '' || isNaN(tempValue)) {
    resultDiv.textContent = 'Please enter a valid number.';
    resultDiv.style.color = 'red';
    return;
  }

  const tempNumber = parseFloat(tempValue);
  const selectedConversion = document.querySelector(
    'input[name="conversion"]:checked'
  ).value;

  let convertedTemp;
  if (selectedConversion === 'cToF') {
    convertedTemp = celsiusToFahrenheit(tempNumber);
    resultDiv.textContent = `${tempNumber.toFixed(2)} °C = ${convertedTemp.toFixed(2)} °F`;
  } else {
    convertedTemp = fahrenheitToCelsius(tempNumber);
    resultDiv.textContent = `${tempNumber.toFixed(2)} °F = ${convertedTemp.toFixed(2)} °C`;
  }
  resultDiv.style.color = '#fff';
}

tempInput.addEventListener('input', updateResult);
conversionRadios.forEach((radio) =>
  radio.addEventListener('change', updateResult)
);

resultDiv.textContent = 'Converted temperature will appear here.';
