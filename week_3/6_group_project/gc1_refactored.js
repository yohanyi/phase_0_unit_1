// My role in the group is: Refactor and Translate

// Here is my part of the challenge:

var sum = function(list){
    var result = 0;
    for (var i = 0; i < list.length; i ++) {
      result += list[i]; //took out the extra result and used += instead
    }
    return result;
};

// With this program, I want to be able to to find out the sum of a list.
// The program will simply go through each number in a list and add them
// all up to give you the total sum.

var mean = function(list){
   var result = (sum(list) / list.length);
   return result;
};

//With this program, I want to be able to calculate the average for a given list 
//of numbers. The program will calculate the total sum, count how many numbers
//are in the list, and divide the total sum by the amount of numbers in the list.



var median = function(list){
  var sorting = list.sort(function(a, b) {return a-b;});
  var length = list.length; 
  var remainder = list.length%2;//added semi-colon just for consitency and replaced sorting with list for readability.
  var half = Math.floor(list.length/2);
  if (remainder === 1){
    return sorting[half];
  } else {
    return (sorting[half] + sorting[half-1])/2;
  }
};

 
 //With this program, I want to be able to find the median or the "middle" number.
 //I want the program to sort the list of numbers from lowest to highest, find the
 //amount of numbers in the given list, then find the number in the middle. 
 //If the list has an even amount of numbers, I want to find the number exactly in between
 //the two numbers that are in the middle. 
 //We just got the end results of our group project. Vlad (person#1) told us that all tests
 //passed and that everyone did exactly what we had to do. It's pretty cool knowing that even
 //though I only did a small portion, everyone did their parts, and together we accomplished
 //a larger task. 


  //Reflection

  //This was my first time doing any code refactoring, code translating, or creating user stories.
  //I had to look up what each aspect consisted of on google, and found out they were quite simple.
  //I had trouble finding ways to refactor this code, but I changed some of the syntax to make it
  //more readable. It felt odd not knowing what the first user story was, or the psuedo code or,
  //what the end goal of this assignment was. **I will update more once we completely finish the
  //assignment.

