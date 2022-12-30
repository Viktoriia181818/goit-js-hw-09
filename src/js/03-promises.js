import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formElem = document.querySelector('.form');
formElem.addEventListener('submit', onSubmitBtn);

function onSubmitBtn(e) {
  e.preventDefault();
}

let delay = Number(e.target.delay.value);
let step = Number(e.target.step.value);
let amount = Number(e.target.amount.value);


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = { position, delay };

  return new Promise((resolve, reject) => {
    if (shouldResolve) {
      resolve(promise);
    }
    reject(promise);
  });
}

for (let position = 1; position <= amount; position += 1) {
  createPromise(2, 1500)
    .then(({ position, delay }) => {
      setTimeout(() => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`, { useIcon: false });
      }, delay);
    })
   .catch(({ position, delay }) => {
        setTimeout(() => {
          Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`, { useIcon: false });
        }, delay);
      });
    delay += step;
  }
  


  
