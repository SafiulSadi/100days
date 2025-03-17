'use strict';
// console.log(document.querySelector('.message').textContent); 
// document.querySelector(".message").innerHTML = "Hello";
// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 2;
// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value)

// // event listener
let score = 20;
let secretNumber = Math.trunc (Math.random()*20+1)
let highScore = 0;

document.querySelector('.again').addEventListener('click', function (){
    score = 20;
    secretNumber = Math.trunc (Math.random()*20+1)
    document.querySelector('.message').textContent = "Start gussing...";
    document.querySelector('.number').textContent = "?"
    document.querySelector('.guess').value = '';    
    document.querySelector('.score').textContent = score;


    document.querySelector("body").style.backgroundColor = "rgb(34, 34, 34)";

        document.querySelector('.number').style.width = '15rem'
})
document.querySelector(".check").addEventListener('click', function (){
    const guess = Number(document.querySelector(".guess").value);
    console.log(typeof(guess));
    if(!guess){
        document.querySelector(".message").textContent = "No number!"
    }else if (guess === secretNumber) {
        document.querySelector(".message").textContent = "🎉 Correct Number!";
        if(score > highScore){
            document.querySelector('.highscore').textContent = score;
        highScore = score;
        }
        //     document.querySelector(".highscore span").textcontent = highScore;
        // // }
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").textContent = secretNumber;

        document.querySelector('.number').style.width = '30rem'

    }else if(guess !== secretNumber){
        if(score > 1){

            document.querySelector('.message').textContent = guess> secretNumber?"too high!📈": "too low 📉"; 
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = "💥 You lost the game!"
            document.querySelector('.score').textContent = 0;
        }
    }
})