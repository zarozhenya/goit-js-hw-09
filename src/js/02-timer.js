import { Notify } from 'notiflix';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { convertMs } from './convert-ms';

const refs = {
  input: document.querySelector('input#datetime-picker'),
  startBtn: document.querySelector('button[data-start]'),
  daysLabel: document.querySelector('.field span[data-days]'),
  hoursLabel: document.querySelector('.field span[data-hours]'),
  minutesLabel: document.querySelector('.field span[data-minutes]'),
  secondsLabel: document.querySelector('.field span[data-seconds]'),
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose: onDatePickerClose,
};

let chosenDate = null;

function onDatePickerClose(selectedDates) {
  if (Date.now() > selectedDates[0]) {
    Notify.failure('Please choose a date in the future');
    refs.startBtn.setAttribute('disabled', '');
    return;
  }
  refs.startBtn.removeAttribute('disabled');
  chosenDate = selectedDates[0];
}

refs.startBtn.setAttribute('disabled', '');
flatpickr(refs.input, options);

const addLeadingZero = value => {
  return String(value).padStart(2, '0');
};

const updateUI = ({ days, hours, minutes, seconds }) => {
  refs.daysLabel.textContent = addLeadingZero(days);
  refs.hoursLabel.textContent = addLeadingZero(hours);
  refs.minutesLabel.textContent = addLeadingZero(minutes);
  refs.secondsLabel.textContent = addLeadingZero(seconds);
};

const onStartBtnClick = e => {
  e.currentTarget.setAttribute('disabled', '');
  refs.input.setAttribute('disabled', '');
  const intervalID = setInterval(() => {
    const time = chosenDate - Date.now();
    if (time >= 0) {
      const splicedTime = convertMs(time);
      updateUI(splicedTime);
    } else {
      clearInterval(intervalID);
      refs.input.removeAttribute('disabled');
    }
  }, 1000);
};
refs.startBtn.addEventListener('click', onStartBtnClick);
