function inputMarkers(input) {
  const one = document.querySelector('.one');
  const two = document.querySelector('.two');
  const three = document.querySelector('.three');
  const four = document.querySelector('.four');
  const five = document.querySelector('.five');
  const six = document.querySelector('.six');
  const seven = document.querySelector('.seven');
  const eight = document.querySelector('.eight');
  const nine = document.querySelector('.nine');
  const blocks = document.querySelectorAll('.blocks');
  const arr = [...blocks];
  const player = document.querySelector('#player');
  const ai = document.querySelector('#ai');
  const para = document.querySelector('#result');

  const start = document.querySelector('#start');
  const restart = document.querySelector('#restart');

  const inputX = () => {
    arr.forEach((item) => {
      item.addEventListener('click', function clicks(e) {
        if (item.innerHTML == false) {
          item.innerHTML = input;
          setTimeout(inputO, 600);
          gameChecker();
        }
      });
    });
  };

  const inputO = () => {
    const randoms = Math.floor(Math.random() * 3);

    const _2dArr = {
      randomCombinations: [
        [one, two, three, four, five, six, seven, eight, nine],
        [seven, four, one, two, five, eight, three, six, nine],
        [one, five, nine, three, seven, eight, two, four, six],
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
    // row straights
    if (
      one.innerHTML == 'O' &&
      two.innerHTML == 'O' &&
      three.innerHTML == 'O'
    ) {
      ai.innerHTML++;
      gameRestart();
    } else if (
      one.innerHTML == 'X' &&
      two.innerHTML == 'X' &&
      three.innerHTML == 'X'
    ) {
      player.innerHTML++;
      gameRestart();
    }

    if (
      four.innerHTML == 'O' &&
      five.innerHTML == 'O' &&
      six.innerHTML == 'O'
    ) {
      ai.innerHTML++;
      gameRestart();
    } else if (
      four.innerHTML == 'X' &&
      five.innerHTML == 'X' &&
      six.innerHTML == 'X'
    ) {
      player.innerHTML++;
      gameRestart();
    }

    if (
      seven.innerHTML == 'O' &&
      eight.innerHTML == 'O' &&
      nine.innerHTML == 'O'
    ) {
      ai.innerHTML++;
      gameRestart();
    } else if (
      seven.innerHTML == 'X' &&
      eight.innerHTML == 'X' &&
      nine.innerHTML == 'X'
    ) {
      player.innerHTML++;
      gameRestart();
    }

    // column straights

    if (
      one.innerHTML == 'O' &&
      four.innerHTML == 'O' &&
      seven.innerHTML == 'O'
    ) {
      ai.innerHTML++;
      gameRestart();
    } else if (
      one.innerHTML == 'X' &&
      four.innerHTML == 'X' &&
      seven.innerHTML == 'X'
    ) {
      player.innerHTML++;
      gameRestart();
    }

    if (
      two.innerHTML == 'O' &&
      five.innerHTML == 'O' &&
      eight.innerHTML == 'O'
    ) {
      ai.innerHTML++;
      gameRestart();
    } else if (
      two.innerHTML == 'X' &&
      five.innerHTML == 'X' &&
      eight.innerHTML == 'X'
    ) {
      player.innerHTML++;
      gameRestart();
    }

    if (
      three.innerHTML == 'O' &&
      six.innerHTML == 'O' &&
      nine.innerHTML == 'O'
    ) {
      ai.innerHTML++;
      gameRestart();
    } else if (
      three.innerHTML == 'X' &&
      six.innerHTML == 'X' &&
      nine.innerHTML == 'X'
    ) {
      player.innerHTML++;
      gameRestart();
    }

    // diagonals

    if (
      one.innerHTML == 'O' &&
      five.innerHTML == 'O' &&
      nine.innerHTML == 'O'
    ) {
      ai.innerHTML++;
      gameRestart();
    } else if (
      one.innerHTML == 'X' &&
      five.innerHTML == 'X' &&
      nine.innerHTML == 'X'
    ) {
      player.innerHTML++;
      gameRestart();
    }

    if (
      three.innerHTML == 'O' &&
      five.innerHTML == 'O' &&
      seven.innerHTML == 'O'
    ) {
      ai.innerHTML++;
      gameRestart();
    } else if (
      three.innerHTML == 'X' &&
      five.innerHTML == 'X' &&
      seven.innerHTML == 'X'
    ) {
      player.innerHTML++;
      gameRestart();
    }
  };

  const gameRestart = () => {
    arr.forEach((item) => {
      item.innerHTML = '';
    });

    if (ai.innerHTML == 3) {
      para.innerHTML = 'Overall winner is AI!';
      gameOver();
      return;
    } else if (player.innerHTML == 3) {
      para.innerHTML = 'Overall winner is you!';
      gameOver();
      return;
    }
  };

  const allReset = () => {
    arr.forEach((item) => {
      item.innerHTML = '';
    });

    ai.innerHTML = 0;
    player.innerHTML = 0;
  };

  const gameOver = () => {
    player.innerHTML = 0;
    ai.innerHTML = 0;

    arr.forEach((item) => {
      item.innerHTML = '';
    });
  };

  const draw = () => {
    const test = ai.value;
    const prevVal = null;

    const test2 = player.value;
    const prevVals = null;

    if (test == prevVal && test2 == prevVals) {
      para.innerHTML = "It's a draw!";
      ai.value = ai.value;
      player.value = player.value;
      gameRestart();
    }
  };

  return {
    inputX,
    allReset,
  };
}

function displayController() {
  const me = inputMarkers('X');
  me.inputX();
}

const newRestart = inputMarkers('x');

start.addEventListener('click', displayController);
restart.addEventListener('click', newRestart.allReset);
