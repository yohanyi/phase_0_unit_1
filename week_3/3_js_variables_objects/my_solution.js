// I paired [by myself, with: Yohan Yi, Vlad

// __________________________________________
// Write your code below.

var secretNumber = 7;
var password = "just open the door";
var allowedIn = false;
var members = ["John", 1, true, "Mary"];


// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here. 
// I spent very little time during the prep period on JavaScript, so this section took a little longer
// than it would have normally. My strategy this time was to do all the reading in the intro lab,
// while using the pomodoro technique to help keep me on track.  On the other hand, I spent a lot of time
// on ruby and understand ruby much better. I really benefited greatly from the javascript intro lab
// being taught in relation to ruby. It really gave me a sense of the differences and similarities 
// of javascript and ruby. I really enjoyed the TDD section also. I know that many programmers use
// TDD and it will be a huge part of my future as a programmer. I felt that trying to make the tests
// pass purely off of running the tests, without any prior directions, was the most tedious part, but 
// I learned a lot about what causes errors, and how to fix them.


// __________________________________________
// Test Code:  Do not alter code below this line.

function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)

