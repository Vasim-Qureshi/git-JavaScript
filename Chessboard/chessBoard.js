const chessboard = document.getElementById('chessboard');

for (let row = 0; row < 8; row++) {
  for (let col = 0; col < 8; col++) {
    const square = document.createElement('div');
    square.classList.add('square');

    // Alternating black and white squares
    if ((row + col) % 2 === 0) {
      square.classList.add('white');
    } else {
      square.classList.add('black');
    }
    
    // Alternating black and white squares with ternary oprator .

    // var white = square.classList.add('white');  
    // var black = square.classList.add('black');
    // ((row + col) % 2 === 0) ? {white} : {black};

    chessboard.appendChild(square);
  }
}
