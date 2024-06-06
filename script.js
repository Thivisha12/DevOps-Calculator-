let expression = '';

function append(btn) {
  expression += btn;
  document.getElementById('display').value = expression;
}

function clearDisplay() {
  expression = '';
  document.getElementById('display').value = '';
}

function calculate() {
  try {
    const result = eval(expression);
    const formattedResult = parseFloat(result.toFixed(2));
    document.getElementById('display').value = formattedResult;
    expression = formattedResult.toString();
  } catch (error) {
    const firstNumber = expression.split(/[^0-9\.]+/)[0];
    document.getElementById('display').value = firstNumber || '';
    expression = firstNumber || '';
  }
}

function backspc() {
  expression = expression.slice(0, -1);
  document.getElementById('display').value = expression;
}