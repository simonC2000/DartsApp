import document from 'document';
import { switchPage } from '../navigation';

let $buttonBackHome = null;

function doSomething() {
  console.log('hallo index');
}

export function destroy() {
  console.log('destroy index page');
  $buttonBackHome = null;
}

export function init() {
  console.log('init index page');
  $buttonBackHome = document.getElementById('playAgain');

  $buttonBackHome.onclick = () => {
    switchPage('index', true);
  };

  doSomething();
}