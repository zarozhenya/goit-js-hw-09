import { getRandomHexColor } from './random-color-generator';

const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};
const DELAY = 1000;
let intervalId = null;

const changeColor = () => {
  document.body.style.backgroundColor = getRandomHexColor();
};

const onStartBtnCLick = e => {
  e.currentTarget.setAttribute('disabled', '');
  refs.stopBtn.removeAttribute('disabled');
  intervalId = setInterval(changeColor, DELAY);
};

const onStopBtnCLick = e => {
  e.currentTarget.setAttribute('disabled', '');
  refs.startBtn.removeAttribute('disabled');
  clearInterval(intervalId);
};

refs.startBtn.addEventListener('click', onStartBtnCLick);
refs.stopBtn.addEventListener('click', onStopBtnCLick);

refs.stopBtn.setAttribute('disabled', '');
