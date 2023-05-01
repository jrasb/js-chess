console.log('Chessmode :D');

const chessboardDiv = document.querySelector('#chessboard');

const boardHeight = 8;
const boardWidth = 8;

const makeBoard = () => {
  return new Array(boardHeight).fill(null)
    .map(() => new Array(boardWidth).fill(0))
}

let chessboard = makeBoard();

const renderGrid = () => {
  chessboardDiv.innerHTML = null;

  let x = -0x1;
  let y =  0x0;

  chessboard.forEach(
    (row) => {
      for (let i = 0; i < row.length; ++i) {
        const tileElement = document.createElement('div');

        if (x == (row.length - 1)) {
          x = 0x0;
          y += 0x1;
        } else {
          x += 0x1;
        }

        tileElement.id = 'x' + x.toString(16) + 'y' + y.toString(16);
        tileElement.classList = (x + y) % 2 == 0 ? 'black' : 'white';

        chessboardDiv.appendChild(tileElement);
      }
    }
  )
}

console.log(chessboard);
