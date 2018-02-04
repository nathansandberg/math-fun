function ask11() {
    let question = prompt('What about trying to guess the name of one my wives?');
    const wives = ['Geraldine', 'Bastille', 'Nancy'];

    for(let i = 0; i <= 3; i++){
        if(wives.includes(question)){
            alert('WOW, you\'re Correct' + qSix + ' The names of my wives are: ' + wives);
            break;
        }else
            alert('Take another guess...');
        question = prompt('What is one of my wives names?');
    }
    alert('Congratulations ' + qSix + ', You got' + i + 'out of 7 questions correct');
}

ask11();
----------------------------------------------------------------------------------------------------------------------------------------
function sum(num,num2){ 
    const numSum = num + num2;
    return [numSum, 'The sum of ' + num + ' and ' + num2 + ' is ' + numSum + '.'];
}
testSum(4, 7);

function multiply(num1,num2){          
    const answer = num1 * num2;
    return [ answer, 'The product of ' + num1 + ' and ' + num2 + ' is ' + answer + '.'];
}
testMultiply(5, 9);

function sumAndMultiply(a,b,c){ 
    const small = sum(a, b)[0];
    const big = sum(small, c)[0];
    const cat = multiply(a,b)[0];
    const dog = multiply(cat, c)[0];
    return[big, dog, a + ' and ' + b + ' and ' + c + ' sum to ' + big + '.' , 'The product of ' + a + ' and ' + b + ' and ' + c + ' is ' + dog + '.' ];
}
testSumAndMultiply(4,7,5);

function sumArray(testArray){ 
    testArray = [2, 3, 4];
    const green = sum(testArray[1], testArray[2]);
    //const yellow = sum(green, testArray[2]);
    return [green, 'was passed in as an array of numbers, and 9 is their sum.'];
}
testSumArray();