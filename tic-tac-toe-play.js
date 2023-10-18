const {ticTacToe} = require("./tic-tac-toe")

const play = ticTacToe("X", "O");

const printBoard = (board) => {
    for(let i=0; i<3; i++){
        for(let j = 1; j<=3; j++){
            process.stdout.write(`${board[3 * i + j] || "_"} `);
        }
        process.stdout.write("\n");
    }
    process.stdout.write("\n");
}

let [result, board] = play("X", 1);
if(result) printBoard(board);
else console.log(board);

[result, board] = play("O", 2);
if(result) printBoard(board);
else console.log(board);
