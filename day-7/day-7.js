// Exercises: Level 2

// 1. Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
// All of this is not necesary, there are already very good libraries to solve equations. Devs make complicated things easy, not the other way round.

let a = prompt("Value a");
let b = prompt("Value b");
let c = prompt("Value c");
function solveLinEquation(a, b, c) {
  const x = (-b - c) / a;
  const y = (-c - -a * -x) / b;
  return `x is ${x} and y is ${y}`;
}
console.log(solveLinEquation(a, b, c));

// 2. Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.

// console.log(solveQuadratic()) // {0}s
// console.log(solveQuadratic(1, 4, 4)) // {-2}
// console.log(solveQuadratic(1, -1, -2)) // {2, -1}
// console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
// console.log(solveQuadratic(1, 0, -4)) //{2, -2}
// console.log(solveQuadratic(1, -1, 0)) //{1, 0}

// Source: https://www.programiz.com/javascript/examples/quadratic-roots

let a = prompt("Value a");
let b = prompt("Value b");
let c = prompt("Value c");

function solveQuadEquation(a, b, c) {
  let root1, root2;
  let discriminant = b * b - 4 * a * c;

  if (discriminant > 0) {
    root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    console.log(`Quadratic equation are ${root1} and ${root2}`);
  } else if (discriminant == 0) {
    root1 = root2 = -b / (2 * a);
    // result
    console.log(`Quadratic equation are ${root1} and ${root2}`);
  } else {
    let realPart = (-b / (2 * a)).toFixed(2);
    let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
    // result
    console.log(
      `Quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`
    );
  }
}
console.log(solveQuadEquation(a, b, c));

// 3. Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.

function printArray(array) {
  for (const value of array) {
    console.log(value);
  }
}

printArray([6, 12, 1, 24]);

// 4. Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.

function showDateTime() {
  let date = new Date();
  let dateNow = date.getDate();
  let month = date.getUTCMonth();
  let year = date.getFullYear();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  return `${dateNow}/${month + 1}/${year} ${hour}:${minutes} `;
}

console.log(showDateTime());

// 5. Declare a function name swapValues. This function swaps value of x to y.

// swapValues(3, 4) // x => 4, y=>3
// swapValues(4, 5) // x = 5, y = 4

function swapValues(x, y) {
  console.log(`x = ${y}, y = ${x}`);
}
swapValues(4, 5);

// 6. Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).

// console.log(reverseArray([1, 2, 3, 4, 5]))
// [5, 4, 3, 2, 1]
// console.log(reverseArray(['A', 'B', 'C']))
// ['C', 'B', 'A']

function reverseArray(arr) {
  let newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  console.log(newArr);
}
reverseArray(["banana", "orange", "mango", "lemon"]);

// 7. Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.

capitalizeArray = (array) => {
  let capitalizedarray = [];

  for (const arr of array) {
    capitalizedarray.push(arr[0].toUpperCase() + arr.slice(1));
  }

  return console.log(capitalizedarray);
};
capitalizeArray(["spain", "portugal", "france", "italy"]);

// 8. Declare a function name addItem. It takes an item parameter and it returns an array after adding the item

addItem = (item) => {
  let array = [];

  array.push(item);

  return console.log(array);
};
addItem("This is working");

// 9. Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item

removeItem = (index) => {
  let array = ["Ferrari", "Mercedes", "tricycle", "Lambo"];

  array.splice(index, 1);

  return console.log(array);
};
removeItem(2);

// 10. Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.

function sumOfNumbers(...numbers) {
  let sumOfNum = 0;

  for (const num of numbers) {
    sumOfNum += num;
  }

  return console.log(sumOfNum);
}
sumOfNumbers(1, 2, 3, 4);

// 11. Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.

function sumOfOdds(...nums) {
  let oddSum = 0;

  for (const num of nums) {
    if (num % 2 !== 0) {
      oddSum += num;
    }
  }

  return console.log(oddSum);
}
sumOfOdds(1, 2, 3, 4);

// 12. Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.

function sumOfEven(...nums) {
  let evenSum = 0;

  for (const num of nums) {
    if (num % 2 === 0) {
      evenSum += num;
    }
  }

  return console.log(evenSum);
}
sumOfEven(1, 2, 3, 4);

// 13. Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

// evensAndOdds(100);
// The number of odds are 50.
// The number of evens are 51.

function evensAndOdds(num) {
  let even = 0;
  let odd = 0;

  for (let i = 0; i <= num; i++) {
    if (i % 2 === 0) {
      even++;
    } else if (i % 2 !== 0) {
      odd++;
    }
  }

  return console.log(
    `The number of odds are ${odd}\nThe number of evens are ${even}`
  );
}
evensAndOdds(parseInt(8.34));

// 14. Write a function which takes any number of arguments and return the sum of the arguments

// sum(1, 2, 3) // -> 6
// sum(1, 2, 3, 4) // -> 10

function sum(...nums) {
  let sum = 0;

  for (const num of nums) {
    sum += num;
  }

  return console.log(sum);
}
sum(1, 2, 3, 4, 5);

// 15. Write a function which generates a randomUserIp.

function randomUserIp() {
  let one = Math.floor(Math.random() * 255);
  let two = Math.floor(Math.random() * 255);
  let three = Math.floor(Math.random() * 255);
  let four = Math.floor(Math.random() * 255);
  return console.log(`Your generated IP: ${one}:${two}:${three}:${four}`);
}
randomUserIp();

// 16. Write a function which generates a randomMacAddress

function randomMacAddress() {
  let hexDigits = "0123456789ABCDEF";
  let macAddress = "";
  for (let i = 0; i < 6; i++) {
    macAddress += hexDigits.charAt(Math.round(Math.random() * 15));
    macAddress += hexDigits.charAt(Math.round(Math.random() * 15));
    if (i != 5) {
      macAddress += ":";
    }
  }

  return console.log(`Your generated Mac address: ${macAddress}`);
}
randomMacAddress();

// 17. Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.

// console.log(randomHexaNumberGenerator());
// '#ee33df'

function randomHexaNumberGenerator() {
  let chars = "0123456789ABCDEF";
  let hex = "";
  for (let i = 0; i < 6; i++) {
    hex += chars[Math.floor(Math.random() * chars.length)];
  }

  return console.log(`#${hex}`);
}
randomHexaNumberGenerator();

// 18. Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.

// console.log(userIdGenerator());
// 41XTDbE

function userIdGenerator() {
  let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
  let userId = "";
  for (let i = 0; i < 7; i++) {
    userId += chars[Math.floor(Math.random() * chars.length)];
  }
  return console.log(userId);
}
userIdGenerator();

// Exercises: Level 3

// 1. Modify question number n . Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.

// userIdGeneratedByUser()
// 'kcsy2
// SMFYb
// bWmeq
// ZXOYh
// 2Rgxf
// '
// userIdGeneratedByUser()
// '1GCSgPLMaBAVQZ26
// YD7eFwNQKNs7qXaT
// ycArC5yrRupyG00S
// UbGxOFI7UXSWAyKN
// dIV0SSUTgAdKwStr
// '

userIdGeneratedByUser = () => {
  let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
  let numOfChars = Number(prompt("How many chars?"));
  let numOfIds = Number(prompt("How many ids do you want to generate?"));
  let ids = [];
  for (i = 0; i < numOfIds; i++) {
    ids[i] = "";
    for (k = 0; k < numOfChars; k++) {
      ids[i] += chars[Math.floor(Math.random() * chars.length)];
    }
  }
  return console.log(ids.join("\n"));
};
userIdGeneratedByUser();

// 2. Write a function name rgbColorGenerator and it generates rgb colors.

// rgbColorGenerator()
// rgb(125,244,255)

function rgbColorGenerator() {
  let one = Math.floor(Math.random() * 255);
  let two = Math.floor(Math.random() * 255);
  let three = Math.floor(Math.random() * 255);
  return console.log(`rgb(${one},${two},${three})`);
}
rgbColorGenerator();

// 3. Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.

function arrayOfHexaColors() {
  let chars = "0123456789ABCDEF";
  let numOfHexaColors = Number(
    prompt("How many hexadecimal colors do you want to generate?")
  );
  let hex = [];
  for (let k = 0; k < numOfHexaColors; k++) {
    hex[k] = "#";
    for (let i = 0; i < 6; i++) {
      hex[k] += chars[Math.floor(Math.random() * chars.length)];
    }
  }
  return console.log(hex.join("\n"));
}
arrayOfHexaColors();

// 4. Write a function arrayOfRgbColors which return any number of RGB colors in an array.

function arrayOfRgbColors() {
  let chars = "0123456789ABCDEF";
  let numOfRgb = Number(prompt("How many rgb colors do you want to generate?"));
  let colors = [];
  for (let k = 0; k < numOfRgb; k++) {
    colors[k] = "rgb";
    colors[k] += `(${Math.floor(Math.random() * 255)},`;
    colors[k] += `${Math.floor(Math.random() * 255)},`;
    colors[k] += `${Math.floor(Math.random() * 255)})`;
  }
  return console.log(colors.join("\n"));
}
arrayOfRgbColors();

// 5. Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.

function convertHexaToRgb(hex) {
  if (hex.charAt(0) === "#") {
    hex = hex.substr(1);
  }
  if (hex.length < 2 || hex.length > 6) {
    return false;
  }
  let values = hex.split(""),
    r,
    g,
    b;

  if (hex.length === 2) {
    r = parseInt(values[0].toString() + values[1].toString(), 16);
    g = r;
    b = r;
  } else if (hex.length === 3) {
    r = parseInt(values[0].toString() + values[0].toString(), 16);
    g = parseInt(values[1].toString() + values[1].toString(), 16);
    b = parseInt(values[2].toString() + values[2].toString(), 16);
  } else if (hex.length === 6) {
    r = parseInt(values[0].toString() + values[1].toString(), 16);
    g = parseInt(values[2].toString() + values[3].toString(), 16);
    b = parseInt(values[4].toString() + values[5].toString(), 16);
  } else {
    return false;
  }

  return console.log(`rgb(${r}, ${g}, ${b})`);
}
convertHexaToRgb("#081094");

// 6. Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.

function rgbToHex(r, g, b) {
  let hex1 = Number(r).toString(16);
  if (hex1.length < 2) {
    hex1 = "0" + hex1;
  }
  let hex2 = Number(g).toString(16);
  if (hex2.length < 2) {
    hex2 = "0" + hex2;
  }
  let hex3 = Number(b).toString(16);
  if (hex3.length < 2) {
    hex3 = "0" + hex3;
  }
  return console.log(`#${hex1}${hex2}${hex3}`);
}
rgbToHex(8, 16, 148);

// 7. Write a function generateColors which can generate any number of hexa or rgb colors.

// console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
// console.log(generateColors('hexa', 1)) // '#b334ef'
// console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
// console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'

function generateColors(type, arrLength) {
  let chars = "0123456789ABCDEF";
  let colors = [];
  type = String(
    prompt("Do you want a rgb color or an hex color?", "rgb or hex")
  );
  arrLength = Number(prompt("How many colors do you want?"));
  if (type === "rgb") {
    for (i = 0; i < arrLength; i++) {
      colors[i] = "rgb";
      colors[i] += `(${Math.floor(Math.random() * 255)},`;
      colors[i] += `${Math.floor(Math.random() * 255)},`;
      colors[i] += `${Math.floor(Math.random() * 255)})`;
    }
  } else if (type === "hex") {
    for (let i = 0; i < arrLength; i++) {
      colors[i] = "#";
      for (k = 0; k < 6; k++) {
        colors[i] += chars[Math.floor(Math.random() * chars.length)];
      }
    }
  }
  return console.log(colors);
}
generateColors();

// 8. Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array

function shuffleArray(array) {
  let counter = array.length;

  while (counter > 0) {
    let index = Math.floor(Math.random() * counter);

    counter--;

    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }
  return console.log(array);
}
shuffleArray([2, 1, 3, 5, 4]);

// 9. Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number

function factorial(num) {
  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }
  return console.log(factorial);
}
factorial(6);

// 10. Call your function isEmpty, it takes a parameter and it checks if it is empty or not

function isEmpty(value) {
  if (value === undefined) {
    return console.log("The value it's empty");
  } else {
    return console.log("The value is not empty");
  }
}
isEmpty();

// 11. Call your function sum, it takes any number of arguments and it returns the sum.
// We have that function in the exercise 14 of level 2.

sum(8, 10, 94);

// 12. Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.

function sumOfArrayItems(array) {
  let sum = 0;
  for (const arr of array) {
    if (typeof arr === "number") {
      sum += arr;
    } else {
      sum = `it's a string`;
    }
  }
  return console.log(sum);
}
sumOfArrayItems([1, 2, 3, 4]);

// 13. Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.

function average(array) {
  let sum = 0;
  for (const arr of array) {
    if (typeof arr === "number") {
      sum += arr;
    } else {
      sum = `it's a string`;
    }
  }
  let average = sum / array.length;
  return console.log(average);
}
average([2, 5, 1, 7, 3]);

// 14. Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.

// console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']);
// ['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']
// console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']);
// ['Google', 'Facebook','Apple', 'Amazon','MICROSOFT',  'IBM']
// console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']);
// 'Not Found'

function modifyArray(arr) {
  if (arr.length >= 6) {
    arr.splice(4, 1, arr[4].toUpperCase());
    return arr;
  } else {
    return "error";
  }
}
console.log(
  modifyArray(["Avocado", "Tomato", "Potato", "Mango", "Lemon", "Carrot"])
);

// 15. Write a function called isPrime, which checks if a number is prime number.

function isPrime(num) {
  let exactDivision =
    num % 2 == 0 ||
    num % 3 == 0 ||
    num % 5 == 0 ||
    num % 7 == 0 ||
    num % 11 == 0;
  let quotientIsLessThanDivisor =
    num / 2 < 2 || num / 3 < 3 || num / 5 < 5 || num / 7 < 7 || num / 11 < 11;

  if (!exactDivision && quotientIsLessThanDivisor) {
    return `${num} is prime`;
  } else if (
    num === 1 ||
    num === 2 ||
    num === 3 ||
    num === 5 ||
    num === 7 ||
    num === 11
  ) {
    return `${num} is prime`;
  } else {
    return `${num} is not prime`;
  }
}
console.log(isPrime(97));

// 16. Write a functions which checks if all items are unique in the array.

function isUnique(arr) {
  let sorted_arr = arr.slice().sort();
  let results = [];

  for (let i = 0; i < sorted_arr.length - 1; i++) {
    if (sorted_arr[i + 1] == sorted_arr[i]) {
      results.push(sorted_arr[i]);
    }
  }
  if (results.length === 0) {
    return "All items in the array are unique.";
  } else {
    return `There are this duplicates in the array: ${results}`;
  }
}
console.log(isUnique([2, 1, 3, 4, 6, 5]));

// 17. Write a function which checks if all the items of the array are the same data type.

function isSameDataType(arr) {
  let sorted_arr = arr.slice().sort();
  let results = [];

  for (let i = 0; i < sorted_arr.length - 1; i++) {
    if (typeof sorted_arr[i + 1] !== typeof sorted_arr[i]) {
      results.push(typeof sorted_arr[i]);
    }
  }
  if (results.length === 0) {
    return "All items in the array have the same data type.";
  } else {
    return `There are this different data types in the array: ${results}`;
  }
}
console.log(isSameDataType([1, 2, 2, 3, "string", 6, true, false]));

// 18. JavaScript variable name does not support special characters or symbols except $ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.

function isValidVarName(name) {
  try {
    Function("var " + name);
  } catch (e) {
    return `${name} is INVALID`;
  }
  return `${name} is valid`;
}

console.log(isValidVarName("1"));
console.log(isValidVarName("my_var"));
console.log(isValidVarName("_var"));
console.log(isValidVarName("$var"));
console.log(isValidVarName("1var"));
console.log(isValidVarName("my-var"));
console.log(isValidVarName("my_var_1"));
console.log(isValidVarName("my_var_1"));

// 19. Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.

// sevenRandomNumbers()
// [(1, 4, 5, 7, 9, 8, 0)]

function sevenRandomNumbers() {
  let arr = [];

  do {
    let randNum = Math.floor(Math.random() * 10);

    if (arr.indexOf(randNum) === -1) {
      arr.push(randNum);
    }
  } while (arr.length < 7);

  return arr;
}
console.log(sevenRandomNumbers());

// 20. Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array

const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombi",
  "Comoros",
  "Congo (Brazzaville)",
  "Congo",
  "Costa Rica",
  "Cote d'Ivoire",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "East Timor (Timor Timur)",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia, The",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea, North",
  "Korea, South",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia and Montenegro",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

function reverseCountries(countries) {
  let countriesArray = countries.reverse();
  return countriesArray;
}
console.log(reverseCountries(countries));
