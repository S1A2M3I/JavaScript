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