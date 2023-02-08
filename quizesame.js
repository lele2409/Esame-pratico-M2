

let domanda = document.querySelector("#question");
let scelta = (document.getElementsByClassName('testo-scelta'));
console.log(scelta);
let punteggio;
let questionNumber = 0;
let domandaCorrente = {};
let domande = [];
const questions = [
  {
    category: 'Science: Computers',
    type: 'multiple',
    difficulty: 'easy',
    question: 'What does CPU stand for?',
    correct_answer: 'Central Processing Unit',
    incorrect_answers1: 'Computer Personal Unit',
    incorrect_answers2:'Central Process Unit',
    incorrect_answers3:'Central Processor Unit',
  },  
  {
    category: 'Science: Computers',
    type: 'multiple',
    difficulty: 'easy',
    question:
      'In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?',
    correct_answer: 'Final',
    incorrect_answers1: 'Static',
    incorrect_answers2:'Private',
    incorrect_answers3:'Public',
  },
  {
    category: 'Science: Computers',
    type: 'multiple',
    difficulty: 'easy',
    question:
      'What is the most preferred image format used for logos in the Wikimedia database?',
    correct_answer: '.svg',
    incorrect_answers1: '.png',
    incorrect_answers2:'.jpeg',
    incorrect_answers3:'.gif',
  },
  {
    question: 'In web design, what does CSS stand for?',
    correct_answer: 'Cascading Style Sheet',
    incorrect_answers1: 'Counter Strike: Source',
    incorrect_answers2: 'Corrective Style Sheet',
    incorrect_answers3:'Computer Style Sheet',   
  },
  
  { question: 'What is the code name for the mobile operating system Android 7.0?',
    correct_answer: 'Nougat',
    incorrect_answers1: 'Ice Cream Sandwich',
    incorrect_answers2:  'Jelly Bean',
    incorrect_answers3: 'Marshmallow', },
  
  
    {question: 'On Twitter, what is the character limit for a Tweet?',
    correct_answer: '140',
    incorrect_answers1: '120',
    incorrect_answers2: '160',
    incorrect_answers3:'100',  }
  
  
]

startGame = () => {
  questionNumber = 0;
  punteggio = 0;
  domande = [...questions];
console.log(domande);
prossimaDomanda();
}

prossimaDomanda = () => {
  if (questionNumber > domande.length){
    alert(punteggio); 
  }
  questionNumber++;
 const indiceDomanda = Math.floor(Math.random()* domande.length);
 let indiceScelta = Math.floor(Math.random()*4);
 domandaCorrente = domande [indiceDomanda];
 domanda.innerText = domandaCorrente.question;
 scelta[indiceScelta].innerText = domandaCorrente.correct_answer;
 scelta[indiceScelta].addEventListener("click", e => {
  scelta[indiceScelta] = e.target;
  console.log('risposta esatta');
  punteggio++;
})
 switch (indiceScelta) {
  case 0:
    scelta[indiceScelta+1].innerText = domandaCorrente.incorrect_answers1;
    scelta[indiceScelta+1].addEventListener("click", e => {
      scelta[indiceScelta+1] = e.target;
      console.log('risposta sbagliata')});
    scelta[indiceScelta+2].innerText = domandaCorrente.incorrect_answers2;
    scelta[indiceScelta+2].addEventListener("click", e => {
      scelta[indiceScelta+2] = e.target;
      console.log('risposta sbagliata')});
    scelta[indiceScelta+3].innerText = domandaCorrente.incorrect_answers3;
    scelta[indiceScelta+3].addEventListener("click", e => {
      scelta[indiceScelta+3] = e.target;
      console.log('risposta sbagliata')});
    break;
  case 1:
    scelta[indiceScelta+1].innerText = domandaCorrente.incorrect_answers1;
    scelta[indiceScelta+1].addEventListener("click", e => {
      scelta[indiceScelta+1] = e.target;
      console.log('risposta sbagliata')});
    scelta[indiceScelta+2].innerText = domandaCorrente.incorrect_answers2;
    scelta[indiceScelta+2].addEventListener("click", e => {
      scelta[indiceScelta+2] = e.target;
      console.log('risposta sbagliata')});
    scelta[indiceScelta-1].innerText = domandaCorrente.incorrect_answers3;
    scelta[indiceScelta-1].addEventListener("click", e => {
      scelta[indiceScelta-1] = e.target;
      console.log('risposta sbagliata')});
    break;
  case 2:  
    scelta[indiceScelta-1].innerText = domandaCorrente.incorrect_answers1;
    scelta[indiceScelta-1].addEventListener("click", e => {
      scelta[indiceScelta-1] = e.target;
      console.log('risposta sbagliata')});
    scelta[indiceScelta-2].innerText = domandaCorrente.incorrect_answers2;
    scelta[indiceScelta-2].addEventListener("click", e => {
      scelta[indiceScelta-2] = e.target;
      console.log('risposta sbagliata')});
    scelta[indiceScelta+1].innerText = domandaCorrente.incorrect_answers3;
    scelta[indiceScelta+1].addEventListener("click", e => {
      scelta[indiceScelta+1] = e.target;
      console.log('risposta sbagliata')});
    break;
  default:
    scelta[indiceScelta-3].innerText = domandaCorrente.incorrect_answers1;
    scelta[indiceScelta-3].addEventListener("click", e => {
      scelta[indiceScelta-3] = e.target;
      console.log('risposta sbagliata')});
    scelta[indiceScelta-2].innerText = domandaCorrente.incorrect_answers2;
    scelta[indiceScelta-2].addEventListener("click", e => {
      scelta[indiceScelta-2] = e.target;
      console.log('risposta sbagliata')});
    scelta[indiceScelta-1].innerText = domandaCorrente.incorrect_answers3;  
    scelta[indiceScelta-1].addEventListener("click", e => {
      scelta[indiceScelta-1] = e.target;
      console.log('risposta sbagliata')});
    break;
 }


};
 
startGame();
