document.getElementById('calculate-btn').addEventListener('click', function () {
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value);

  if (!weight || !height || weight <= 0 || height <= 0) {
    document.getElementById('result').innerText = 'Please enter valid values!';
    return;
  }

  const heightInMeters = height / 100;
  const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

  let category;
  if (bmi < 18.5) {
    category = 'Underweight';
  } else if (bmi < 24.9) {
    category = 'Normal weight';
  } else if (bmi < 29.9) {
    category = 'Overweight';
  } else {
    category = 'Obesity';
  }

  document.getElementById('result').innerText = `Your BMI is ${bmi} (${category})`;
});
