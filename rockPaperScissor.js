var playerWin = 0;
var computerWin = 0;

var tie = 0;


for(let i = 0; i < 5; i++) 
{

var choice = ['rock', 'paper', 'scissors'];

function getChoice()
{
    let rand=Math.random();
         if (rand < 0.34 ){
                return choice[0];
            }else if (rand < 0.67 ){
                return choice[1];
            }else{
                return choice[2];
            }
}

var computerChoice = getChoice();
var myChoice = getChoice();


console.log("Computer choice: "  + computerChoice );
console.log("My choice: "+ myChoice);


 function compare () 
 {
     
        if(computerChoice == myChoice)
        {
                tie++;
                return "The Result is Tie!";
        }

        if(computerChoice == 'rock'){
            if(myChoice == 'scissors'){
                    computerWin++;
                    return "Result is you LOSE!";
                }else {
                    playerWin++;
                    return " Result is you WIN!";
                }
            }
            
        if(computerChoice == 'paper'){
            if(myChoice == 'rock'){
                    computerWin++;
                    return "Result is you LOSE!";
                }else {
                    playerWin++;
                    return "Result is you WIN!";
                }
            }

        if(computerChoice == 'scissors'){
                if(myChoice == 'paper'){
                    computerWin++;
                    return "Result is you LOSE!";
                }else {
                    playerWin++;
                    return "Result is you WIN!";
                }
            }
};

var results = compare(myChoice,computerChoice);

console.log(results);


}

console.log("Final Results: WIN="+computerWin+"; "+ "LOSS=" + playerWin+";"+ "Tie="+tie);