console.log("Hello World!");
/*
// const b1 = document.getElementById('one')
// const b2 = document.getElementById('two')
// const b3 = document.getElementById('three')
// const b4 = document.getElementById('four')
// const b5 = document.getElementById('five')
// const b6 = document.getElementById('six')
// const b7 = document.getElementById('seven')
// const b8 = document.getElementById('eight')
// const b9 = document.getElementById('nine')

// const board = [b1, b2, b3, b4, b5, b6, b7, b8, b9];
*/

const board = [
  document.getElementById('one'),
  document.getElementById('two'), 
  document.getElementById('three'), 
  document.getElementById('four'),
  document.getElementById('five'),
  document.getElementById('six'),
  document.getElementById('seven'),
  document.getElementById('eight'),
  document.getElementById('nine')
];


board.forEach(e=>e.addEventListener('click', (x)=>console.log('clicked',x.target)))


// board.forEach(box=>box.value='')


/*
// click area -> turn++ -> if (turn % 2 === 0) then X or O''''else


[['X', null, null], [null, 'X', null], [null, null, 'X']]// 

*/




class TicTacToe {
    
    constructor(board) {
        let turn = 1;     
        this.board = board;
        
        // this.playerX = []
        // this.playerO = []
        //this.grid = [[],[],[]]

    }

    // turn incrementer
    // turnIncrementer(turn){
    //     this.turn++
    //     console.log("Turn",turn)
    // }
    checkWin() {
        
    }

    reset() {
  board.forEach(box => box.value = '')
}

}


const newGame = new TicTacToe(board)

// Rows [one, two, three], [four, five, six], [seven, eight, nine]
//  Columns [one, four, seven], [two, five, eight], [three, six, nine]
// Diagnol [one, five, nine], [three, five, seven]



/*


*/