console.log("JavaScript is running!");

console.error("This is an error message!");
console.warn("This is a warning message!");
// This is a comment in JavaScript
//JavaScript Variables are set using let, const, or var

let age = "27"; //let allows you to change the variable later
console.log(age);
const person = "Alfa"; //const is a constant variable, cannot be changed
console.log(person);

// PRIMITIVE DATA TYPES IN JAVASCRIPT:
let name = "John"; // String
let aGe = 30; // Number
let isActive = true; // Boolean
const f = null; // Null
const u = undefined; // Undefined
//finding the type of a variable using the typeof operator
console.log(typeof name); // String
console.log(typeof aGe); // Number
console.log(typeof isActive); // Boolean
console.log(typeof f); // Object (null is a special case in JavaScript)
console.log(typeof u); // Undefined

//Concatenating strings
console.log("Hello, " + name + "! You are " + aGe + " years old.");
//Using Template Literals
console.log(`Hello, ${name}! You are ${aGe} years old.`);

//String methods and properties
let greeting = "Hello, World!";
console.log(greeting.length); // Length of the string using the length property
console.log(greeting.toUpperCase()); // Convert to uppercase
//A property is a value associated with an object, and a method is a function that is associated with an object
//properties are accessed using dot notation, while methods are called with parentheses.
console.log(greeting.substring(0, 5).toUpperCase()); // Extract a substring (from index 0 to 5)
//Splitting a string into an array
let words = greeting.split(", "); // Split by comma and space
console.log(words); // ["Hello", "World!"]
let dogs = "Labrador, Beagle, Poodle";
let dogArray = dogs.split(", "); // Split by comma and space
console.log(dogArray); // ["Labrador", "Beagle", "Poodle
console.log(greeting.split(" ")); // Split by space
console.log(greeting.split("")); // Split by empty string (each character)
console.log(dogs.split("Labrador")); // Split by "Labrador"
//omitting an element from an array using filter
let filteredDogs = dogArray.filter((dog) => dog !== "Labrador");
console.log(filteredDogs); // ["Beagle", "Poodle"]
let drumsBrands = "Yamaha, Pearl, DW, Tama";
let drumArr = drumsBrands.split(", "); // Split by comma and space
console.log(drumsBrands);
console.log(drumArr); // ["Yamaha", "Pearl", "DW", "Tama"]
let drumFiltered = drumArr.filter((brand) => brand !== "Tama");
console.log(drumFiltered); // ["Yamaha", "Pearl", "DW"]

//ARRAYS - variables that can hold multiple values

//array using Constructor Method
let fruits = new Array("Apple", "Banana", "Cherry");
console.log(fruits); // ["Apple", "Banana", "Cherry"]

//array using Array Literal Notation; brackets.
let cymbals = ["Meinl", "Zildjian", "Sabian", "Paiste", "Istanbul"]; // we are aloud to have multiple data types in an array.
console.log(cymbals); // ["Meinl", "Zildjian", "Sabian", "Paiste", "Istanbul"]

//Accessing array elements
let meinl = cymbals[0]; // Accessing the first element
console.log(meinl); // "Meinl"
console.log(cymbals[1]); // "Zildjian"
const drumHeads = ["Remo", "Evans", "Aquarian", "Attack"];
// directly adding an element to an array
drumHeads[4] = "Code";
console.log(drumHeads); // ["Remo", "Evans", "Aquarian", "Attack", "Code"]
//we can reassign arrays but not manipulate them directly.

//Adding elements to the end of an array using push.
drumArr.push("Sonor");
console.log(drumArr); // ["Yamaha", "Pearl", "DW", "Tama", "Sonor"]
//Removing elements from the end of an array using pop.
drumArr.pop();
console.log(drumArr); // ["Yamaha", "Pearl", "DW", "Tama"]

//Adding elements to the beginning of an array using unshift.
drumArr.unshift("Ludwig");
console.log(drumArr); // ["Ludwig", "Yamaha", "Pearl", "DW", "Tama"]
//Removing elements from the beginning of an array using shift.
drumArr.shift();
console.log(drumArr); // ["Yamaha", "Pearl", "DW", "Tama"]

//Checking if a value is an array using Array.isArray()
console.log(Array.isArray(dogArray)); // true
console.log(Array.isArray("Not an array")); // false

//finding the index of an element in an array using indexOf()
console.log(dogArray.indexOf("Beagle")); // 1
console.log(drumArr.indexOf("Tama")); // 3

//OBJECT LITERALS - a collection of key-value pairs
const coolBro = {
  firstName: "Alfa",
  lastName: "Zach",
  age: 27,
  isStudent: true,
  hobbies: ["coding", "drumming", "gaming"],
  address: {
    street: "Lemiso Road",
    city: "Nairobi",
    country: "Kenya",
  },
};
console.log(coolBro); // Display the entire object
console.log(coolBro.firstName); // Accessing a property using dot notation
console.log(coolBro["lastName"]); // Accessing a property using bracket notation
console.log(coolBro.address.city); // Accessing a nested property
console.log(coolBro.hobbies[0]); // Accessing an element in the hobbies array

//Destructuring an object and picking them out to create variables.
const {
  lastName,
  firstName,
  address: { city },
  hobbies,
} = coolBro; // Destructuring assignment
console.log(firstName); // "Alfa"
console.log(lastName); // "Zach"
console.log(city); // "Nairobi"
console.log(hobbies); // ["coding", "drumming", "gaming"]

//Adding a new property to an object
coolBro.email = "zalfa3890@gmail.com";
console.log(coolBro.email); // "zalfa3890@gmail.com"

//Array of objects
const drummers = [
  { name: "Dante", age: 27, isActive: true },
  { name: "Zach", age: 27, isActive: false },
  { name: "Jasiel", age: 29, isActive: true },
  { name: "Kibamba", age: 32, isActive: false },
];

console.log(drummers); // Display the entire array of objects
drummers[4] = { name: "Brolyne", age: 26, isActive: true }; // Adding a new object to the array
console.log(drummers[4]); // { name: "Brolyne", age: 26, isActive: true }
console.log(drummers[1].isActive); // Accessing the name property of the second object
console.log(drummers[3].age); // Accessing the age property of the fourth object

//how to send JSON data to the server
const drummersJSON = JSON.stringify(drummers); // Convert the array of objects to a JSON string
console.log(drummersJSON); // Display the JSON string

const toDo = [
  { task: "Complete JavaScript recap", completed: false },
  { task: "Practice coding exercises", completed: true },
  { task: "Read JavaScript documentation", completed: false },
];
console.log(toDo);
//Turning toDo array into a JSON string
const toDoJSON = JSON.stringify(toDo); // Convert the array of objects to a JSON string
console.log(toDo[1].completed); // Accessing the completed property of the second object
toDo[3] = { task: "Watch JavaScript tutorials", completed: false }; // Adding a new object to the array
console.log(toDo[3]); // { task: "Watch JavaScript tutorials", completed: false }
console.log(toDo);

//ARRAY ITERATION - looping through arrays and objects
// FOR LOOPS - used to iterate over arrays or objects
for (let i = 0; i < cymbals.length; i++) {
  console.log(`cymbal ${i}: ${cymbals[i]}`);
}
// WHILE LOOP - used to iterate over arrays or objects
let i = 0;
while (i < cymbals.length) {
  console.log(` while cymbal ${i}: ${cymbals[i]}`);
  i++;
}
// FOR...OF LOOP - used to iterate over iterable objects like arrays
for (let to of toDo) {
  console.log(to.task);
}

for (const crashes of cymbals) {
  //for of loop for cymbals
  console.log(`Crash cymbal: ${crashes}`);
}
// Another for loop.
for (let i = 0; i < toDo.length; i++) {
  console.log(`to do ${i}: ${toDo[i].task}`);
}

//High Order Array Methods - methods that operate on arrays and return a new array or value; forEach, map, filter.
//Using forEach - this loops through each element in an array and performs a function on it without returning a new array.
cymbals.forEach(function (cymbal, index) {
  console.log(`Cymbal ${index}: ${cymbal}`);
});

toDo.forEach(function (completed, index) {
  console.log(`Task ${index}: ${completed}`);
});

drumHeads.forEach(function (head, index) {
  console.log(`This is a ${head} drum head at index ${index}`);
});

//Using map - this loops through each element in an array and returns a new array with the results of the function.
const toDoCompleted = toDo.map(function (completed) {
  return completed.completed; // Returns an array of completed statuses;
});
console.log(toDoCompleted); // [false, true, false, false]

const drummerName = drummers.map(function (drummer) {
  return drummer.name;
});
console.log(drummerName); // ["Dante", "Zach", "Jasiel", "Kibamba", "Brolyne"]

const drumHeadsUpper = drumHeads.map(function (head) {
  return head.toUpperCase(); // Returns an array of drum head names in uppercase
});
console.log(drumHeadsUpper);

const drummerAge = drummers.map((drummer) => (age = drummer.age));
console.log(drummerAge); // [27, 27, 29, 32, 26]

// Using filter - this loops and keeps only stuff that matches the condition or pass a test
const activeDrummers = drummers.filter(function (drummer) {
  return drummer.isActive; // Returns an array of active drummers
});
console.log(activeDrummers); // [{ name: "Dante", age: 27, isActive: true }, { name: "Jasiel", age: 29, isActive: true }, { name: "Brolyne", age: 26, isActive: true }]

const inactiveDrummers = drummers.filter(function (drummer) {
  return !drummer.isActive; // Returns an array of inactive drummers
});
console.log(inactiveDrummers); // [{ name: "Zach", age: 27

const toDoIncomplete = toDo.filter((task) => !task.completed);
console.log(toDoIncomplete); // Returns an array of incomplete tasks

// Using reduce - this loops through an array and reduces it to a single value
const sumOfAges = drummers.reduce(function (sum, drummer) {
  return sum + drummer.age; // Returns the sum of all ages
}, 0); // Initial value of sum is 0});
console.log(sumOfAges); // 111 (27 + 27 + 29 +

let fruitArray = [
  { fruit: "Apple", quantity: 5 },
  { fruit: "Banana", quantity: 3 },
  { fruit: "Cherry", quantity: 8 },
  { fruit: "Date", quantity: 2 },
];
console.log(fruitArray);
console.table(fruitArray); // Display the array in a table format

const sumOfQuantities = fruitArray.reduce(
  (sum, item) => sum + item.quantity,
  0
);
console.log(sumOfQuantities);

const productOfDrummerAges = drummers.reduce(
  (product, drummer) => product * drummer.age,
  1
);
console.log(productOfDrummerAges); // 1169640

//Using find - this loops through an array and returns the first element that matches the condition
const fruitQuantityGreaterThanThree = fruitArray.find(
  (item) => item.quantity > 3
);
console.log(fruitQuantityGreaterThanThree);

const drummerAgeGreaterThanTwentySix = drummers.find(
  (drummer) => drummer.age > 26
);
console.log(drummerAgeGreaterThanTwentySix);
console.log(drummers);

//Using some - this loops through an array and returns true if at least one element matches the condition
const activeDrummer = drummers.some((drummer) => drummer.isActive);
console.log(activeDrummer); // true (at least one drummer is active)

const inactiveDrummer = drummers.some((drummer) => !drummer.isActive);
console.log(inactiveDrummer);

//Using every - this loops through an array and returns true if all elements match the condition
const allDrummersActive = drummers.every((drummer) => drummer.isActive);
console.log(allDrummersActive); // returns false because not all drummers are active

const drummersAreAdults = drummers.every((drummer) => drummer.age >= 18);
console.log(drummersAreAdults); // returns true because all drummers are adults

const dRummers = [
  { name: "John", age: 30 },
  { name: "Paul", age: 17 },
  { name: "Ringo", age: 35 },
];

const drummerUnderEighteen = dRummers.some((drummer) => dRummers.age < 18);
console.log(drummerUnderEighteen); // returns true because at least one drummer is under eighteen

const drummersEighteenOrOlder = dRummers.some((drummer) => dRummers.age >= 18);
console.log(drummersEighteenOrOlder);

//CONDITIONALS- if, else if, and else statements
const x = 20;
if (x == 10) {
  // == checks for equality without minding the type while === strictly checks for equality with type
  console.log("x is equal to 10");
} else if (x > 10) {
  console.log("x is greater than 10");
} else if (x < 10) {
  console.log("x is less than 10");
} else {
  console.log("x is not equal to 10");
}

const a = 5;
const b = 10;
if (a < b && b > 5) {
  // && checks if both conditions are true
  console.log("a is less than b and b is greater than 5");
}
if (a > b || b > 5) {
  console.log("a is greater than b or b is greater than 5");
} // || checks if at least one condition is true}

// Ternary Operator - a shorthand way of writing if-else statements
const agE = 22;
const isAdult =
  agE >= 18 || agE == 18 ? "You are an adult." : "You are not an adult.";
console.log(isAdult); // "You are an adult."

const e = 7;
const color = e > 10 ? "red" : "blue";
console.log(color); // "red"
//Switch Statement - a way to execute different code blocks based on different conditions
switch (color) {
  case "red":
    console.log("The color is red.");
    break;
  case "blue":
    console.log("The color is blue.");
    break;
  default:
    console.log("The color is NOT red or blue.");
    break;
}

switch (agE) {
  case 18:
    console.log("You are exactly 18 years old.");
    break;
  case 19:
    console.log("You are 19 years old.");
    break;
  default:
    console.log("You are not 18 or 19 years old.");
    break;
}

//FUNCTIONS IN JAVASCRIPT

function salutate(greet = "Vipi", guy = "Bro") {
  console.log(`${greet}, ${guy}!`);
}
salutate("Hello", "Alfa"); // no mater the default values, they will be overridden by the arguments passed in the function call, at which case it is "Hello, Alfa!"
salutate(); // no arguments passed in, so it will use the default values, which are "Vipi" and "Bro", which is "Vipi, Bro!"
//Using return statement to return a value from a function
function multiply(num1, num2) {
  return num1 * num2; // Returns the product of num1 and num2
}
console.log(multiply(5, 10)); // 50

//Using arrow functions
const product = (num1, num2) => num1 * num2;
console.log(product(5, 10));

const divide = (num1, num2) => num1 / num2;
console.log(divide(10, 2)); // 5

function workout(exercise, reps) {
  return `I did ${reps} reps of ${exercise}.`;
}
console.log(workout("push-ups", 37)); // "I did 37 reps of push-ups."

const drumPractice = (rudiment, duration) =>
  `I practiced ${rudiment} for ${duration} minutes.`;
console.log(drumPractice("paradiddles", 30)); // "I practiced paradiddles for 30 minutes." arrow function

function greet(name) {
  console.log(`Hello, ${name}!`);
}
greet("Zach"); // "Hello, Alfa!"

function productOfNumbers(num1, num2) {
  if (typeof num1 === "number" && typeof num2 === "number") return num1 * num2;
  else return "Invalid input"; // Returns the product of num1 and num2
}
console.log(productOfNumbers(5, null));

function quotient(num1, num2) {
  return num1 / num2;
}
console.log(`The division of 20 by 10: ${quotient(20, 10)}`); // "The division of 20 by 10: 2"

//Functions as Arguments - passing functions as arguments to other functions

function doTask(workout) {
  console.log(`Doing the task: ${workout}`);
}
function endTask(workout) {
  console.log(`Just finished my reps of ${workout}.`);
}
function performTask(callback) {
  const task = "push-ups";
  callback(task);
}
performTask(doTask); // "Doing the task: push-ups"
performTask(endTask); // "Just finished my reps of push-ups"

//another example of passing a function as an argument
function calculate(a, b, operation) {
  return operation(a, b); // Calls the passed function with a and b
}
function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
console.log(calculate(5, 3, add)); // 8
console.log(calculate(5, 3, subtract)); // 2
//another example of passing a function as an argument
function militaryDog(dog) {
  return `The military dog is ${dog}.`;
}
function familyDog(dog) {
  return `The family dog is also ${dog}.`;
}
function identifyDog(callback) {
  const dog = "Solo";
  return callback(dog);
}
console.log(identifyDog(militaryDog)); // "The military dog is Solo."
console.log(identifyDog(familyDog)); // "The family dog is also Solo."

//another example of passing a function as an argument

function anxiousCat(cat) {
  return `${cat} was an anxious cat.`;
}
function deadCat(cat) {
  return `${cat} is now  a dead cat.`;
}
function identifyCat(callback) {
  const cat = "Simba";
  return callback(cat);
}
console.log(identifyCat(anxiousCat)); // "Simba was an anxious cat."
console.log(identifyCat(deadCat)); // "Simba is now a dead cat."

//Function Expressions - functions that are assigned to variables
const sayHi = function () {
  console.log("Hi there!");
};
sayHi(); // "Hi there!"

const sayBye = () => {
  // using arrow function syntax
  console.log("Goodbye!");
};
sayBye(); // "Goodbye!"

//CONSTRUCTOR FUNCTIONS - used to create objects with a specific structure.
//Constructor function without using Class
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob); // date of birth
  /*this.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };*/ // Moved to prototype for better memory efficiency below
  Person.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
  /*this.getFullYear = function () {
    return this.dob.getFullYear();
  }*/ // Moved to prototype for better memory efficiency below
  Person.prototype.getFullYear = function () {
    return this.dob.getFullYear();
  };
  /*this.userIntro = () => {
    return `My name is ${this.getFullName()}, and I was born in ${this.getFullYear()}.`;
  }*/ // Moved to prototype for better memory efficiency below
  Person.prototype.userIntro = function () {
    return `My name is ${this.getFullName()}, and I was born in ${this.getFullYear()}.`;
  };
}

const person1 = new Person("Alfa", "Zach", "1998-06-30");
const person2 = new Person("Ain", "Moen", "2000-11-24");
const person3 = new Person("Ammi", "Jeff", "2003-04-01");
console.log(person1.getFullName()); // "Alfa Zach"
console.log(person1.userIntro()); // "My name is Alfa Zach and I was born in 1998."
console.log(person2.getFullYear()); // "Ain Moen"
console.log(person3); //

//Constructor method Using Class
class Dog {
  constructor(name, breed, age) {
    this.name = name;
    this.breed = breed;
    this.age = age;
  }
  getFullInfo() {
    return `${this.name} the ${this.breed} is ${this.age} years old.`;
  }
}
const dog1 = new Dog("Solo", "German Shepherd", "3");
const dog2 = new Dog("Sally", "Rottweiler", "4");
const dog3 = new Dog("Rex", "Boerboel", "8");

console.log(dog1);
console.log(dog1.getFullInfo());
console.log(dog2.getFullInfo()); // "Sally the Rottweiler is 4 years old."
console.log(dog3.getFullInfo()); // "Rex the Boerboel is 8 years old."

//THE DOM - Document Object Model
//The DOM is a representation of the HTML document as a tree structure, where each element is a node in the tree.

//SELECTING ELEMENTS FROM THE DOM;
//Single Element Selectors
document.getElementById("my-form"); // Selects an element by its ID
console.log(document.getElementById("my-form")); // Logs the element with ID "my-form"

document.querySelector(".container"); // Selects the first element with the class "container"
console.log(document.querySelector(".container")); // Logs the first element with class "container"

document.querySelector("#email");
console.log(document.querySelector("#email")); // Logs the element with ID "email"

document.querySelector("h1");
console.log(document.querySelector("h1")); // Logs the first h1 element

document.querySelector("header");
console.log(document.querySelector("header")); // Logs the header element

//Multiple Element Selectors
document.querySelectorAll(".item"); // Selects all elements with the class "item"
console.log(document.querySelectorAll(".item")); // Logs a NodeList of all elements with class. It is preferable to use querySelectorAll over getElementsByClassName as it returns a static NodeList, while getElementsByClassName returns a live HTMLCollection. With a Node-list, you can use array methods like forEach, while with an HTMLCollection, you cannot.

document.getElementsByClassName("item"); // Selects all elements with the class "item"
console.log(document.getElementsByClassName("item")); // Logs a live HTMLCollection of all

document.getElementsByTagName("li"); // Selects all <li> elements
console.log(document.getElementsByTagName("li")); // Logs a live HTMLCollection of all

const item = document.querySelectorAll(".item");
item.forEach((item) => console.log(item)); // Logs each element with the class "item" since querySelectorAll returns a static NodeList, we can use forEach to iterate over it.

//Manipulating the DOM
/*const ul = document.querySelector(".items"); // Creates a variable to hold the unordered list element
console.log(document.querySelector(".items")); // Logs the unordered list element
//ul.remove(); // Removes the unordered list element from the DOM
//ul.firstElementChild.remove(); // Removes the first child of the unordered list element
ul.firstElementChild.textContent = "Drummer 1"; // Changes the text content of the first child of the unordered list element
ul.children[1].textContent = "Drummer 2"; // Changes the text content of the second child of the unordered list element
ul.lastElementChild.innerHTML = "<h1>Drummer 3</h1>"; // Changes the inner HTML of the last child of the unordered list element
ul.children[2].innerHTML = "<h3 style='font-family: Michroma;'>Drummer 3</h3>";

ul.firstElementChild.innerHTML =
  "<h3 style='font-family: Michroma;'>Drummer 3</h3>";
ul.children[1].innerHTML = "<h3 style='font-family: Michroma;'>Drummer 2</h3>";
 // Changes the background color of the button element
/*btn.addEventListener("click", (e) => {
  alert("Button Clicked!")});*/ // Shows an alert when the button is clicked
/*btn.addEventListener("mouseover", (e) => {
  e.preventDefault(); // Prevents the default action of the button
  btn.style.background = "red"; // Changes the background color of the button element when mouse is over it
});*/
const btn = document.querySelector(".btn");
btn.style.background = "black";

btn.addEventListener("mouseover", (e) => {
  e.preventDefault();
  btn.style.background = "blue";
});
btn.addEventListener("mouseout", (e) => {
  e.preventDefault();
  btn.style.background = "black";
});
// Prevents the default action of the button // Changes the background color of the button element when mouse is over it})
btn.addEventListener("click", (e) => {
  e.preventDefault(); // Prevents the default action of the button

  onSubmit(e); // Changes the background color of the form element when the button is clicked
}); // Logs a message to the console when the button is clicked

const formHeader = document.querySelector("#form-title");
formHeader.style.fontFamily = "Michroma";

formHeader.addEventListener("mouseover", (e) => {
  e.preventDefault();
  formHeader.style.color = "#4adef1ff";
}); // Changes the color of the form header when mouse is over it
formHeader.addEventListener("mouseout", (e) => {
  e.preventDefault();
  formHeader.style.color = "black";
}); // Changes the color of the form header when mouse is out of it

const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const usersList = document.querySelector("#users");
const msg = document.querySelector(".msg");

myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();
  //console.log(nameInput.value);//
  if (nameInput.value === "" || emailInput.value === "") {
    msg.innerHTML = "❌ Please enter all fields!"; // Display error message
    msg.classList.add("error");
    msg.classList.remove("success");
    setTimeout(() => {
      msg.innerHTML = "";
      msg.classList.remove("error");
    }, 3000); // Remove the message after 3 seconds
  } else {
    msg.innerHTML = "✅ User added successfully!";
    msg.classList.remove("error");
    msg.classList.add("success");
    setTimeout(() => {
      msg.innerHTML = "";
      msg.classList.remove("success");
    }, 3000);

    const li = document.createElement("li");
    li.appendChild(
      document.createTextNode(`${nameInput.value}: ${emailInput.value}`)
    );
    //Creating a 'deleButton' element on the DOM
    const deleteBtn = document.createElement("button");//creates a delete button in memory and not directly on the HTML editor.
    deleteBtn.appendChild(document.createTextNode("❌"));
    deleteBtn.className = "delete-btn";//added for styling purposes
    li.appendChild(deleteBtn);//adds the deleteBtn to the li element

    //Deleting the lists within the userList
    usersList.addEventListener('click', (e) => {
      if (e.target.classList.contains("delete-btn")) {
        const li = e.target.parentElement;
        usersList.removeChild(li);
      }
    })

    usersList.appendChild(li);



    // optional: clear fields
    nameInput.value = "";
    emailInput.value = "";
  }
}
