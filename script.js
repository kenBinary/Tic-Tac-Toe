const gameBoard = (() => {
    // board contains data representation of board
    // board takes input to update data representation
    // board updates when data is updated
    const board = ["", "", "", "", "", "", "", "", ""];

    const takeInput = (index, input) => {
        board.splice(index, 0, input);
        displayController(index,input);
    }
    const displayController = (index,input) => {
        const cell = document.querySelectorAll(".cell");
        cell.forEach((element)=>{
            if (parseInt(element.id) === index) {
                element.textContent = input;
            }
        });
    }
    return {
        takeInput,
        displayController
    };
})();

const player = (name, choice) => {
    return {
        name,
        choice
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

})();