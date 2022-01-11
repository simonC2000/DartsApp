import document from 'document';
import { switchPage } from '../navigation';


let $buttonTumbler = null;


function doSomething() {
  console.log('hallo index');
}

export function destroy() {
  console.log('destroy index page');
  $buttonPlay = null;
  $buttonInfo = null;
}

export function init() {
  console.log('init index page');
  let $startScore = 501;
  let $scoreNumber = document.createElement($startScore);
  let $scoreNumberTwo = "";
  let $scoreText = document.getElementById("score");
  $scoreText.text = $scoreNumber;
  $buttonTumbler = document.getElementById('buttonTumbler');

  let $tumblerScore = document.getElementById("tumbler-score");
  let $tumblerButtonThree = document.getElementById("score-item3");

  $tumblerButtonThree.onclick = () => {
    console.log("click");
    $scoreNumberTwo = $scoreNumber - 3;
    console.log($scoreNumberTwo)
    $scoreText.text = $scoreNumberTwo;
  };


  doSomething();
}
