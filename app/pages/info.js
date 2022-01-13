import document from 'document';
import { switchPage } from '../navigation';

let $buttonBackInfo = null;
let $buttonInfoNext = null;

function doSomething() {
  console.log('hallo index');
}

export function destroy() {
  console.log('destroy index page');
  $buttonBackInfo = null;
  $buttonInfoNext = null;
}

export function init() {
  console.log('init index page');
  $buttonBackInfo = document.getElementById('buttonBackInfo');
  $buttonInfoNext = document.getElementById('buttonInfoNext');

  $buttonBackInfo.onclick = () => {
    switchPage('index', true);
  };
  $buttonInfoNext.onclick = () => {
    switchPage('infoTwo');
  };

  doSomething();
}