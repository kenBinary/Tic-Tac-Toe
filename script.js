const gameBoard = (() => {
    // board contains data representation of board
    // board takes input to update data representation
    // board updates when data is updated
    const board = ["", "", "", "", "", "", "", "", ""];
    const takeInput = (index, input) => {
        board.splice(index, 0, input);
    }
    const updateBoardDisplay = () => {
        // console.log("aslkdjf");
    }
    return {
        takeInput,
        updateBoardDisplay
    };
})();