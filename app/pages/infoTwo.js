import document from 'document';
import { switchPage } from '../navigation';

let $buttonBackInfoTwo = null;

function doSomething() {
  console.log('hallo index');
}

export function destroy() {
  console.log('destroy index page');
  $buttonBackInfoTwo = null;
}

export function init() {
  console.log('init index page');
  $buttonBackInfoTwo = document.getElementById('buttonBackInfoTwo');

  $buttonBackInfoTwo.onclick = () => {
    switchPage('index', true);
  };

  doSomething();
}