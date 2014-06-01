// This is a solo challenge

// Your mission description:
// Have your knight move through the hallway and attac the monster until the monster is dead.
// 
// 

// Pseudocode
// Create objects for knight and monster
// Move the knight down towards the monster
// When the knight meets the monster, have the knight attack 
// Attack until monster is dead
// 

// Initial Code
//create objects knight and ogre
var knight = {
	health:10,
	strength:2,
}

var ogre = {
	health: 10,
	strength:1,
}
//move  knight towards monster

//create function for the knight to attack 
knight.attack = function() {
	if (ogre.health > 0) {
		ogre.health -= knight.strength
		if (ogre.health === 0) {
			console.log("Ogre is dead!")
			return ogre.health;
		}
		console.log("Ogre still has life left! Attack again!")
	}

	else {
		console.log("Ogre is already dead!")
	}
	return ogre.health;
}
// Refactored Code




// Reflection
// This was by far the most confusing assignment, which made it one of the most
// difficult. I really had no idea where to start, or what this assignment
// was to accomplish exactly. I tried my best with the knowledge I had, but I'm
// not sure I'm doing things properly. The good thing is, I'm definitely learning
//  a lot more about javascript and it's objects via research. I feel that this
// would be a perfect peer pairing material, but we are not allowed to pair on 
// solo challenges. Definitely going to come back to this, and study up on 
// JS when I have more time.