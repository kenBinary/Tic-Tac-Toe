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
    const isTurn = false;
    return {
        name,
        choice,
        isTurn
    }
}

const game = (() => {
    // - Initialize Players and Gameboard.
    // - TicTacToe module handles a playRound function.
    // - Player 1 (X) picks a square.
    // - Gameboard array changes
    // - displayController renders the new Gameboard
    // - Player 2 (O) turn and picks a square.
    // - Check winner every round.
    // -.....and so on.
    // const firstPlayer = {};
    // const

    const players = [];

    const initializePlayers = (playerOne,playerTwo)=>{
        const firstPlayer = playerOne;
        const secondPlayer = playerTwo
        players.push(firstPlayer,secondPlayer);
    }
    const playGame = (takeInput)=>{
        const cell = document.querySelectorAll(".cell");
        cell.forEach((element)=>{
            element.addEventListener('click',(e)=>{
                if ((e.target.textContent)==="") {
                    if (!players[0].isTurn) {
                        takeInput(element.id,players[0].choice)
                        players[0].isTurn = !players[0].isTurn
                        players[1].isTurn = !players[1].isTurn
                    }
                    else if (players[1].isTurn) {
                        takeInput(element.id,players[1].choice)
                        players[0].isTurn = !players[0].isTurn
                        players[1].isTurn = !players[1].isTurn
                    }
                }
            });
        });

    }

    //intialize players



    return{
        playGame,
        initializePlayers,
        players
    }

})();
const first = player("test","x");
const second = player("test2","o");
game.initializePlayers(first,second);
game.playGame(gameBoard.takeInput);