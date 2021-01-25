// Functions - piece of code that does one or more actions

function go(name, age){

    // whatever we put here is going to be excetuded when go function is called

    alert(name);
    alert(age);
}

// nothing happens because we defined a function but we didn't CALL the function 

// function can be called as many times as we want 

go("Greta", 25);


// name, age ARE ARGUMENTS, AND WHAT THEY ALLOW US IS to make code resuable

// --> at first, we can think we can use:
// let name = "greta";
// let age = 25;  ------- and then we can forget this whole argument thing 

///// we can do alert("name") BUUUUUUUUUT!! if we code and  use ARGUMENTS, IT IS REUSABLE 

// we can use 


// and we can use it second time with a different arguments 

// go("Greta", 25);
// go("Laura", 28);


/*


function add(first, second){
    return "Greta";

}

let sum = add(1,2);
alert(add(1,2));


*/

//////////// generate random insult 

// WE use pickRandomWord funtion when we need a random word from an array, instead using [Math.floor(Math.random() * length)] each time 

let pickRandomWord = function(words){
    return words[Math.floor(Math.random() * words.length)];
    }


generateRandomInsult = function(){
    let randomBodyParts = ["Face", "Nose", "Hair"];
    let randomAdjectives = ["Smelly", "Boring", "Stupid"];
    let randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];

    let randomString = "Your " + pickRandomWord(randomBodyParts) + " " + pickRandomWord(randomWords) + "!!" 

    return randomString;

}

console.log(generateRandomInsult());
console.log(generateRandomInsult());
console.log(generateRandomInsult());
console.log(generateRandomInsult());

