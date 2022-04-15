const gameBoard = (() => {
    // board contains data representation of board
    // board takes input to update data representation
    // board updates when data is updated
    const board = ["", "", "", "", "", "", "", "", ""];

    const takeInput = (index, input) => {
        board.splice(index , 1, input);
        updateDisplay(parseInt(index),input);
    }

    const updateDisplay = (index,input) => {
        const cell = document.querySelectorAll(".cell");
        cell.forEach((element)=>{
            if (parseInt(element.id) === index) {
                element.textContent = input;
            }
        });
    }


    return {
        takeInput,
        updateDisplay,
        board
        
    };
})();

const player = (name, choice) => {
    return {
        name,
        choice
    }
}

const firstPlayer = player("Player 1","x");
const secondPlayer = player("Player 2", "o");

const game = (() => {
    // - Initialize Players and Gameboard.
    // - TicTacToe module handles a playRound function.
    // - Player 1 (X) picks a square.
    // - Gameboard array changes
    // - displayController renders the new Gameboard
    // - Player 2 (O) turn and picks a square.
    // - Check winner every round.
    // -.....and so on.


    const playGame = (takeInput)=>{
        const cell = document.querySelectorAll(".cell");
        cell.forEach((element)=>{
            element.addEventListener('click',(e)=>{
                if ((e.target.textContent)==="") {
                    takeInput(element.id,"x");
                    console.log(element.id);
                }
            });
        });

    }



    return{
        playGame
    }

})();


game.playGame(gameBoard.takeInput);