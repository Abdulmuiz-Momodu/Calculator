let calculation = '';

function displayCalculation() {
    document.querySelector('.display').innerHTML = calculation;
    console.log(calculation);
}

function removeCalculation() {
    calculation = '';
    displayCalculation(); 
}

function deleteLastCharacter() {
    // Remove the last character
    calculation = calculation.slice(0, -1); 
    // Call the display function to update the display
    displayCalculation(); 
}

// Example usage
// Assuming you have a button to add numbers to calculation, you might have something like this:
function addToCalculation(value) {
    calculation += value;
    displayCalculation();
}



