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

    const horizontalChecker = (board)=>{
        const a = [...board];
        const rows = {
            first: a.slice(0,3),
            second: a.slice(3,6),
            third: a.slice(6,9)
        }
        if (rows.first.every(test) || rows.first.every(test2)) {
            console.log("win first row")
        }
        else if(rows.second.every(test) || rows.second.every(test2)){
            console.log("win second row")

        }
        else if(rows.third.every(test) || rows.third.every(test2)){
            console.log("win third row")
        }
        else{
            console.log("no winner")
        }

        function test(value) {
            return value === "x";
        }
        function test2(value) {
            return value === "o";
        }
    }
    
    const playGame = (takeInput,board)=>{
        const cell = document.querySelectorAll(".cell");
        cell.forEach((element)=>{
            element.addEventListener('click',(e)=>{
                if ((e.target.textContent)==="") {
                    if (!players[0].isTurn) {
                        takeInput(element.id,players[0].choice)
                        horizontalChecker(board);
                        players[0].isTurn = !players[0].isTurn
                        players[1].isTurn = !players[1].isTurn
                    }
                    else if (players[1].isTurn) {
                        takeInput(element.id,players[1].choice)
                        horizontalChecker(board);
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
        players,
        horizontalChecker
    }

})();
const first = player("test","x");
const second = player("test2","o");
game.initializePlayers(first,second);
game.playGame(gameBoard.takeInput,gameBoard.board); 