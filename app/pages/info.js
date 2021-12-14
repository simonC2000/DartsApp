import document from 'document';
import { switchPage } from '../navigation';

let $buttonBackInfo = null;

function doSomething() {
  console.log('hallo index');
}

export function destroy() {
  console.log('destroy index page');
  $buttonBackInfo = null;
}

export function init() {
  console.log('init index page');
  $buttonBackInfo = document.getElementById('buttonBackInfo');

  $buttonBackInfo.onclick = () => {
    switchPage('index', true);
  };

  doSomething();
}