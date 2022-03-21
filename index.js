
//SETUP
// 1. write function that checks length of a string; output true if the string is longer than 5 characters, else output false
const checkLength = (str) => (str.length > 5) ? true : false;
console.log(checkLength("Hello World"));
console.log(checkLength("Hi"));


// 2. Write a function that checks the string contains at least one lowercase letter; and at least one uppercase letter. If both are present, the function should return true - and if either are missing, it should return false.
//loop through string
//use regex in if condition to check if string contains upper and lower case letters

const checkCase = (newstring) => {
  for ( let i=0; i < newstring.length; i++){
    if (/[A-Z]+/.test(newstring) && /[a-z]+/.test(newstring)) {
      return true;
    } else {
      return false;
    }
}}
console.log(checkCase("Hello World"));
console.log(checkCase("hi, hello"));
console.log(checkCase("HELLEO"));
console.log(checkCase("Success")); 



// 3. Write a function which checks whether the string has at least two numbers in it. If it does, then return true and otherwise return false
//copy and paste above, change regex

const numCheck = (newstring) => {
  for ( let i=0; i < newstring.length; i++){
    if (/(\w*\d){2,}/.test(newstring)) {
      return true;
    } else {
      return false;
    }
}}
console.log(numCheck("11Hello"));
console.log(numCheck("1Hello"));
console.log(numCheck("1Hello1"));
console.log(numCheck("Hello11"));




/* DOM Manipulation 
Use DOM Manipulation to tie everything together.
You’ll need to check the value of the input when the user clicks the button. Verify the input gives true when given as an argument to each of the functions.*/
//make input field and button in html
//add onClick event on button in html and javascript
//access input and button
//check all three conditions
//put result in html



function getInputValue (){
  let element = document.getElementById("user").value;  
  let button = document.getElementById("btn");
  let one = checkLength(element);
  let two = checkCase(element);
  let three = numCheck(element);
  if (one == true && two == true && three == true){
    return result.textContent = "Username is valid";
  } else {
    return result.textContent = "Username is invalid";
  }
}

window.getInputValue = getInputValue;