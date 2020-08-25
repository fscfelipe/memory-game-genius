let order = [];
let clickedOrder = [];
let score = 0;

// 0 - Verde
// 1 - Vermelho
// 2 - Amarelo
// 3 - Azul

let blueButton = document.querySelector('.blue');
let redButton = document.querySelector('.red');
let yellowButton = document.querySelector('.yellow');
let greenButton = document.querySelector('.green');

// Cria ordem aleatória de cores
let shuffleOrder = () => {
  let colorOrder = Math.floor(Math.random() * 4);
  order[order.length] = colorOrder;
  clickedOrder = [];

  for (let i in order) {
    let elementColor = createColorElement(order[i]);
    lightColor(elementColor, Number(i) + 1);
  }
};

// Acende a próxima cor
const lightColor = (element, number) => {
  number = number * 1000;
  console.log('Valor de number ', number);
  setTimeout(() => {
    console.log('Selecionando elemento ', element);
    element.classList.add('selected');
  }, number);

  setTimeout(() => {
    console.log('Removendo elemento ', element);
    element.classList.remove('selected');
  }, number + 500);
};

// Checa se os botões clicados são os mesmos da ordem gerada no jogo
const checkOrder = () => {
  for (let i in clickedOrder) {
    if (clickedOrder[i] != order[i]) gameOver();
    break;
  }

  if (clickedOrder.length == order.length) {
    alert(`Pontuação: ${score} \n Você acertou! Iniciando próximo nível `);
    nextLevel();
  }
};

// Função para o clique do usuário
const click = (color) => {
  clickedOrder[clickedOrder.length] = color;
  createColorElement(color).classList.add('selected');

  setTimeout(() => {
    createColorElement(color).classList.remove('selected');
    checkOrder();
  }, 250);
};

// Função que retorna a cor
const createColorElement = (color) => {
  if (color == 0) {
    return greenButton;
  } else if (color == 1) {
    return redButton;
  } else if (color == 2) {
    return yellowButton;
  } else if (color == 3) {
    return blueButton;
  }
};

// Função para próximo nível do jogo
const nextLevel = () => {
  score++;
  shuffleOrder();
};

const gameOver = () => {
  alert(
    `Pontuação: ${score}! \nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo`
  );
  order = [];
  clickedOrder = [];

  playGame();
};

const playGame = () => {
  alert('Bem vindo ao Gênesis! Iniciando novo jogo');
  score = -1;

  nextLevel();
};

//greenButton.addEventListener('onclick', click(0));
//redButton.addEventListener('onclick', click(1));
//yellowButton.addEventListener('onclick', click(2));
//blueButton.addEventListener('onclick', click(3));

greenButton.onclick = () => click(0);
redButton.onclick = () => click(1);
yellowButton.onclick = () => click(2);
blueButton.onclick = () => click(3);

playGame();
