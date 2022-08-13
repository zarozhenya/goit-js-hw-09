import { Notify } from 'notiflix';

const formRef = document.querySelector('form.form');

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function showSuccessMessage({ position, delay }) {
  Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
}

function showErrorMessage({ position, delay }) {
  Notify.failure(`Rejected promise ${position} in ${delay}ms`);
}

function onFormSubmit(e) {
  e.preventDefault();
  const {
    delay: { value: delay },
    step: { value: step },
    amount: { value: amount },
  } = e.currentTarget.elements;
  for (let i = 0; i < Number(amount); i += 1) {
    createPromise(i + 1, Number(delay) + i * Number(step))
      .then(showSuccessMessage)
      .catch(showErrorMessage);
  }
}
formRef.addEventListener('submit', onFormSubmit);
