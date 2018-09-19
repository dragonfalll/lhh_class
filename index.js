let answer = random(1,100);
let done = false;

while (! done) {
    let guess = prompt("for thousands years sleeped hoping for a child with the gift of life Enter a number between 1 and 10 or DIE");

    if (guess < answer) {
        alert("Too low!");
    }
    else if (guess > answer) {
        alert("Too high!");
    }
    else {
        alert("You got it!");
        done = true;
    }
}