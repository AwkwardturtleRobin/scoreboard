//Home Score
let scoreHome = document.getElementById("score-home");
const oneHome = document.getElementById("one-home");
const twoHome = document.getElementById("two-home");
const threeHome = document.getElementById("three-home");
let score = 0

oneHome.addEventListener("click", function(){
    score += 1
    scoreHome.innerHTML = score
});

twoHome.addEventListener("click", function(){
    score +=2 
    scoreHome.innerHTML = score
});

threeHome.addEventListener("click", function(){
    score+=3
    scoreHome.innerHTML = score
});

//Guest Score

let scoreG = 0
let scoreGuest = document.getElementById("score-guest");
const oneGuest = document.getElementById("one-guest"); 
const twoGuest = document.getElementById("two-guest");
const threeGuest = document.getElementById("three-guest");  

oneGuest.addEventListener("click", function(){
    scoreG += 1
    scoreGuest.innerHTML = scoreG
});

twoGuest.addEventListener("click", function(){
    scoreG +=2 
    scoreGuest.innerHTML = scoreG
});

threeGuest.addEventListener("click", function(){
    scoreG+=3
    scoreGuest.innerHTML = scoreG
});

//clear

const clearBtn = document.getElementById("clear-btn");

clearBtn.addEventListener("click", function(){
    scoreHome.innerHTML = 0;
    score = 0;
    
    scoreGuest.innerHTML = 0;
    scoreG = 0;
})