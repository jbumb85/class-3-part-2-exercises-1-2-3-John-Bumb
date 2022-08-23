// Exercise #1: Basic
// Aim: Create a function that takes in an argument and uses string interpolation to print that arguments value somewhere in a text string

//  Create a function
//  Have that function take in an argument
//  Print a statement that uses the variable along with some other text



  //String Interpolation
function myInfo (fname, lname, age, hobby){
    return (`My name is ${fname} ${lname} and I am ${age} years old. I enjoy ${hobby} for fun!!`)
};

console.log(myInfo("John", "Bumb", "36", "playing video games"));