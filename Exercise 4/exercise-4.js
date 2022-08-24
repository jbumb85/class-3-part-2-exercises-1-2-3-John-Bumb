// Write a function min(a,b) which returns the least of two numbers a and b.

// For instance:

// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1A

// function min(a, b) {
//   if (a < b) {
//     return a;
//   } else if ((a = b)) {
//     return a;
//   } else {
//     return b;
//   }
// };

function min(a, b) {
    return Math.min(a, b)
};

console.log(min(2, 5));
console.log(min(3, -1));
console.log(min(1, 1));
