
// There is a section below where you will write your code.
// Do not alter this object here.


var terah = {
  name: "Terah",
  age: 32,
  height: 66,
  weight: 130,
  hairColor: "brown",
  eyeColor: "brown"
}



// __________________________________________
// Write your code below.t
// 1 . Define a variable adam and use object literal notation to assign this variable 
//     the value of a JavaScript Object object with no properties.
var adam = {}
// 2. Give adam a name property with the value "Adam".
adam.name = "Adam"
// 3. Add a spouse property to terah and assign it the value of adam.
terah.spouse = adam
// 4. Change the value of the terah weight property to 125.
terah.weight = 125
// 5. Remove the eyeColor property from terah.
delete terah["eyeColor"]
// 6. Add a spouse property to adam and assign it the value of terah.
adam.spouse = terah
// 7. Add a children property to terah and and use object literal notation to assign 
//    this variable the value of a JavaScript Object object with no properties
terah.children = {}
// 8. Add a carson property to the value of the terah children property and assign it 
//    the value of an object with the property name with a value of "Carson".

terah.children.carson = {}
terah.children.carson.name = "Carson"
// 9. Add a carter property to the value of the terah children property and assign it 
//    the value of an object with the property name with a value of "Carter".
terah.children.carter = {}
terah.children.carter.name = "Carter"
// 10. Add a colton property to the value of the terah children property and assign it 
//  the value of an object with the property name with a value of "Colton".
terah.children.colton = {}
terah.children.colton.name = "Colton"

// 11. Add a children property to adam and assign it the value of terah children.
adam.children = terah.children






// __________________________________________
// Reflection: Use the reflection guidelines
// With the javasript review we had the challenge before, this solo challenge was fairly
// simple. This challenge was only focused on manipulating js objects, which made it easy
// to follow and research on. The only problem i had was for tests #8-11. It took some time
// and some research to understand why "terah.children.carter.name = "Carter"" was giving me
// error. I found out that you have to great a "terah.children.carter= {}" then add the name
// property and "Carter" value after. I definitley am going to read into the syntax a little
// more to get a better understanding of why the first method didn't work. I learned how much
// tests can help your code, especially if you write tests before you actually do any coding.
// I'm pretty confident in the learning competincies, but ofcourse I feel like I have a long
// way to go. Learning in general is very tedious, especially when I haven't worked with 
// javascript much. I feel like I'm getting better and better every minute I spend working on 
// this challenge.


// __________________________________________
// Driver Code:  Do not alter code below this line.
function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (adam instanceof Object),
  "The value of adam should be an Object.",
  "1. "
)

assert(
  (adam.name === "Adam"),
  "The value of the adam name property should be 'Adam'.",
  "2. "
)

assert(
  terah.spouse === adam,
  "terah should have a spouse property with the value of the variable adam.",
  "3. "
)

assert(
  terah.weight === 125,
  "The terah weight property should be 125.",
  "4. "
)

assert(
  terah.eyeColor === undefined,
  "The terah eyeColor property should be removed.",
  "5. "
)

assert(
  terah.spouse.spouse === terah,
  "The terah spouse property's value spouse property should be terah.",
  "6. "
)

assert(
  (terah.children instanceof Object),
  "The value of the terah children property should be an Object.",
  "7. "
)

assert(
  terah.children.carson.name === "Carson",
  "The terah children property should have a carson property with its own property name with a value of 'Carson'.",
  "8. "
)

assert(
  terah.children.carter.name === "Carter",
  "The terah children property should have a carter property with its own property name with a value of 'Carter'.",
  "9. "
)

assert(
  terah.children.colton.name === "Colton",
  "The terah children property should have a colton property with its own property name with a value of 'Colton'.",
  "10. "
)

assert(
  adam.children === terah.children,
  "The value of the adam children property should be the value of the terah children property",
  "11. "
)

console.log("\nHere is your final terah object:")
console.log(terah)