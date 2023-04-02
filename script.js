const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');

const gameBoard = {
  board: [
    [one, two, three],
    [four, five, six],
    [seven, eight, nine],
  ],
};

const inputMarkers = () => {
  const blocks = document.querySelectorAll('.blocks');
  const arr = [...blocks];
  let emptyArr = gameBoard.board;

  const inputX = () => {
    arr.forEach((item) => {
      item.addEventListener('click', () => {
        if (item.innerHTML == false) {
          item.innerHTML = 'X';
          const rand = Math.floor(Math.random() * arr.length);
          for (let i = 0; i < arr.length; i++) {
            if (arr[rand].innerHTML == 'X' || arr[rand].innerHTML == 'O') {
              continue;
            } else {
              arr[rand].innerHTML = 'O';
              console.log(arr[rand]);
            }
          }
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
