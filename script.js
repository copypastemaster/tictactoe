function inputMarkers(input) {
  const blocks = document.querySelectorAll('.blocks');
  const arr = [...blocks];

  const inputX = () => {
    arr.forEach((item) => {
      item.addEventListener('click', () => {
        if (item.innerHTML == false) {
          item.innerHTML = input;
          setTimeout(inputO, 500);
        }
        gameChecker();
      });
    });
  };

  const inputO = () => {
    const one = document.querySelector('.one');
    const two = document.querySelector('.two');
    const three = document.querySelector('.three');

    const four = document.querySelector('.four');
    const five = document.querySelector('.five');
    const six = document.querySelector('.six');

    const seven = document.querySelector('.seven');
    const eight = document.querySelector('.eight');
    const nine = document.querySelector('.nine');

    const randoms = Math.floor(Math.random() * 3);

    const _2dArr = {
      randomCombinations: [
        [one, two, three, four, five, six, seven, eight, nine],
        [five, three, one, four, two, seven, six, nine, eight],
        [three, five, six, two, one, nine, eight, four, seven],
      ],
    };

    const selected = _2dArr.randomCombinations[randoms];

    for (let i = 0; i < selected.length; i++) {
      if (selected[i].innerHTML == false) {
        selected[i].innerHTML = 'O';
        return selected[i];
      }
    }
  };

  const gameChecker = () => {
    const one = document.querySelector('.one');
    const two = document.querySelector('.two');
    const three = document.querySelector('.three');

    const four = document.querySelector('.four');
    const five = document.querySelector('.five');
    const six = document.querySelector('.six');

    const seven = document.querySelector('.seven');
    const eight = document.querySelector('.eight');
    const nine = document.querySelector('.nine');

    // row straights
    if (
      one.innerHTML == 'O' &&
      two.innerHTML == 'O' &&
      three.innerHTML == 'O'
    ) {
      console.log('O wins!');
    }

    if (
      four.innerHTML == 'O' &&
      five.innerHTML == 'O' &&
      six.innerHTML == 'O'
    ) {
      console.log('O wins!');
    } else if (
      four.innerHTML == 'X' &&
      five.innerHTML == 'X' &&
      six.innerHTML == 'X'
    ) {
      console.log('X wins!');
    }

    if (
      seven.innerHTML == 'O' &&
      eight.innerHTML == 'O' &&
      nine.innerHTML == 'O'
    ) {
      console.log('O wins!');
    } else if (
      seven.innerHTML == 'X' &&
      eight.innerHTML == 'X' &&
      nine.innerHTML == 'X'
    ) {
      console.log('X wins!');
    }

    // column straights

    if (
      one.innerHTML == 'O' &&
      four.innerHTML == 'O' &&
      seven.innerHTML == 'O'
    ) {
      console.log('O wins!');
    } else if (
      one.innerHTML == 'X' &&
      four.innerHTML == 'X' &&
      seven.innerHTML == 'X'
    ) {
      console.log('X wins!');
    }

    if (
      two.innerHTML == 'O' &&
      five.innerHTML == 'O' &&
      eight.innerHTML == 'O'
    ) {
      console.log('O wins!');
    } else if (
      two.innerHTML == 'X' &&
      five.innerHTML == 'X' &&
      eight.innerHTML == 'X'
    )
      console.log('X wins!');
  };

  return { inputX };
}

function displayController() {
  const me = inputMarkers('X');
  me.inputX();
}

displayController();
// if (arr[rand].innerHTML == false) {
//   arr[rand].innerHTML = 'O';
// } else {
//   break;
// }
