'use strict';

/*
    For each Problem:
        
    Test your function by hand in the browser's console to get it working.
    When you think it is finished, uncomment the call
    for its test function to see if it passes.

    Once you get the test passing, do an a-c-p cycle and synchronize the 
    code between GitHub and your laptop. Don't forget to create 
    a new branch for your work on the next question!
*/


///////////////////////////////////// 
/* Problem 1 (this is your demo that we'll solve in class)

Write a function called sum() that takes in two numbers as
arguments and then returns an array where the first element 
is the sum of those numbers, and the second element is a concatenated
string that EXACTLY follows this example and uses 
the values that were input into the function:

"The sum of 4 and 7 is 11."
*/

// Write your code here
function sum(num,num2){ //eslint-disable-line
    const numSum = num + num2;
    return [numSum, 'The sum of ' + num + ' and ' + num2 + ' is ' + numSum + '.'];
}

// Here is the test for sum(); uncomment it to run it
testSum(4, 7);


// // Since the sum function returns an array (because we set it up that way), 
// we need to get the number inside of the array after it calculates what we told it to 
// calculate. By referencing index 0 at [0], we are saying we need to return the 0 index of 
// the array that the sum function created



/////////////////////////////////////
/* Problem 2
Write a function called multiply() that takes in two numbers 
as arguments and returns an array where the first element is the 
product of those numbers, and the second element is a string 
that EXACTLY follows this example and uses the values that 
were input into the function:

"The product of 5 and 9 is 45."
*/

// Write your code here
function multiply(num1, num2){           //eslint-disable-line
    const answer = num1 * num2;
    return [ answer, 'The product of ' + num1 + ' and ' + num2 + ' is ' + answer + '.'];
}

// Here is the test for multiply(); uncomment it to run it

testMultiply(5, 9);


/////////////////////////////////////
//Problem 3

// Write a function called sumAndMultiply() that takes in three 
// numbers as separate arguments and returns an array where the 
// first element is the sum of those three numbers, the second 
// element is the product of those three numbers,  and the third 
// and fourth elements are strings that EXACTLY follow this example 
// and use the values that were input into the function:

// Third element: "4 and 7 and 5 sum to 16."
// Fourth element: "The product of 4 and 7 and 5 is 140."

// IMPORTANT DETAIL! IMPORTANT DETAIL! IMPORTANT DETAIL! 

//     You may not use the arithmetic 
//     operators + and * in this function. To do addition, 
//     use your sum() function, and to do multiplication, 
//     use your multiply() function.

// IMPORTANT DETAIL! IMPORTANT DETAIL! IMPORTANT DETAIL!


//  Write your code here

function sumAndMultiply(a,b,c){ //eslint-disable-line
    const small = sum(a, b)[0];
    const big = sum(small, c)[0];
    const cat = multiply(a,b)[0];
    const dog = multiply(cat, c)[0];
    return[big, dog, a + ' and ' + b + ' and ' + c + ' sum to ' + big + '.' , 'The product of ' + a + ' and ' + b + ' and ' + c + ' is ' + dog + '.' ];
}





// Here is the test for sumAndMultiply(); uncomment it to run it
testSumAndMultiply(4,7,5);


/////////////////////////////////////
/* Problem 4
Write a function called sumArray() that takes in an array of 
numbers as its single argument and then returns an array where
the first element is the sum of the numbers in the array, and 
the second element is a string that EXACTLY follows this example 
and uses the values that were input into the function:

"2,3,4 was passed in as an array of numbers, and 9 is their sum."

IMPORTANT DETAIL! IMPORTANT DETAIL! IMPORTANT DETAIL! 

    You may not use the arithmetic 
    operators + and * in this function. To do addition, 
    use your sum() function, and to do multiplication, 
    use your multiply() function.

IMPORTANT DETAIL! IMPORTANT DETAIL! IMPORTANT DETAIL!
*/

// Write your code here

function sumArray(testArray){ //eslint-disable-line
    const green = sum(testArray[0], testArray[1])[0];
    const yellow = sum(green, testArray[2])[0];
    return [yellow, testArray  + ' was passed in as an array of numbers, and ' + yellow + ' is their sum.'];
}


// // // Here is the test for sumArray(); uncomment it to run it

testSumArray(2,3,4);


/////////////////////////////////////
/* Problem 5
Write a function called multiplyArray() that takes an array of numbers
as its argument and returns an array whose first element 
is the product of those numbers, and the second element is 
a string that EXACTLY follows this example and uses the values
that were input into the function:

"The numbers 2,3,4 have a product of 24."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this 
function. To do multiplication, use your multiply() function that 
you've already created. You're going to have to be resourceful to 
figure out how to do this.

Test this function by hand in the console to get it working, and 
when you think it is finished, uncomment the call for the 
testMultiplyArray() function and see if the test passes.

Once you get the test passing, do an a-c-p cycle and synchronize the 
code between GitHub and your laptop. Don't forget to create a 
new branch for your work on the next question!
*/

// Write your code here
function multiplyArray(testArray){ //eslint-disable-line
    const orange = multiply(testArray[0], testArray[1])[0];
    const black = multiply(orange, testArray[2])[0];
    return [black, 'The numbers ' + testArray + ' have a product of ' + black + '.'];
}

// Here is the test for multiplyArray(); uncomment it to run it
testMultiplyArray(2,3,4);