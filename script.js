const gameBoard = (() => {
    // board contains data representation of board
    // board takes input to update data representation
    // board updates when data is updated
    const board = ["", "", "", "", "", "", "", "", ""];

    const takeInput = (index, input) => {
        board.splice(index, 0, input);
        updateBoardDisplay();
    }
    const input = document.querySelectorAll(".cell");
    const displayController = () => {

    }
    return {
        takeInput,
        input,
        displayController
    };
})();

const player = (name, choice) => {
    return {
        name,
        choice
    }
}