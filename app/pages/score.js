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
  $buttonTumbler = document.getElementById('buttonTumbler');

  $buttonTumbler.onclick = () => {
    switchPage('tumbler', true);
  };


  doSomething();
}