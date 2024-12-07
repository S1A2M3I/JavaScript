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

let k=0;
while(k<10){
    k++;
    if(k==5){
        return;
    }
    console.log(k);
}