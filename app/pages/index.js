import document from 'document';
import { switchPage } from '../navigation';

let $buttonPlay = null;
let $buttonInfo = null;

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
  $buttonPlay = document.getElementById('buttonPlay');
  $buttonInfo = document.getElementById('buttonInfo');

  $buttonPlay.onclick = () => {
    switchPage('score', true);
  };
  $buttonInfo.onclick = () => {
    switchPage('info');
  };

  doSomething();
}