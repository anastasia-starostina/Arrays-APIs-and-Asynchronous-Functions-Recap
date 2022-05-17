//TASK 1
/*
-Create a function with name as an argument ✅
-Function returns the name in a string 'is now a legend' ✅
-Loop through celebrity names concatenating them with 'is now a legend'✅
-Save them in a new variable ✅
-Use a for loop to iterate through celebrity names that start with a vowel ✅
  - Identify which celebrity names start with a vowel ✅
-Store the names in a new variable ✅
*/

//Function
function makeLegend(name) {
console.log(`${name} is now a legend`);
}
//Array of celebrities
const celebs = [
  "David Beckham",
  "Cher",
  "Madonna",
  "Tom Petty",
  "Cristiano Ronaldo",
  "Whoopi Goldberg",
  "Samuel L Jackson",
  "Angelina Jolie",
  "Richard Osman",
  "Emma Thompson"
];
//Iterating through celebrity names
let legendaryCelebs = [];

for(let i = 0; i < celebs.length; i++) {
 let person = celebs[i];
 legendaryCelebs.push(makeLegend(person));
}
console.log(legendaryCelebs);

//Initiating arrays of vowels and celebrity names starting with a vowel

let vowelCelebs = [];

let vowels = ["A", "E", "I", "O", "U"];

//Iterating through celebrity names starting with a vowel
for(let i = 0; i < celebs.length; i++) {
  let person = celebs[i];
  let fisrtCharacter = person.charAt(0);
  if (vowels.includes(fisrtCharacter)) {
   vowelCelebs.push(person);
  }
}
console.log(vowelCelebs);