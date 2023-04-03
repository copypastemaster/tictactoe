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
  winningCondition1: [one, two, three],
  winningCondition2: [four, five, six],
};

const inputMarkers = () => {
  const blocks = document.querySelectorAll('.blocks');
  const arr = [...blocks];

  const inputX = () => {
    arr.forEach((item) => {
      item.addEventListener('click', () => {
        if (item.innerHTML == false) {
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

  return { inputX };
};

const displayController = () => {
  const me = inputMarkers();
  me.inputX();

  gameBoard.winningCondition1.forEach((item) => {
    console.log(item.textContent);
  });
};

displayController();
// if (arr[rand].innerHTML == false) {
//   arr[rand].innerHTML = 'O';
// } else {
//   break;
// }
