// consoles
console.error('this an error');
console.warn('this is a warning');

// variables 'let' declares a variable (age) which then holds a value
let age = 30; // can change doesnt need initializer
age = 31;

console.log(age); // here we have the print of the variable 

const number = 20; // can't reassign so we must have initializer

console.log(number);

// data types = string, numbers, boolean, null, undefined
const name = 'kenj';
const year = 18;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;

console.log(typeof name);

// concatenation
console.log('hello ' + name + ', you are cool');

//template string
console.log(`your name is ${name} and you are ${year}`);

// put template string as variable for funzzies
const introduction = `your name is ${name} and you are ${year}`;

console.log(introduction);

// finding length of characters in a string
const s = 'hello world!';

console.log(s.length);

// arrays - variables that contain multiple values
const fruits = ['papaya', 'mango', 'kiwi', 'guava'];

console.log(fruits);

// arrays are zero based
const veges = ['lettus', 'celery', 'garlic', 'cucumber'];

console.log(veges[1]);

// we can add to the function but no reassign const
veges[4] = 'onion';

console.log(veges);

// or..... push adds to end
veges.push('kale');

console.log(veges);

// adding to front
veges.unshift('beans');

console.log(veges);

// takes last one off
veges.pop();

console.log(veges);

// if you want to check if something is an array
console.log(Array.isArray(fruits));

// if you want to check what position it is
console.log(fruits.indexOf('mango'));


// // Object literals
// // Lets say we want to an object literal of a person and their info
const person = {
  firstName: 'Eva',
  lastName: 'Russell-Magill',
  birth: 17,
  hobbies: ['biking', 'cooking', 'camping', 'programming'],
  address: {
    street: 'Madison av.',
    planet: 'Earth',
    galaxy: 'Milky way',
  }
}
console.log(person);

// if we wanna access a single value from this expression
console.log(person.firstName); // displays 'Eva'

// if we wanna access something from an array
console.log(person.hobbies[1]); // displays 'cooking'

// destructuring to create variables with curly braces
const { firstName, lastName } = person;

console.log(firstName);

// add property with dot
person.email = 'eva@gmail.com'

console.log(person);


// to-do list
const todolist = [
  {
    id: 1,
    text: 'study calculus II',
    isCompleted: true,
  },
  {
    id: 2,
    text: 'study chem',
    isCompleted: false,
  },
  {
    id: 3,
    text: 'study bio',
    isCompleted: false,
  },
];

console.log(todolist);


// For
for (let i = 0; i < 10; i++) {
console.log(i) };

for (let i = 0; i <= 10; i++) {
  console.log(i)
};

// while 
let i = 0 
while (i < 10) {
  console.log(`while loop number: ${i}`); i++; // without increment, it loops forever
};

// Array loops
for (let i = 0; i < todolist.length; i++) {
  console.log(i) };

// for of loop
for(let todo of todolist) { // "todo" could be anything, it just represents what's inside the array
  console.log(todo);
}

// high order array methods
// forEach, map, filter
todolist.forEach(function(todo) { // forEach calls each of the elements in an array 
  console.log(todo.text);
});

const todoText = todolist.map(function(todo) {
  return todo.text;
});
console.log(todoText);

const todoCompleted = todolist.filter(function(todo) {
  return todo.isCompleted === true;
});
console.log(todoCompleted);

// conditionals
const k = 11;
if(k == 10) { // == doesnt match data types // if is the first condition 
  console.log('k is 10');
} else if (k > 10){ // else if is the second condition 
  console.log('k is greater than 10')
} else { // else is when else if is false
  console.log('k is less than 10');
}

const q = 1;
const color = q > 10 ? 'red' : 'yellow' // ? means then, : means else
console.log(color);
switch(color) {
  case 'red':
    console.log('this color is red');
    break;
  case 'yellow':
    console.log('this color is yellow');
    break;
  default:
    console.log('neither');
    break;
}

// functions
function addNums(num1 = 1, num2 = 1) { // = 1 is a default parameter
  console.log(num1 + num2); // in a func. you usually return it
}
addNums(17, 19);

function findMax() {
  let i;
  let max = -Infinity;
  for(i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
}
  return max;

// contructor func.
function Person(firstName, lastName, dob) { // person is the function, () are the parameters
  this.firstName = firstName; // this is the function argument
  this.lastName = lastName;
  this.dob = dob;
}

Person.prototype.getBirthYear = function() {
  return this.dob.getFullYear();
}

// class
class Person {
  constructor(firstName, lastName, dob) { 
    this.firstName = firstName; 
    this.lastName = lastName;
    this.dob = dob;
  }
getBirthYear() {
  return this.dob.getFullYear();
  } 
} // this does the same thing as the constructor function above

// instantiate the object
const person1 = new Person('Kenji', 'Tagawa', '2002-06-01');
const person2 = new Person('Eva', 'Tagawa', '2003-10-17');
console.log(person1);

// single element
const form = document.getElementById('example'); // document is for selecting things from the web page, selector for singles
console.log(form);
console.log(document.getElementById('example'));
const page = document.querySelector('.class'); // querySelector is to grab anything from the document ex. a class
console.log(document.querySelector('.class')); // only prints 1 of the classes

// multiple elements
console.log(document.querySelectorAll('.item')); // gives Node list, similar to array
console.log(document.getElementsByClassName('item')); // used for classes with no dot notation
console.log(document.getElementsByTagName('li')); 

const ul = document.querySelector('.item');
// removes last class element
ul.lastElementChild.remove();
// inputs words for the class
ul.firstElementChild.textContent = 'hello';
// grabs second
ul.children[1].innerText ="eva";
// implements HTML
ul.lastElementChild.innerHTML = '<h1>hola</h1>';

const btn = document.querySelector('.btn');
btn.style.background = 'red'; // method

// events
const btn = document.querySelector('.btn');
btn.addEventListener('click', (e) => {
    console.log('click');
    e.preventDefault();
    document.querySelector('class').style.background = '#ccc';
});



