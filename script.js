function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += parseFloat(arr[i]);
    }
    return sum;
  }
  
  function calculateSum() {
    const numbersInput = document.getElementById('numbers');
    const resultElement = document.getElementById('result');
  
    const numbersString = numbersInput.value;
    const numbersArray = numbersString.split(',');
  
    const sum = sumArray(numbersArray);
  
    resultElement.textContent = `Sum: ${sum}`;
  }
  document.getElementById('calculate').addEventListener('click', calculateSum);
  