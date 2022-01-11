import document from 'document';
import { switchPage } from '../navigation';

let $scoreNumber = 501;
let $buttonBackTumbler = null;

function doSomething() {
  console.log('hallo index');
}

export function init() {
  console.log('init index page');
  let $tumblerScore = document.getElementById("tumbler-score");
  let $tumblerButtonThree = document.getElementById("score-item3");

  $tumblerButtonThree.onclick = () => {
    console.log("click");
    $scoreNumber - 3;
    switchPage('score', true);
  };

  console.log("tumbler-score")
  $buttonBackTumbler = document.getElementById('buttonBackTumbler');

  $buttonBackTumbler.onclick = () => {
    switchPage('index', true);
  };

  doSomething();
}
