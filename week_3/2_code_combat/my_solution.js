// I worked on this challenge by myself.
 
// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 
// Note: to make commenting easier, you can highlight the section you want to comment and hold 
// command + / This will comment the line. 
 
 //***Rescue Mission*****

 //move upx2
this.moveUp();

// move right x2
this.moveRight();
this.moveRight();

//move down x1
this.moveDown();

//attack

 this.attackNearbyEnemy();
 
 // *****Grab the Mushroom****

// move up
this.moveUp();
//move right
this.moveRight();
//move left
this.moveLeft();
//move up
this.moveUp();
//attack
this.attackNearbyEnemy();

// ****Drink Me

//attack
this.attackNearbyEnemy();
//moveright
this.moveRight();
//move down
this.moveDown();
//move up
this.moveUp();
//move right
this.moveRight();
//attack
this.attackNearbyEnemy();

//**********Taunt the Gaurds*****
//moveright
this.moveRight();
//bust down door
this.bustDownDoor();
//move right
this.moveRight();
//say wassup
this.say("Hello")
//move left x2
this.moveLeft();
this.moveLeft();
//say attack;
this.say("Attack")
//get phoebe to fllow move right
this.moveRight();
//follow me
this.say("Follow me")

this.moveRight();
this.moveRight();
//move up
this.moveUp();
//move right
this.moveRight();
// say hello
this.say("Heylow")
//move down
this.moveDown();
//move right
this.moveRight();
//move up
this.moveUp();
//move right
this.moveRight();
  

//*****It's a Trap*****

//move down
this.moveDown();
this.moveDown();
//say wassup
this.say("wassup")
//move up
this.moveUp();
this.moveUp();  

//**break the trap, its a prison 


// **Taunt***

//say taunts 4x
this.say("Hey you");
this.say("Wanna fight?");
this.say("Come here!");
this.say("You scared?");

// **Cowardly taunt***
// Run your soldier out where the ogres can hear you.
this.moveXY(50,16);
// Say something!
this.say("Yolo");
// Then run back behind the arrow towers for safety.
this.moveXY(70,10);

//**Commanding Followers

// Saying anything with "follow" in it will get nearby soldiers to follow you
this.say("follow the leader");
// Saying anything with "attack" will send nearby troops into a battle mode.
this.say("Time to attack");
// Make sure Tharin is safe!
this.moveXY(62,46)
//taunt
this.say("OGRE!")
//move to safety
this.moveXY(60,63);

//***Mobile Artillery


//move into range
this.moveXY(57,32);
//attack
this.attackXY(67,52);
this.attackXY(63,46);
//move into range
this.moveXY(48,44);
//attack
this.attackXY(49,67);
this.attackXY(49,55);



// Reflection:
// Write your reflection here.

In this particular example 'this' represents the object, which was the character. The "()" represents
where the arguments are supposed to be inputted. When there is no argument, you can leave it blank.
The semicolons are necessary when you have more than one statement one a line. If there is only one
statement on a line, the semicolons become optional. There are a lot of different views on the use of
semicolons in javascript. This challenge was pretty straightforward, as I just typed out the
psuedocode and typed in the code, then ran it to see where I could fix things. This helped me really with
how psuedocode can help, because I am very new to the idea of psuedocode. This challenge was tedious,
in that even the simple easy moves needed psuedocode, which got repetitive and a little boring.
Although it was a little tedious, it was good for practice.
