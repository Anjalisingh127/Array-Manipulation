// Initialize the array
let numbers = [5, 3, 8, 1, 2];

// Function to add a number to the array
function addNumber(array, number) {
    array.push(number);
}

// Function to remove the first occurrence of a number from the array
function removeNumber(array, number) {
    const index = array.indexOf(number);
    if (index !== -1) {
        array.splice(index, 1);
    }
}

// Function to sort the numbers in ascending order and return a new array
function sortNumber(array) {
    return array.slice().sort((a, b) => a - b);
}

// Function to calculate the sum of numbers in the array
function calculateSum(array) {
    return array.reduce((sum, num) => sum + num, 0);
}

// Function to calculate the average of numbers in the array
function calculateAverage(array) {
    const sum = calculateSum(array);
    return array.length > 0 ? sum / array.length : 0;
}

// Demonstrate the use of each function
console.log('Original Array:', numbers);

// Add a number
addNumber(numbers, 7);
console.log('After Adding 7:', numbers);

// Remove a number
removeNumber(numbers, 3);
console.log('After Removing 3:', numbers);

// Sort the numbers
let sortedNumbers = sortNumber(numbers);
console.log('Sorted Array:', sortedNumbers);

// Calculate Sum
let sum = calculateSum(numbers);
console.log('Sum of Array:', sum);

// Calculate Average
let average = calculateAverage(numbers);
console.log('Average of Array:', average);
