function getNumericInputs() {
  const inputs = document.querySelectorAll('input[type="number"]');
  const values = {};
  inputs.forEach((input) => {
    const key = input.name || input.getAttribute("data-key");
    if (key) {
      values[key] = Number(input.value);
    }
  });
  return values;
}

function getValueByKey(key) {
  const data = getNumericInputs(key);
  return data[key];
}
