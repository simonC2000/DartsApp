import document from 'document';
import { switchPage } from '../navigation';

let $buttonBackInfo = null;

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
  $buttonBackInfo = document.getElementById('buttonBackInfo');

  $buttonBackInfo.onclick = () => {
    switchPage('index', true);
  };

  doSomething();
}