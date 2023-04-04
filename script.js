function inputMarkers(input) {
  const blocks = document.querySelectorAll('.blocks');
  const arr = [...blocks];

  const inputX = () => {
    arr.forEach((item) => {
      item.addEventListener('click', () => {
        if (item.innerHTML == false) {
          item.innerHTML = input;
          test();
        }
      });
    });
  };

  const test = () => {
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i].innerHTML == false) {
        arr[i].innerHTML = 'O';
        return arr[i];
        // randomss = arr[i];
      }
    }
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
