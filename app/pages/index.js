import document from 'document';
import { switchPage } from '../navigation';

let $buttonDetail = null;
let $buttonReplace = null;

function doSomething() {
  console.log('hallo index');
}

export function destroy() {
  console.log('destroy index page');
  $buttonDetail = null;
  $buttonReplace = null;
}

export function init() {
  console.log('init index page');
  $button1 = document.getElementById('button1');
  $button2 = document.getElementById('button2');

  $button1.onclick = () => {
    switchPage('score', true);
  };
  $button2.onclick = () => {
    switchPage('tournament');
  };

  doSomething();
}