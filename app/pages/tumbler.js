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
  $buttonBackTumbler = document.getElementById('buttonBackTumbler');

  $buttonBackTumbler.onclick = () => {
    switchPage('index', true);
  };

  doSomething();
}
