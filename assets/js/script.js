// This function used to get the maximum number from the entered input and display a message with the result
function calculateMax() {
    // Get the numbers entered from the input field
    let inputField = document.getElementById("numbers-field");
    let inputValue = inputField.value.trim();

    // Get the elements necessary for displaying warning message and result
    let warningText = document.getElementById("warning");
    let resultText = document.getElementById("output");

    // Create an array from the numbers entered
    let numbersArray = inputValue.split(",").map(num => Number(num.trim()));

    // Check if the input field is not empty and that all elements in the array are numbers
    if (inputValue === "" || numbersArray.some(num => isNaN(num))) {
        warningText.textContent = "Invalid input. Please enter valid numbers.";
        resultText.textContent = "";
    } else {
        // Calculate the maximum value and display the result
        let maxValue = getMax(numbersArray);
        resultText.textContent = "The maximum value is: " + maxValue;
        warningText.textContent = "";
    }
}

// This function is responsible for getting the maximum element from the array
function getMax(arr) {
    let max = -Infinity; // Using -Infinity ensures that the maximum will be any valid number
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
