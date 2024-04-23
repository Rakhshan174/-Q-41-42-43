"use strict";
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
//  which prints the name of each magician in the array.
Object.defineProperty(exports, "__esModule", { value: true });
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) { // i stand for index string
        magicians[i] = magicians[i] + '       the great';
    }
}
// const magicians2: string[] = ["usman", "haseeb", "wajahat"]
// make_great(magicians2)
// show_magicians(magicians2)
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a 
// copy of the array of magicians’ names. Because the original array will 
// be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show 
// that you have one array of the original names and one array with the Great added to each magician’s name.
// Task 43
function make_great2(magicians) {
    const greatMagicians = [];
    for (let i = 0; i < magicians.length; i++) {
        greatMagicians.push(magicians[i] + '   the Great');
    }
    return greatMagicians;
}
const magician3 = ["usman", "haseeb", "wajahat"];
const greatMagicians2 = make_great2(magician3);
show_magicians(magician3);
show_magicians(greatMagicians2);
