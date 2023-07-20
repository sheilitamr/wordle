const gameBoard = document.getElementById('game-board');
const form = document.getElementById('user-word');
const errorMessage = document.getElementById('error-message');

const words = [
  'perro',
  'queso',
  'lucha',
  'llave',
  'flama',
  'cuota',
  'rueda',
  'leche',
  'barco',
  'arroz'
];

let secretWord;
let userWord;
let counterRow = 0;

const createElements = () => {
  for (let i = 0; i < 5; i++) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('game-board__row');
    for (let j = 0; j < 5; j++) {
      const newSpan = document.createElement('span');
      newSpan.classList.add('letter');
      newDiv.append(newSpan);
    }
    gameBoard.append(newDiv);
  }
};

const randomWord = () => {
  const randomNumber = Math.floor(Math.random() * words.length);
  secretWord = words[randomNumber];
};

const checkWord = () => {
  const secretWordArray = secretWord.split('');
  const userWordArray = userWord.split('');

  console.log(userWord);

  if (secretWord === userWord) {
    userWordArray.forEach((letter, index) => {
      const currentLetter = gameBoard.children[counterRow].children[index];
      currentLetter.classList.add('letter--correct');
    });

    return;
  }

  userWordArray.forEach((letter, index) => {
    const currentLetter = gameBoard.children[counterRow].children[index];
    if (secretWordArray[index] === letter) {
      secretWordArray[index] = 0;

      currentLetter.classList.add('letter--correct');
    }
  });

  userWordArray.forEach((letter, index) => {
    const currentLetter = gameBoard.children[counterRow].children[index];
    if (!secretWordArray.includes(letter)) {
      if (!currentLetter.classList.contains('letter--correct')) {
        currentLetter.classList.add('letter--incorrect');
      }
    } else {
      const letterPosition = secretWordArray.indexOf(letter);
      secretWordArray[letterPosition] = 0;
      if (!currentLetter.classList.contains('letter--correct')) {
        currentLetter.classList.add('letter--present');
      }
    }
  });
};

const printWord = () => {
  const currentRow = gameBoard.children[counterRow];
  const letters = currentRow.querySelectorAll('span');
  letters.forEach((span, index) => {
    span.textContent = userWord[index];
  });
  counterRow++;
};
const setUserWord = inputValue => {
  if (inputValue.length !== 5) {
    errorMessage.textContent = 'Debe ser una palabra de 5 letras';
    return;
  }
  errorMessage.textContent = '';
  userWord = inputValue;
  checkWord();
  printWord();
};

randomWord();
console.log(secretWord);
createElements();

form.addEventListener('submit', e => {
  e.preventDefault();
  setUserWord(e.target.word.value);
  e.target.reset();
});
