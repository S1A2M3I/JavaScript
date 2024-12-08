// function hello() {
//     const cskScore = document.getElementById('csk-score').value;
//     const rcbScore = document.getElementById('rcb-score').value;
//     let score;
//     if (cskScore >= (2 * rcbScore) && cskScore > 50) {
//         score = 'Team CSK wins!';
//     } else if (rcbScore >= (2 * cskScore) && rcbScore > 50) {
//         score = 'Team RCB wins!';
//     } else {
//         score = 'draw';
//     }
//     document.getElementById('result').innerHTML = 'Score: ' + score;
// }

// let a = 5;
// a++;
// console.log(a);

// let b= 0;
// while (b < 10){
// ++b;
// }
// console.log(b);

// //reverse of a number
// let c = 123;
// let rev = 0;
// while (c != 0) {
//     let rem = c % 10;
//     rev = rev * 10 + rem;
//     c = parseInt(c / 10);
// }
// console.log(rev);

// //factorial of a number
// let d = 5;
// let fact = 1;
// while (d != 0) {
//     fact = fact * d;
//     d--;
// }
// console.log(fact);

// //fibonacci series
// let e = 0;
// let f = 1;
// let fib = 0;
// while (fib < 10) {
//     fib = e + f;
//     console.log(fib);
//     e = f;
//     f = fib;
// }
// console.log(fib);

//5 table using while loop by priniting each number
let i = 1;
while(i <= 10){
    console.log( "5 * " +i+ " = " + (5 * i));
    i++;
}
