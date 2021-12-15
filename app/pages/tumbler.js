import document from 'document';
import { switchPage } from '../navigation';

let $buttonBackTumbler = null;

function doSomething() {
  console.log('hallo index');
}

export function destroy() {
  console.log('destroy index page');
  $buttonBackTumbler = null;
}

export function init() {
  console.log('init index page');
  let $tumblerScore = document.getElementById("tumbler-score");
  let $tumblerButton = document.getElementById("score-item3");

  $tumblerButton.onclick = () => {
    switchPage('score', true);
  };


  console.log("tumbler-score")
  $buttonBackTumbler = document.getElementById('buttonBackTumbler');

  $buttonBackTumbler.onclick = () => {
    switchPage('index', true);
  };

  doSomething();
}
