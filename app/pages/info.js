import document from 'document';
import { getLocationName } from '../commands';
import { getStateItem, setStateCallback, removeStateCallback } from '../state';

let $button = null;
let $locationName = null;

function doSomething() {
  console.log('hallo detail');
}

function draw() {
  $locationName.text = getStateItem('location');
}

export function destroy() {
  console.log('destroy detail page');
  $locationName = null;
  $button = null;
  removeStateCallback('index');
}

export function init() {
  console.log('init detail page');
  $locationName = document.getElementById('location');
  $button = document.getElementById('buttonBackInfo');
  $button.onclick = () => {
    destroy();
    document.history.back();
  };

  doSomething();
  getLocationName();
  setStateCallback('detail', draw);
  // draw();
}
