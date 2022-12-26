let maximum = parseInt(prompt("Enter in your maximum number"));
//Check for real number  
while (!maximum){
    maximum = parseInt(prompt("Enter a valid number!"));
}
const targetNum = Math.floor(Math.random()*maximum) + 1;
console.log(targetNum);


let guess = parseInt(prompt("Enter your first guess:"));
let attempts = 1;
//Check for real number
while(!guess){
    guess = parseInt(prompt("Enter a valid number:"));
}
//Loop until guess equals target numbers
while (guess !== targetNum){ 

//Guess the number and check for high or low
    if (guess > targetNum){
        guess = parseInt(prompt("Your Number was to high guess again"));
        attempts++;
    }else{
        guess = parseInt(prompt("Your number was to low. Guess Again:"));
        attempts++;
    }
}

alert(`You win. It took you ${attempts} tries to win.`);
