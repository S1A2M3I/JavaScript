console.log("Learning JavaScript");
console.log("Hello World");

let a = 10;
console.log(a);
a=20;
console.log(a);

const PI=3.14;
console.log(PI); //Constant Variable cannot be assigned a new value once declared 
//PI=3.15;      

//Camel Case
let namePerson = "John";
let lastName = "Doe";

//Pascal Case
let NamePerson = "John";
let LastName = "Doe";   

//Snake Case
let name_person = "John";
let last_name = "Doe";

//Underscore Case
let name_person1 = "John";
let last_name1 = "Doe";

//DataTypes
//Primitive Data Types
//Number
//String
//Boolean
//Null
//Undefined
//Symbol

//undefined and null 
let b;
console.log(b);

let c = null;
console.log(c);

//not defined
// console.log(d); which is not declared before accessing it will give an error. 

//An int variable can converted into string and vice versa
let intVar = 10;
let strVar = intVar.toString();
console.log(strVar);

//overloaded operator is used to convert one data type into another data type 
let strVar1 = "10";
let intVar1 = parseInt(strVar1);
console.log(intVar1);

//typeof operator is used to get the data type of a variable 
console.log(typeof intVar);
console.log(typeof strVar);
console.log(typeof(true));
console.log(typeof(null));
console.log(typeof(undefined));

//Object in javascript
let person = {
    name: "John",
    age: 30,
    city: "New York"
};
console.log(person);

//Basic Operators
//Arithmetic Operators
//Logical Operators
//Comparison Operators
//Assignment Operators
//Bitwise Operators
//Ternary Operator
//Relational Operators

//Mathematical Operators 
console.log(10+20);
console.log(10-20);
console.log(10*20);
console.log(10/20);
console.log(10%20);
console.log(10**20);

//Assignment Operators
let x = 10;
console.log(x);
x+=20;
console.log(x);
x-=20;
console.log(x);
x*=20;
console.log(x);
x/=20;
console.log(x);
x%=20;
console.log(x);
x**=20;
console.log(x);

//Logical Operators
//&&, ||, !

//Comparison Operators
console.log(10==20);
console.log(10!=20);
console.log(10>20);
console.log(10<20);
console.log(10>=20);
console.log(10<=20);
console.log(10===20);
console.log("5" == 5);
console.log("5" === 5);

let currentyears = 2024;
console.log(currentyears+=10 < (currentyears+25));
//operator precedence
//as first it evaluates (currentyears+=10) then it evaluates (currentyears+25) then it evaluates (currentyears+=10 < 
//(currentyears+25))
//then  it evaluates (currentyears+=10 < (currentyears+25)) which is true and returns true
//then the value of true is 1 and then (currentyears+=1) is 2024+1 which is 2025)


//String and String Template literals
const job="trainer";
const name="John";
const dob=2000;

//"" and + are used for concatenation
console.log("My name is "+name+" and my job is "+job+" and my dob is "+dob);
//`` is used for string template literals
console.log(`My name is ${name} and my job is ${job} and my dob is ${dob}`);

//Conditional Statements
let age = 20;
if(age>=18){
    console.log("Elgible for driving license");
}
else{
    console.log("Not elgible for driving license");
}


//multiple if statements
let age3 = 20;
if(age3>=18){
    console.log("Elgible for driving license");
}
if(age3>=21){
    console.log("Elgible for voting");
}
else{
    console.log("Not elgible for driving license");
    console.log("Not elgible for voting");
}

//nested if
let age1 = 20;
if(age1>=18){
    console.log("Elgible for driving license");
    if(age1>=21){
        console.log("Elgible for voting");
    }
}
else{
    console.log("Not elgible for driving license");
    if(age1<18){
        console.log("Not elgible for voting");
    }
}

//else-if ladder
let age2 = 20;
if(age2>=18){
    console.log("Elgible for driving license");
}
else if(age2>=21){
    console.log("Elgible for voting");
}
else{
    console.log("Not elgible for driving license");
    console.log("Not elgible for voting");
}

//break
//continue
//return
let i=0;
while(i<10){
    console.log(i);
    i++;
    if(i==5){
        break;
    }
}

let j=0;
while(j<10){
    j++;
    if(j==5){
        continue;
    }
    console.log(j);
}

// let k=0;
// while(k<10){
//     k++;
//     if(k==5){
//         return k;
//     }
//     console.log(k);
// }


//Functions 
function hello(){
    console.log("Hello World");
}
hello();


//type of function
//user defined function
//anonymous function
function add(a,b){
    return a+b;
}
console.log(add(10,20));

//anonymous function    
const sub = function(a,b){
    return a-b;
}
console.log(sub(10,20));


//arrow function
const mul = (a,b) => a*b;
console.log(mul(10,20));


//Function Scope
function fruitjuice(apple,orange){
    const juice = `Juice with ${apple} apples and ${orange} oranges.`;
    return juice;
}
let glass = fruitjuice(5,10);
console.log(glass);


//Array
const colors = ["red","green","blue"];
console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);
console.log(colors.length);
colors.push("yellow");
console.log(colors);
colors.pop();
console.log(colors);


//Traversing an array
for(let i=0;i<colors.length;i++){
    console.log(colors[i]);
}
//array 
const numbers1 = [1,2,3,4,5];
for(let i=0;i<numbers1.length;i++){
    console.log(numbers1[i]+numbers1[i]);
}

function hello(num){
let stat=0;
for(let i=2;i<num;i++){
    if(num%i==0){
        stat++;
        break;
    }
}
if(stat==0){
    return " It is a prime number";
}
else{
    return " It is not a prime number";
}
}

const numbers = [1,2,3,4,5,6,7,8,9,10];
for(let i=0;i<numbers.length;i++){
    if(hello(numbers[i])==" It is a prime number"){
    console.log(numbers[i]+" is prime numbers");
    }
}

//Pallindrome
const num = "121";
let rev = "";
for(let i = num.length-1;i>=0;i--){
    rev = rev + num[i];
}
if(rev==num){ 
    console.log("It is a palindrome");
}
else{
    console.log("It is not a palindrome");
    }


//map(), reduce(), filter()
const numbers2 = [1,2,3,4,5,6,7,8,9,10];

//map() The map() method is used for creating a new array from an existing one, applying a function to each one of the 
//elements of the first array.Map() is used traversing every element of the array.
//=> arrow function is used to define the function
//num = accumulator
//num = current value and num*num = square of current value 
const square = numbers2.map((num) => num*num);
console.log(square);

//reduce() The reduce() method reduces an array of values down to just one value.
const initialValue = 0;
const sum = numbers2.reduce((accumulator, currentValue) => accumulator + currentValue,initialValue);
//acc = accumulator num = current value accumulator is used to store the result of the previous operation and current value is 
//used to refer to the current element being processed.
//initialValue = initial value of accumulator 
console.log(sum);

//filter() The filter() method takes each element in an array and it applies a conditional statement against it. 
const even = numbers2.filter((num) => num%2==0);
//num = current value and num%2==0 = check if the current value is even 
console.log(even);

//Object 
const person1 = {
    name: "John",
    age: 30,
    city: "New York"
}
console.log(person1.name);
console.log(person1.age);
console.log(person1.city);
console.log(person1);

//Classes
class Person{
    constructor(name,age,city){
        this.name = name;
        this.age = age;
        this.city = city;
    }
    sayHello(){
        console.log("Hello " + this.name);
    }
}
const person3 = new Person("John",30,"New York");
person3.sayHello();

//JSON - JavaScript Object Notation Format is array of objects and string of objects and numbers of objects.
const person4 = {
    name: "John",
    age: 30,
    city: "New York"
}
const person5 = JSON.stringify(person4);
console.log(person5);
const person6 = JSON.parse(person5);
console.log(person6);


//DOM - Document Object Model
//document is a global object in JavaScript that represents the entire HTML document. It provides access to all the elements
//and properties of the document. The document object is the entry point for all JavaScript code that interacts with the HTML
//document.
//DOM Manipulation
//get element by id
const heading = document.getElementById("heading");
console.log(heading);

//get element by class name
const paragraphs = document.getElementsByClassName("paragraph");
console.log(paragraphs);

//get element by tag name
const links = document.getElementsByTagName("a");
console.log(links);

//get element by query selector
const heading1 = document.querySelector("#heading");
console.log(heading1);
const paragraphs1 = document.querySelectorAll(".paragraph");
console.log(paragraphs1);
//queryselector
//for tag name and class name it will return only the first element 
// document.querySelector(".classname"); for class name 
// document.querySelector("#idname"); for id name

//Html Collections are arrays-like objects that represent collections of HTML elements.
const heading3 = document.getElementsByTagName("h1");
console.log(heading3);
//NodeList is a collection of nodes in a document or HTML element. It is a collection of HTML elements.


//for each loop
// let allheading = document.getElementsByTagName("h1");
// for(let heading of allheading){
//     heading.style.color = "red";
// }

//DOM Traversal
//get parent element
// const parent = heading.parentNode;
// console.log(parent);
// //get child element
// const child = heading.firstChild;
// console.log(child);
// //get next sibling el`ement
// const nextSibling = heading.nextSibling;
// console.log(nextSibling);
// //get previous sibling element
// const previousSibling = heading.previousSibling;
// console.log(previousSibling);


//JSON stringify and parse 
//JSON.stringify() is used to convert a JavaScript object into a JSON string.
//JSON.parse() is used to convert a JSON string into a JavaScript object.

//Events in JavaScript
//onclick, onmouseover, onmouseout
//onchange, onsubmit
//onload
//onkeydown, onkeyup, onkeypress

//child element append and remove

//add event listener
const heading12 = document.getElementById("heading");
heading12.addEventListener("click", () => {
    alert("Hello World");
});
