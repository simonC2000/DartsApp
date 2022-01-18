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
    if($previousScore.text >= 1) {
      console.log($previousScore.text);
      let $scoreRemaining = $previousScore.text - parseInt($tumblerScore.value);
      console.log($tumblerScore.value);
      console.log($scoreRemaining);
      $previousScore.text = $scoreRemaining;
    }
    else if ($previousScore.text <= 0) {
      console.log('win');
      switchPage('win', true);
    }  
    else {
      console.log('error');
    }  
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
    if($previousScore.text >= 1) {
      console.log($previousScore.text);
      let $scoreRemaining = $previousScore.text - parseInt($tumblerScore.value);
      console.log($tumblerScore.value);
      console.log($scoreRemaining);
      $previousScore.text = $scoreRemaining;
    }
    else if ($previousScore.text == 0) {
      console.log('win');
      switchPage('win', true);
    }  
    else {
      console.log('error');
    }  
}
};
doSomething();

*/
