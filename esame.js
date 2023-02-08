let x = 'John';
let y = 'Doe';
if (x != y){
    console.log(x + '<>'+ y );
}

let oggetto = {
    name: 'Raffaele',
    surname: 'Quit',
    email: 'lele2409@hotmai.it',
};
delete oggetto.email;
console.log(oggetto);

let auto = ['fiat', 'opel', 'ford', 'ferrari', 'panda', 'fiesta', 'astra', 'toyota', 'yaris', 'mondeo' ];
for (let i=0; i<auto.length; i++) {
    console.log(auto[i]);
}

let random = [];
  for (let i = 1; i <= 100; i++){
    random.push(parseInt(Math.random()*101))
  }
  console.log(random);

  function maxMinArr(){
    let max = random[0];
    let min = random[0];
    for (let i = 0; i<random.length; i++){
        if (random[i] > max){
            max = random[i];
        }
    }
    for (let i = 0; i<random.length; i++){
        if (random[i] < min){
            min = random[i];
        }
    }
    console.log("Il valore massimo dell'array è: " + max);
    console.log("Il valore minimo dell'array è: " + min);
  } maxMinArr();

  let father = [];
  for (let i =1; i <= 3; i++) {
    let figlio = [];
    for (let f = 1; f <= 10; f++) {
        let n = Math.ceil(Math.random()* 50);
        figlio.push(n);
    }
    father.push(figlio);
  }console.log(father);

  function MaxArray(arr1, arr2){
    if (arr1.length > arr2.length){
        return arr1;
    }else if (arr2.length > arr1.length){
        return arr2;
    }else {
        console.log('Gli array hanno lo stesso numero di elementi');
    }
  }
  console.log(MaxArray(random, father));

  function maxSomma (arr1, arr2) {
    let somma = 0;
    for (let x = 0; x < arr1.length; x++) {
        somma += arr1[x];
    }
    let somma1 = 0;
    for (let y = 0; y < arr2.length; y++) {
        somma1 += arr2[y];
    }
    if (somma > somma1) {
        return arr1;
    }else if (somma < somma1) {
        return arr2;
    }else {
        return 'La somma degli elementi degli array è uguale'
    }
  }console.log(maxSomma(father, random));

  document.getElementById('container');

  document.getElementsByTagName('td');

  function stampaTd (){
    const td = document.getElementsByTagName('td')
    for (let i=0; i < td.length; i++){
        const text = td[i];
        console.log(text);
    }  
    } stampaTd();
    
  function changeTitle (newTitle) {
    const title = document.querySelector('h1')
    title.innerText = newTitle
  }
  changeTitle('Nuovo titolo');

   function addRow () {
    document.getElementsByTagName('table')
   const tr = document.createElement("tr");
    tr.appendChild();
 }
 addRow();

  const addClassToRow = function () {
    const riga = document.getElementsByTagName('tr')
    title.classList.add('test')
  }
  addClassToRow();

  function backRed (){
    const link = document.getElementsByTagName('a')
    for (let i = 0; i < link.length; i++) {
        const a = link[i]
        a.classList.add('b-red')
      }
  } backRed();

  window.onload = function () {
    alert('Page Loaded')
  }

  const addLi = function () {
    document.querySelector("ul")
   const li = document.createElement("li");
    li.innerText = "new list item";
    ul.appendChild(li);
 }
 addLi()

 const svuotaLista = function () {
    const li=document.querySelectorAll('li')
    li.innerText= '';
  }
  svuotaLista();

  function removeImg (){
    const img = document.getElementsByTagName('img');
    img.remove();
  }removeImg();

  const td= document.getElementsByTagName('td');
  td.addEventListener('click', changeColorTd())
  function changeColorTd() {
    td.style.backgroundColor = 'blue';
  }

  const link = document.getElementsByTagName('a')
  link.addEventListener('mouseover', myFunction())
  function myFunction(){
    alert (a.href);
  }

  const makeItClickable = function() {
    const title = document.getElementsByTagName('h1');
    title.addEventListener('click', function(e){

    })
  }