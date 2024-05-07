function performOperation() {
    // Get user input from input fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    // Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
    // Perform the operation
                    let results =[];
                    let result = multiply(num1, num2);
                    results.push(result);
                    result = add(num1, num2);
                    results.push(result);
                    result = divide(num1, num2);
                    results.push(result);
                    // Display the result
                    displayResult(results);
                } else {
                    displayResult('Please enter valid numbers');
                }
            }
            function multiply(a, b) {
                // Introduce a debugger statement to pause execution
                debugger;
                // Multiply the numbers
                return a * b;
            }
            function add(a, b) {
                // Introduce a debugger statement to pause execution
                debugger;
                // Add the numbers
                return a + b;
            }
            function divide(a, b) {
                // Introduce a debugger statement to pause execution
                debugger;
                // Divide the numbers
                return a / b;
            }

            function displayResult(result) {
                // Display the result in the paragraph element
                const resultElement = document.getElementById('result');
                resultElement.textContent = `The results are: ${result}`;
            }