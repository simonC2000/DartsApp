import document from 'document';
import { switchPage } from '../navigation';

let $scoreNumber = 501;
let $scoreNumberText = 'CONFIRM         ' + 'SCORE: ' + $scoreNumber;

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
  let $number = document.getElementById('score');
  $number.text = $scoreNumberText;
  $tumblerButton.onclick = () => {
  console.log(parseInt($tumblerScore.value));
  let $result = $scoreNumber - parseInt($tumblerScore.value);
  console.log($result);
  $number.text = 'CONFIRM         ' + 'SCORE: ' + $result;
  }
};

doSomething();
