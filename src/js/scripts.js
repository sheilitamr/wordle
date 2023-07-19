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
  Math.floor(Math.random() * words.length);
};
const secretWord = 'arbol';

const userWord = 'lasal';

const wordEqual = () => {
  if (secretWord === userWord) {
    console.log(`Has acertado`);
  }
};

const secretWordArray = secretWord.split('');
const userWordArray = userWord.split('');

const letterExist = () => {
  userWordArray.forEach((letter, index) => {
    if (secretWordArray[index] === letter) {
      secretWordArray[index] = 0;
      console.log(`La letra ${letter} está en la posición correcta ${index}`);
    }
  });
};

const letterNoExist = () => {
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

form.addEventListener('submit', e => {
  e.preventDefault();
  e.target.reset();
});
