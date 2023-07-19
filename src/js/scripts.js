const gameBoard = document.getElementById('game-board');
const form = document.getElementById('user-word');

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

const randomWord = () => {
  const randomNumber = Math.floor(Math.random() * words.length);

  return words[randomNumber];
};

const secretWord = randomWord();
let userWord;
console.log(secretWord);

const checkWord = () => {
  const secretWordArray = secretWord.split('');
  const userWordArray = userWord.split('');

  console.log(userWord);

  if (secretWord === userWord) {
    console.log(`Has acertado`);
    return;
  }

  userWordArray.forEach((letter, index) => {
    if (secretWordArray[index] === letter) {
      secretWordArray[index] = 0;
      console.log(`La letra ${letter} está en la posición correcta ${index}`);
    }
  });

  userWordArray.forEach((letter, index) => {
    if (!secretWordArray.includes(letter)) {
      console.log(`La letra ${letter} no existe`);
    } else {
      const letterPosition = secretWordArray.indexOf(letter);
      secretWordArray[letterPosition] = 0;
      console.log(`La letra ${letter} está en otra posición`);
    }
  });
};

const setUserWord = inputValue => {
  userWord = inputValue;
  checkWord();
};

form.addEventListener('submit', e => {
  e.preventDefault();
  setUserWord(e.target.word.value);
  e.target.reset();
});
