import document from 'document';
import { switchPage } from '../navigation';

let $scoreNumber = 501;


function doSomething() {
  console.log('hallo index');
}

export function destroy() {
  console.log('destroy index page');
  $buttonPlay = null;
  $buttonInfo = null;
}

export function init() {
  let $tumblerButton = document.getElementById('score');
  let $tumblerScore = document.getElementById('tumbler-score');
  let $previousScore = document.getElementById('score');
  $previousScore.text = $scoreNumber;
  $tumblerButton.onclick = () => {
  console.log($previousScore.text);
  let $scoreRemaining = $previousScore.text - parseInt($tumblerScore.value);
  console.log($tumblerScore.value);
  console.log($scoreRemaining);
  $previousScore.text = $scoreRemaining;
  }
};
doSomething();

/*

export function init() {
  let $tumblerButton = document.getElementById('score');
  let $tumblerScore = document.getElementById('tumbler-score');
  let $previousScore = document.getElementById('score');
  $previousScore.text = $scoreNumber;
  $tumblerButton.onclick = () => {
  console.log($previousScore.text);
  let $scoreRemaining = $previousScore.text - parseInt($tumblerScore.value);
  console.log($tumblerScore.value);
  console.log($scoreRemaining);
  $previousScore.text = $scoreRemaining;
  }
};
doSomething();

*/
