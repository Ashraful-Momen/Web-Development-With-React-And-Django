//Guessing Number Games: 

let low = 1;
let high = 10;

let correcr_ans = (Math.ceil(Math.random() * 10));  // Random Number :1-10.

let userInput;


for (let i = 1; i <= 3; i++) {


    (i == 1) ? userInput = parseInt( prompt('Enter Your Guessing Number : 1-10')) : userInput = parseInt(prompt(`${i} Chance For You ! Enter Your Guessing Number (1-10):`));


    if (userInput > correcr_ans) {
        alert(` Correct answer is smaller! `);

    }
    else if (userInput == correcr_ans) {
        alert(`You Win!`);
        break;
    }

    else if (userInput < correcr_ans) {
        alert(`Correct answer is greater!!  `);
    }

}


if(userInput != correcr_ans){
    alert(`Your loss! `);
}






