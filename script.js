/*Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93. 
//Programmatically subtract the value of the first element in the array from the value in the last element of the array.
//Do not use numbers to reference the last element, find it programmatically. ages[7] - ages[0] is not allowed! */


let ages = [3, 9, 23, 64, 2, 8, 28, 93] //Array holds values, ages.
console.log ("Ages:", ages);
let minusAge = ages[ages.length - 1] - ages[0]; // ages[ages.length - 1] - accesses the last element of the ages of the array. ages[0] - accesses the first element.
console.log("minusAge", minusAge);

//Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).

ages.push(99); //.push() adds a new element.
console.log("Ages after pushing a new value", ages);
let minusAgePush = ages[ages.length - 1] - ages [0]; //acesses last element and substracts first element.
console.log("minusAge", minusAgePush);

//Use a loop to iterate through the array and calculate the average age.

let sumOfAges = 0;

for(let i = 0; i < ages.length; i++) {
   sumOfAges += ages[i];
   console.log("index:", i, "sumOfAges:", sumOfAges);
}
console.log("Total Sum", sumOfAges);
let average = sumOfAges / ages.length; // sumOfAges is the total sum of ages and ages.length is the number of elements.
console.log("Average", average);

/* Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
a. Use a loop to iterate through the array and calculate the average number of letters per name. */

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let totalCharacters = 0; //stores accumulative sum of all characters.

for (let i = 0; i < names.length; i++) {
    totalCharacters += names [i].length;  //length of names is added to the totalCharacters variable.
    console.log("index", i, "name:", names [i], "totalCharacters:", totalCharacters);
}
let averageName = totalCharacters / names.length; 
console.log("Average number of letters per name:", averageName);

// b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.

let concatNames = ""; //empty string that will store concatenated names.
for (let i = 0; i < names.length; i++) {
concatNames = concatNames.concat(names[i] + " ");  // each name is added to concatNames.
console.log(i, "Names concatenated:", concatNames);
}

//How do you access the last element of any array?
console.log("Last element of ages array:", ages[ages.length - 1]);

//How do you access the first element of any array?
console.log("First element of ages array:", ages [0]);

/* Create a new array called nameLengths. Write a loop to iterate over the previously created names array 
and add the length of each name to the nameLengths array. */

let nameLengths = []; //empty array to store name from each name from the names array.
for (let i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length); // takes lenght of names and adds it to the nameLenghts array with .push().
    console.log("Name lenghts array:", nameLengths);
}

/* Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.*/
let charactersTotal = 0; 
for(let i = 0; i< nameLengths.length; i++) {
    charactersTotal += nameLengths[i]; //accumulates the total length of all names in the array.
    console.log("CharactersTotal:", charactersTotal);
}

/* Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. 
(i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello'). */

function concatWords(word, n){ // word: a string you want to replead. "n" - number of times you want to repead the word.
console.log("Word Parameter:", word, "n Parameter:", n);
let concat = word.repeat(n); // String method that repears the string "n" times.
console.log(concat);
}
concatWords ("hello", 3); //call function

/* Write a function that takes two parameters, firstName and lastName, and returns a full name. 
The full name should be the first and the last name separated by a space. */

function fullName(firstName, lastName) {
    let fullName = firstName + " " + lastName;
    console.log(fullName);
}
fullName("Alejandra", "Alvarez");

//Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

let numbers1 = [100, 150, 200, 150];
let numbers2 = [1, 2, 3, 4];

function sumNumbersArray(array) {
    let total = 0;

    for (let i = 0; i < array.length; i++) {
    total += array[i];
    console.log("Total:", total);
}

if (total > 100) {
    console.log(true);
    return true;

} else {
    console.log(false);
    return false;
}
}
sumNumbersArray(numbers1);

//Write a function that takes an array of numbers and returns the average of all the elements in the array.

function calculateNumbersAverage(array) {
    let total = 0;

    for (let i = 0; i < array.length; i++) {
        total += array [i];
        console.log("Total", total);
    }
    let average = total / array.length
    console.log("Average of numbers:", average);
    return average;

}
calculateNumbersAverage(numbers1);


/* Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater 
than the average of the elements in the second array. */

let numbers3 = [50, 100, 150];
let numbers4 = [30, 60, 90];

function twoAverages(array1,array2) {
    console.log("Parameters;", array1, array2);
    let total1 = 0;
    let total2 = 0;
for (const number of array1) { //goes through array1 and adds to total
    total1 += number;
    console.log("Current number loop1:", number, "Total1:", total1);
}
for (const number of array2) {
    total2 += number;
    console.log("Current number loop2:", number, "Total2:", total2);
}

let average1 = total1 / array1.length; //gets averages
let average2 = total2 / array2.length;

console.log("Averages", average1, average2);

if (average1 > average2) {
    console.log("First array is greater:", true);
    return true;
} else if (average1 < average2) {
    console.log(false);
    return false; 
} else { 
console.log("Numbers are equal");
 
}
}

twoAverages(numbers3, numbers4);

/* Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, 
and returns true if it is hot outside and if moneyInPocket is greater than 10.50. */

function willBuyDrink(isHotOutside, moneyInPocket) {
    console.log("Parameters", isHotOutside, moneyInPocket);
    let buyDrink = isHotOutside == true && moneyInPocket > 10.50;
    console.log("Buy a drink?", buyDrink);
    return buyDrink;
}
willBuyDrink(true, 11);

/* Create a function of your own that solves a problem. In comments, write what the function does and why you created it. */

/* I created a function that helps me determine if I have to take my dog out for a walk. 
I take him at 8 AM for the first time and then every four hours. */

function shouldWalkNico(currentHour, startHour = 8, intervalHours = 4) {
    
    let hoursSinceStart = (currentHour - startHour + 24) % 24; // % 24 modulo operation - gives you remainder when you divide two numbers.

    return hoursSinceStart % intervalHours === 0;
}

let currentHour = new Date().getHours(); 
let isWalkTime = shouldWalkNico(currentHour);

if (isWalkTime) {
    console.log("Yes, it's time to walk Nico.");
} else {
    console.log("No, it's not time to walk Nico yet.");
}

