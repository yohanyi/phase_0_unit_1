// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1. Katia Bazzi
//  2. Yohan Yi


// 0. "YOU SIGNED... WHO?!"

// 1. "Here they Come!"
var adamSandler = {
    name: "Adam Sandler",
    age: 47,
    quote: "That's your home! Are you too good for your home?!"
}

var kristenBell = {
    name: "Kristen Bell",
    age: 33,
    quote: "Do you wanna build a snowman?"
}

var jimCarrey = {
    name: "Jim Carrey",
    age: 52,
    quote: "...So you're telling me there's a chance? YEAH!"
}

// 2. "TIME IS MONEY!"

var Client = function(name, age, quote) {
  this.name = name;
  this.age = age;
  this.quote = quote;
}

// function Client(name, age, quote) {
//   this.name = name;
//   this.age = age;
//   this.quote = quote;
// }

//YOUR CODE HERE!

var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
shooterMcGavin.constructor === Client;
shooterMcGavin.age === 48;
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";



// 3. "SHOW 'EM OFF!"

var objectArray = [adamSandler, kristenBell, jimCarrey];

var printObject = function(objectName) {
    console.log("Name: " + objectName.name);
    console.log("Age: " + objectName.age);
    console.log("Quote: " + objectName.quote);
}

var printAllObjects = function(array) {
    for (var i = 0; i < array.length; i++)  {
        printObject(array[i])
    }
}

printAllObjects(objectArray);

// 4. "But wait, there's more!"

jimCarrey.showQuote = function() {
  console.log(this.quote);
};


jimCarrey.showQuote()
// 5.  ** BONUS **


//  6.  Your Reflection: I learned so much this pairing session. The hardest part of this session
// was getting started. We needed to find out what we're going to do, how were going to do it, and
// figure out who was goign to drive and navigate. There were a few moments where we needed
// help and our GPS teacher was very helpful. I learned more about objects in javascript, and how
// functions interact with and within objects in javascript. We used google and the teacher to help
// us with some syntax problems.


