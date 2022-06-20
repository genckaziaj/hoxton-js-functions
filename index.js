/*
Today's exercise: Functions
Description
You're building a nightclub security robot that doesn't admit anyone under the age of 18. Write the functions that would be responsible for that. The robot also possesses the insane power of adding up numbers and checking if a number is even. Look at that versatility!

You will find all the functions created and what they should return inside the challenge template. You just need to fill in the code inside.

Instructions
- Use this starting template, you'll find the functions already there => https://codesandbox.io/s/day-5-functions-template-19u58?file=/index.js
- Again, do not code your solution in CodeSandbox. Copy the stuff over to your project!
- Write code that solves the requirements
- Test your solution by giving it some sample data and console.log the results 

Tips
- You can use functions inside functions 🤯
- Feel free to "fold" your function to clear your workspace once you're done working on it.
*/

// Input: a (number), b (number)
// Action: Add both numbers together
// Output: The result (number)
function add(a = 2, b = 4) {
  return a + b;
}

console.log(add(10, 8));

// Input: number
// Action: Check if the number given is even or not
// Output: The result (boolean)
function isEven(number = 6) {
  return number % 2 === 0;
}

console.log(isEven(4));

// Input: name (string)
// Action: Greet the user by name
// Output: The greeting (string)
function greet(user) {
  return `Welcome ${user}!`;
}

console.log(greet("Genc"));

// Input: age (number)
// Action: Check if the age is 18 or over
// Output: The result (boolean)
function isAnAdult(age) {
  return age >= 18;
}

console.log(isAnAdult(29));

// Input: age (number)
// Action: Check how many years are left until adulthood (18)
// Output: The result (number)
function yearsToAdulthood(age) {
  return 18 - age;
}

console.log(yearsToAdulthood(17));

// Input: person ({ age: number, name: string })
// Action:
//   - check if a person is an adult
//   - if they are, greet them
//   - if they are not, tell them to come back in X years (when they are)
// Output: The result (string)
function admit(person) {
  let adult = isAnAdult(person.age);
  let greetPerson = greet(person.name);
  let yearsLeft = yearsToAdulthood(person.age);
  if (adult) return greetPerson;
  else return `You may come back in ${yearsLeft} year!`;
}

person1 = admit({ age: 29, name: "Genc" });
console.log(person1);
person2 = admit({ age: 17, name: "Armir" });
console.log(person2);
