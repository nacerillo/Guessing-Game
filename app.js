var name = prompt("Hi! What's your name?");
/*var questionArray = ["QUESTION 1: Being from Florida, I must be totally crazy, right?", 
"QUESTION 2: I can't stand the weather here in Washington! True or false?",
"QUESTION 3: Does Jupiter has over a dozen moons?",
 "QUESTION 4: Will things be ANY better in 2021?"]*/
var correct = 0;
alert("Nice to meet you " + name + "! and welcome! Prepare to answer a some questions!");

firstQuestion();

function firstQuestion(){
var crazy = prompt("QUESTION 1: Being from Florida, I must be totally crazy, right?");
if( crazy.toLowerCase() == "y" || crazy.toLowerCase() == "yes"){
    alert("Sorry, that is incorrect");
}
else { 
    alert("Thats right! I'm a completely normal person... relatively...");
    correct+=1;
}
}
var weather = prompt("QUESTION 2: Do you think that I hate the weather here?");
if(weather.toLowerCase() == "y" || weather.toLowerCase() == "yes"){
    alert("that is correct. I dont like it here, butI might get used to it.")
    correct+=1;
}
else {
    alert("incorrect. I'm getting used to it, but to be honest I'm not a fan lol");
}

var moons = prompt("QUESTION 3: Does Jupiter has over a dozen moons?");
    if(moons.toLowerCase() == "y" || moons.toLowerCase() == "yes"){
        alert("That's right! But did you know that Jupitor has OVER 70 OF THEM! Thats a LOT of friggin moons!");
        correct+=1;
}
    else {
        alert("Incorrect. Jupitor has well over a dozen moons. In fact, Jupitor has over 70 moons!");
    }

var year =  prompt("QUESTION 4: Will things be ANY better in 2021?");
    if(year.toLowerCase() == "y" || year.toLowerCase() == "yes"){
        alert("Damn right it will! We're starting out the new year with learning and personal growth! We're gonna MAKE this year better!");
        correct+=1;
    }
    else {
        alert("WRONG! Things WILL get better, we just gotta believe that we can MAKE it better");
    }
var answers = [];
var guesses = 6;
var age = 26;
while(guesses  > 0){
    var number = prompt(" QUESTION 5: How old am I? you have " + guesses + " guesses. ");
    if(number == age){
        alert("That is correct!");
        correct+=1;
        break;
    }
    else if(number > age){
        alert(
            "too high"
        );
        
    }
    else if (number < age){
        alert("too low")
    }
    
        guesses -= 1;
    
}
if(guesses <= 0){
    alert("you have ran out of guesses. I am actually 26 years old");
}

var attempts = 6;
var movieArray = ["arrival", "silence of the lambs", "the isle of dogs", "lord of the rings", "elf", "braveheart", "mad max", "pulp fiction", "guardians of the galaxy"]
alert("QUESTION 6: Can you name one of my favorite movies?")

while(attempts > 0){
    movie = prompt("You have " + attempts + " attempts remaining");

    for(var x = 0; x < array.length; x++){
        if(movie.toLowerCase() == movieArray[x]){
        correct += 1;
        alert("you've answered correctly! see what other movies I like printed in the console!" );
        console.log(movieArray);
        break;
        }
        else{
            alert("Wrong");
            attempts -= 1;
            break;
        }
    }
}
if(attempts == 0){
    alert("You have ran out of attempts. but you can see some of my favorite movies listed on the page, and printed in the console");
    console.log(movieArray);
}

alert("You have answered " + correct + "out of 7 questions correctly" );

//console.log('loop is done', answers);

