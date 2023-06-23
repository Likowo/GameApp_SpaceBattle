//**** */ window.prompt("enter user name")

// let username = window.prompt("enter user name")
// console.log(username)

// window.alert( " Caution alien upfront")
// alertMssg = window.prompt("enter user name") + window.alert( " Caution alien upfront")

// console.log(alertMssg)

//*** */ window.alert(`${username} caution alien upfront`)


///==============================================//Inclass Lab --Mini Mockup Project -- Using OOP ( Object Oriented programing),loops, and functions.
// Build a game battling alien spaceships using Javascript.
// Earth has been attacked by a horde of aliens! You are the captain of the USS Assembly, on a mission to destroy every last alien ship.

// Battle the aliens as you try to destroy them with your lasers.

// There are six alien ships. The aliens' weakness is that they are too logical and attack one at a time: they will wait to see the outcome of a battle before deploying another alien ship. Your strength is that you have the initiative and get to attack first. However, you do not have targeting lasers and can only attack the aliens in order. After you have destroyed a ship, you have the option to make a hasty retreat.

//=======================================//
///***   Round Logic */
// A game round would look like this:

//1. You attack the first alien ship
// If the ship survives, it attacks you
        ////....// If you destroy the ship, you have the option to attack the next ship or to retreat
/// Ans: USS Assembly players --nasa1,nasa2, nasa3, etc and Aliens -- alien1,alien2,alien3 etc

// const generateRandomNum = (min, max) => {
//     let random = Math.floor(Math.random() * (max - min) + min);
//     return random
// }

// min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1) + min);




//   let alien1 = {
//     name: "Yellow Star",
//     hull : generateRandomNum (3, 6),
//     firePower : generateRandomNum (2, 4),
//    accuracy :  generateRandomNum (6, 8),
//       image : "https://gifdb.com/images/high/toy-story-alien-antenna-h15mzmarovb8r70b.gif"
//   }



  ///***   Round Logic == Remember every game is built in a While Loop *******/
// A game round would look like this:

//1. You attack the first alien ship
// If the ship survives, it attacks you
        ////....// If you destroy the ship, you have the option to attack the next ship or to retreat
/// Ans: USS Assembly players --nasa1,nasa2, nasa3, etc and Aliens -- alien1,alien2,alien3 etc

// Actor Object
// (A) Write a fxn called everyPlayerAttack that attacks  alien hull(batteryLife) minus player one's firepower.  Write an IF/ELSE statement that returns "Alien dies -player1 wins" if alien hull ( batterylife) is less than or equal to zero.Else returns "Alien survives - You are being attacked"




let player1 = {
    name: "nasa1",
    hull :20,
    firepower: 5,
    accuracy: 7,
    everyPlayerAttack : function(alienObject) {
        console.log("player1 attacks alien1")
        alienObject.hull =  alienObject.hull - player1.firepower
        console.log(alienObject.hull)
    } 
  };

 // Now put your logic in a While Loop so it runs until one of the fighters is destroyed
   //***The while loop loops through a block of code as long as a specified condition is true. Synthax is while(condition){ code block to be executed } * scroll down to see the While loop ****/


 //Action that the actor performs ********
// const everyPlayerAttack = () => {
//     console.log("player1 attacks Alien1")
//     alien1.hull =  alien1.hull - player1.firepower
//     console.log(alien1.hull)
// } 

// player1.everyPlayerAttack()

//(B) Write a fxn called everyAlienAttack that attacks player1's hull(batteryLife) minus alien's firepower. Write an IF/ELSE statement that returns " player1 survives" if player1's hull is greater than zero. ELSE return "player1 dies" if hull(batteryLife) is less than zero

let alien1 = {
    name: "Yellow Star",
    hull : 3,
    firePower : 4, 
   accuracy :  .8,
      image : "https://gifdb.com/images/high/toy-story-alien-antenna-h15mzmarovb8r70b.gif",
      
 everyAlienAttack : function (playerObject) {
    console.log("Alien1 attacks player1 ")
    playerObject.hull = playerObject.hull - alien1.firePower
    console.log( playerObject.hull)
} 
  }

// player1.everyPlayerAttack(alien1)
// alien1.everyAlienAttack(player1)

let battleOn = true
while (battleOn) {
    if ( alien1.hull >=1  && alien1.hull <= 6) {
        player1.everyPlayerAttack(alien1)
        console.log('Alien dies - Player1 wins')
          console.log('game about to end')
      } else {
        console.log('Alien survives - You are being attacked')
        battleOn = false
      }     
}

//**** second While loop - for when player1 dies */
 battleOn = true
while (battleOn) {
    if ( player1.hull >= 1 && player1.hull <= 20 ) {
        alien1.everyAlienAttack(player1)
        console.log('player1 survives')
      } else {
        console.log('player1 dies')
        console.log('game about to end')
        battleOn = false
      }     
}



// if ( alien1.hull <= 0 && player1.hull >0) {
//     console.log( 'Alien dies')
//   } else {
//     console.log("Alien survives - You are being attacked")
//   }     



//    let allAliens ={alien1,alien2,alien3,alien4,alien5,alien6}

  let alienAttacking = alien1;
  let counter = 0 //counter starting at zero means the first alien is in battle
  console.log(counter,":Counter")
  console.log(`${alienAttacking.name}`, ":Alien Name")


        const newRound = () => {
            console.log(alienAttacking);
            let strike =player1.firepower;
            let alienLife = alienAttacking.hull;
            let shot = ( alienLife -= power ); //alienattacking life determined by type of shot taken
           alienAttacking.hull = shot;

            console.log(`${player1.name} shot ${alienAttacking.name} with power of ${power}`);
            console.log(`${alienAttacking.name}'s life is now ${shot}`);
            
        }


//2. If you survive, you attack the ship again
// 4.If it survives, it attacks you again ... etc
  // i.e. Create a fxn named Attack, that returns the difference when you are  hit i.e. hull(hitpoint/battery life) - firepower(Amount f damage to the hull )
  
  

//3. If you retreat, the game is over, perhaps leaving the game open for further developments or options
//. You win the game if you destroy all of the aliens
//. You lose the game if you are destroyed


   ///////// Pseudo Codes //////////////////
// 1. USS Assembly attacks the first alien ship (Yellow Star).IF Ship survives, it attacks USS Assemble. Esle IF ship destroyed, USS Assembly attacks next ship(Spinning Plate).
// Space arena reads "One Alien Ship Down 5 to go!!
// Then use window.alert ( or alert()method) that pops up "Caution Alien Upfront"

// 2.  USS Assembly attacks the first alien ship (Yellow Star).IF Ship survives, it attacks USS Assemble. USS Assembly survives. USS Assembly attacks second ship( Yellow Stone). Alien ship survives. Alien ship attacks USS Assembly. This attacks continue until all Alien ships are destroyed. Space arena reads "You Won. Earth is Safe!!"



//=============================//

// Ship Properties
//1. hull is the same as hitpoints. If hull reaches 0 or less, the ship is destroyed
//2. firepower is the amount of damage done to the hull of the target with a successful hit
//3. accuracy is the chance between 0 and 1 that the ship will hit its target

//A) Your spaceship, the USS Assembly should have the following properties:

// hull - 20 (hit points)
// firepower - 5 (Amount f damage to the hull)
// accuracy - .7 ( i.e 70% chance of hitx target) (chance between 0 and 1 that ship will hit its target)
   //Thus write a fxn that takes in  an object  with 3 propetries using object Literal and Constructor

    //Object literal

    //  const ussAssembly = {
    //     hull :'20',
    //     firepower: '5',
    //     accuracy: '.7',
    //  }
    // console.log(ussAssembly.accuracy)
     
    //  // //Constructor
    //  const USSAssembly = (hull,firepower,accuracy) => {
    //      this.hull = hull;
    //      this.firepower = firepower;
    //      this.accuracy = .72
    //  }
         // below .7 is a hit while above .7( e.g .71) is a miss
         
        //  if (Math.random() < alienAttacking.accuracy) {
        //      	console.log('You have been hit!');
        //       } else {
        //         console.log('You can attack')
        //       }

//B) The alien ships should each have the following ranged properties determined randomly:using object Literal/Constructor.

// hull - between 3 and 6
// firepower - between 2and 4
// accuracy - between .6and .8

// const alienShip =  {
//     hull : generateRandomNum(3,6)
//     firepower: generateRandomNum(2,4)
//     accuracy: generateRandomNum(6,8)

//  }

//    // //Constructor
//    const alienShips = (hull,firepower,accuracy) => {
//     this.hull = hull;
//     this.firepower = firepower;
//     this.accuracy = .6
// }

// You could be battling six alien ships each with unique values.

// Example use of accuracy to determine a hit:

// if (Math.random() < alien[0].accuracy) {
// 	console.log('You have been hit!');
// }

// if (Math.random() < alienShips[2].accuracy) {
//     console.log('You have been hit!');
//  }





////***** */ 👾 Where to begin? *******//

// Read over the specifications. Make sure you understand them. If you do not understand them, try to clarify them for yourself.
// Plan the game. This is an act of simplification.
// From these programming principles

// Use pseudo code to get a sketch of your game first.
// Avoid Creating a YAGNI (You aren't going to need it) - You should not try to add functionality until you need it.
// Do the simplest thing that could possibly work.
// Often, beginning something is an act of creative inspiration to find the simplest possible case. The first step is not necessarily a matter of logical deduction. Once you have a few 'clues' you can follow the trail of crumbs to a logical conclusion.


//**** */ Actors and then actions ****/
// A good rule of thumb is start with the actors and then the actions. What actors do we need? In this case, we need our spaceship and the alien spaceships. An action these ships can take is to attack something. Perhaps a ship object (an actor) could therefore have an attack method (an action).

// A repeating action in the game is that these ships attack each other until one of them has been destroyed. This might necessitate a loop or multiple loops.




// 👾 Start simpler than the instructions suggest
// Keep these five things in mind when planning and coding your game:

// Begin even simpler than the specifications suggest. In this case, perhaps just start with one alien ship instead of many alien ships, and get the code for one ship working first.
// Root out any 'gotchas' that you really ought to foresee. In this case, will we really want nested loops -- one for a battle, one for iterating over aliens)? How will we exit one loop and then exit the parent loop? Perhaps keeping it to one loop somehow will help us avoid unnecessary difficulties.
// When coding, form a solid and testable foundation before building upon it with more functionality. In this case, is there a bug where an alien can attack after it has been destroyed? Better fix that bug before increasing the complexity of the code.
// When you have a piece of functionality tested and working, commit it. Try not to commit broken code. Unsure of when to commit? Commit when something works. You want to save working code.
