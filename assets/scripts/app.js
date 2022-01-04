let currentResult = 0;
let numberEntries = [];

function calculatedOutput(operator, previousNumber, inputedNumber) {
  const calcDescription = `${previousNumber} ${operator} ${inputedNumber}`;
  outputResult(currentResult, calcDescription);
}

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };
  numberEntries.push(logEntry);
  console.log(numberEntries);
}

function calculateResult(calculationType) {
  const enteredNumber = parseInt(userInput.value);
  const initialNumber = currentResult;
  if (calculationType === "ADD") {
    currentResult += enteredNumber;
    mathOperator = "+";
  } else if (calculationType === "SUBTRACT") {
    currentResult -= enteredNumber;
    mathOperator = "-";
  } else if (calculationType === "MULTIPY") {
    currentResult *= enteredNumber;
    mathOperator = "*";
  } else {
    currentResult /= enteredNumber;
    mathOperator = "/";
  }
  calculatedOutput(mathOperator, initialNumber, enteredNumber);
  writeToLog(calculationType, initialNumber, enteredNumber, currentResult);
}

function add() {
  calculateResult("ADD");
}
function substract() {
  calculateResult("SUBTRACT");
}
function multiply() {
  calculateResult("MULTIPY");
}
function divide() {
  calculateResult("DIVIDE");
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", substract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
