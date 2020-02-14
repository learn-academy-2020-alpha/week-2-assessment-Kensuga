// ASSESSMENT 2: Coding Practical Questions

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.
// Use the test variables provided.

var num1 = 15
// Expected output: "15 is divisible by three"

var num2 = 0
// Expected output: "0 is divisible by three"

var num3 = -7
// Expected output: "-7 is not divisble by three"

const divideByThree = arg =>{
    if(arg%3 === 0){
        console.log(`${arg} is divisible by three`);        
    } else if (arg%3 !== 0){
        console.log(`${arg} is not divisible by three`);
        
    }
}

divideByThree(num1);
divideByThree(num2);
divideByThree(num3);

// --------------------2) Create a function that takes in the randomNouns variable and returns an array with all the words capitalized.

var randomNouns = ["streetlamp", "potato", "teeth", "conclusion", "nephew", "temperature", "database"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew", "Temperature", "Database"]

const capitalize = arg => {
    let newArray = arg.map(word => { 
        upper = word.replace(/^\w/, c => c.toUpperCase()); 
        return upper;})
    return newArray;
    }

console.log(capitalize(randomNouns));

// --------------------3) Create a function that takes in the mixedDataArray array and returns an array with ONLY NUMBERS sorted from least to greatest.

var mixedDataArray = [true, 8, "hello", 90, -8, null, 0, 46, 59, 107, "hey!"]
// Expected output: [-8, 0, 8, 46, 59, 90, 107]

const onlyNumbers = arg => {
    let newArray = arg.filter(number => typeof number === "number").sort((a,b) => a - b);
    return newArray;
}

console.log(onlyNumbers(mixedDataArray));

// --------------------4) Create a function that takes in a string and logs the index of the first vowel.
// Use the test variables provided.

var vowelTester1 = "learn"
// Expected output: 1
var vowelTester2 = "throw"
// Expected output: 3

const findVowel = arg =>{
    let pos = arg.search(/[aeiou]/gi);
    return pos;
}

console.log(findVowel(vowelTester1));

// --------------------5) Create a function that takes three arguments - two numbers and a mathematical operation (+, -, *, /) and performs the given calculation. If the input tries to divide by 0, return: "Can't divide by 0!"

let calculator = (num1, oper, num2) => {
    let result = 0
    if (oper === "+"){
        return result = num1 + num2;
    } else if (oper === "-"){
        return result = num1 - num2;
    } else if (oper === "*"){
        return result = num1 * num2;
    } else if (oper === "/"){
        if (num2 === 0){
            return result = "You Cannot Divide By 0";
        } else {
            return result = num1 / num2;
        }
    }
}

// Uncomment and use the following console logs to test your function
console.log(calculator(3, "*", 9))
// Expected output: 27

console.log(calculator(16, "+", 3))
// Expected output: 19

console.log(calculator(89, "/", 0))
// Expected output: "Can't divide by 0!"
