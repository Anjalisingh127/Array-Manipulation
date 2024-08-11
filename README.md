# Array-Manipulation

## Objective

Create a JavaScript program that performs various operations on an array of numbers. The program should include functionalities to add, remove, sort numbers, and calculate the sum and average of the numbers in the array. Utilize array methods to achieve these tasks.

## Requirements

1. **Initialize the Array**

   Create an array named `numbers` and initialize it with a set of numbers, e.g., `[5, 3, 8, 1, 2]`.

2. **Functions to Implement**

   - **Add a Number**

     Write a function `addNumber(array, number)` that takes an array and a number as arguments and adds the number to the array.

     ```javascript
     function addNumber(array, number) {
       array.push(number);
     }
     ```

   - **Remove a Number**

     Write a function `removeNumber(array, number)` that takes an array and a number as arguments and removes the first occurrence of that number from the array.

     ```javascript
     function removeNumber(array, number) {
       const index = array.indexOf(number);
       if (index !== -1) {
         array.splice(index, 1);
       }
     }
     ```

   - **Sort the Numbers**

     Write a function `sortNumber(array)` that takes an array as an argument and returns a new array with the numbers sorted in ascending order.

     ```javascript
     function sortNumber(array) {
       return array.slice().sort((a, b) => a - b);
     }
     ```

   - **Calculate Sum**

     Write a function `calculateSum(array)` that takes an array as an argument and returns the sum of the numbers in the array.

     ```javascript
     function calculateSum(array) {
       return array.reduce((sum, num) => sum + num, 0);
     }
     ```

   - **Calculate Average**

     Write a function `calculateAverage(array)` that takes an array as an argument and returns the average of the numbers in the array.

     ```javascript
     function calculateAverage(array) {
       const sum = calculateSum(array);
       return array.length > 0 ? sum / array.length : 0;
     }
     ```

3. **Main Program**

   - Initialize the `numbers` array.
   - Demonstrate the use of each function by calling them and displaying the results.
   - Print the original and modified arrays after each operation.

   ```javascript
   // Initialize the array
   let numbers = [5, 3, 8, 1, 2];
   
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
