const ticTacToe = (xName, oName) => {

    // const X = xName;
    // const O = oName;

    const players = {
        X: xName,
        O: oName,
    }

    let currentPlayer = "X";

    // lookup table
    const nextPlayer ={
        X: O,
        O: X,
    }

    const board = [
        "ongoing", // ongoing, win-X, win-O, draw
        "", "", "",
        "", "", "",
        "", "", "",
    ]

    function validMove(move) {
        return (1<=move && move<=9) && board[move]=== "";
    }

    function gameStatus() {
        // ongoing, win-x, win-o, draw
        let result = "ongoing";

        const winningCombos = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],

            [1, 4, 7],
            [2, 5, 8],
            [3, 6, 9],

            [1, 5, 9],
            [3, 5, 7],
        ];

        winningCombos.forEach(([i1, i2, i3])=>{
            if(board[i1] === board[i2] &&
                board[i2] === board[i3] &&
                board[i3] === currentPlayer
            ){
                result = `win-${currentPlayer}`;
                return result;
            }
        });

        let areAllCellsTaken = true;
        for(let i=1; i<=9; i++){
            if(board[i] === "") {
                areAllCellsTaken = false;
                break;
            }
        }
        if(areAllCellsTaken){
            result = "draw";
        }

        return result;

    }


    // high level API for the game to be played
    return (player, move) => {
        // validate right player
        if(player!==currentPlayer) {
            return [false, `Not your turn. It's ${currentPlayer}'s turn.`];
        }
        // validate right move

        if(!validMove(move)){
            return [false, "Invalid move, try again."]
        }

        board[move] = currentPlayer;
        board[0] = gameStatus();
        currentPlayer = nextPlayer[currentPlayer];
        // advance game:
        //  1. update board
        //  2. compute game status
        //  3. next player turn

        return [true, board];
    };

}

module.exports = {ticTacToe}