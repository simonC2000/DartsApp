import document from 'document';
import { switchPage } from '../navigation';


function doSomething() {
  console.log('hallo index');
}

export function destroy() {
  console.log('destroy index page');
  $buttonPlay = null;
  $buttonInfo = null;
}

export function init() {
  let $scoreNumber = 501;
  let $tumblerButton = document.getElementById('tumbler-score');
  let $tumblerScore = document.getElementById('tumbler-score');
  let $number = document.getElementById('score');
  $number.text = $scoreNumber;
  $tumblerButton.onclick = () => {
  console.log(parseInt($tumblerScore.value));
  let $result = $scoreNumber - parseInt($tumblerScore.value);
  console.log($result);
  $number.text = $result;
  }
};

doSomething();


/*export function init() {
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
} */
