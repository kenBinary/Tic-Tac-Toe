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
        const rows = {
            first: board.slice(0,3),
            second: board.slice(3,6),
            third: board.slice(6,9)
        }
        if (rows.first.every(xChecker) || rows.first.every(oChecker)) {
            console.log("win first row")
        }
        else if(rows.second.every(xChecker) || rows.second.every(oChecker)){
            console.log("win second row")

        }
        else if(rows.third.every(xChecker) || rows.third.every(oChecker)){
            console.log("win third row")
        }

        function xChecker(value) {
            return value === "x";
        }
        function oChecker(value) {
            return value === "o";
        }
    }

    const verticalChecker = (board)=>{
        const columns = {
            first: board.filter((cValue,index)=>{
                return index === 0 || index == 3 || index === 6 ? true: false;
            }),
            second: board.filter((cValue,index)=>{
                return index === 1 || index == 4 || index === 7 ? true: false;
            }),
            third: board.filter((cValue,index)=>{
                return index === 2 || index == 5 || index === 8 ? true: false;

            })
        }
        if (columns.first.every(xChecker) || columns.first.every(oChecker)) {
            console.log("win first row")
        }
        else if(columns.second.every(xChecker) || columns.second.every(oChecker)){
            console.log("win second row")

        }
        else if(columns.third.every(xChecker) || columns.third.every(oChecker)){
            console.log("win third row")
        }

        function xChecker(value) {
            return value === "x";
        }
        function oChecker(value) {
            return value === "o";
        }
    }


    const diagonalChecker = (board)=>{
        const diagonal = {
            first: board.filter((cValue,index)=>{
                return index === 2 || index == 4 || index === 6 ? true: false;
            }),
            second: board.filter((cValue,index)=>{
                return index === 0 || index == 4 || index === 8 ? true: false;
            })
        }

        if (diagonal.first.every(xChecker) || diagonal.first.every(oChecker)) {
            console.log("win first bruh")
        }
        else if(diagonal.second.every(xChecker) || diagonal.second.every(oChecker)){
            console.log("win second test")

        }
        function xChecker(value) {
            return value === "x";
        }
        function oChecker(value) {
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
                        verticalChecker(board);
                        diagonalChecker(board);
                        players[0].isTurn = !players[0].isTurn
                        players[1].isTurn = !players[1].isTurn
                    }
                    else if (players[1].isTurn) {
                        takeInput(element.id,players[1].choice)
                        horizontalChecker(board);
                        verticalChecker(board);
                        diagonalChecker(board);
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
        horizontalChecker,
        verticalChecker
    }

})();
const first = player("test","x");
const second = player("test2","o");
game.initializePlayers(first,second);
game.playGame(gameBoard.takeInput,gameBoard.board); 