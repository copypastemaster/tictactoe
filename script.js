const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const boarder = document.querySelector('#gameBoard');

const gameBoard = {
  // if any of the array has complete 'O' or 'X', log
  winningCondition: [
    [one, two, three],
    // [four, five, six],
    // [seven, eight, nine],
    // [one, five, nine],
    // [seven, five, three],
    // [one, four, seven],
    // [two, five, eight],
    // [three, six, nine],
  ],
};

const inputMarkers = () => {
  const blocks = document.querySelectorAll('.blocks');
  const arr = [...blocks];

  const inputX = () => {
    arr.forEach((item) => {
      item.addEventListener('click', () => {
        if (item.innerHTML == false) {
          gameCheck();
          item.innerHTML = 'X';
          test();
        }
      });
    });
  };

  const test = () => {
    const rand = Math.floor(Math.random() * 2);
    const randomss = arr[rand];

    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i].innerHTML == false) {
        arr[i].innerHTML = 'O';
        return arr[i];
        // randomss = arr[i];
      }
    }
  };

  const gameCheck = () => {
    gameBoard.winningCondition.forEach((item) => {
      item.forEach((items) => {
        if (items.innerHTML == 'O') {
          console.log('O is the winner!');
        }
      });
    });
  };

  return { inputX };
};

const displayController = () => {
  const me = inputMarkers();
  me.inputX();
};

displayController();
