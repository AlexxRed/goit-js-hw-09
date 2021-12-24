import { Notify } from 'notiflix/build/notiflix-notify-aio';

// ================== take refs  ==================

const refs = {
  form: document.querySelector('form'),
  inputFields: document.querySelectorAll('input'),
  labels: document.querySelectorAll('label'),
  createButton: document.querySelector('button'),
  delay: document.getElementsByName('delay'),
  step: document.getElementsByName('step'),
  amount: document.getElementsByName('amount'),
};

// refs.form.addEventListener('input', onInputs);
refs.form.addEventListener('submit', onCreatePromises);

// ================== basic style  ==================

refs.labels.forEach(element => {
  element.style.marginRight = '30px'
  element.style.display = 'inline-block'
  element.style.maxWidth = '200px'
  element.style.fontSize = '24px';
  element.style.fontWeight = '600';
});

refs.inputFields.forEach(input => {
  input.style.height = '35px'
  input.style.padding = '2px 5px';
  input.style.fontSize = '16px';
  input.style.fontWeight = 'bold';
});

refs.createButton.style.height = '35px';
refs.createButton.style.fontSize = '16px';
refs.createButton.style.fontWeight = 'bold';


// ================== Notiflix  init ==================

Notify.init({
width: '700px',
position: 'right-top',
closeButton: false,
distance: '10px',
opacity: 5,
borderRadius: '5px',
rtl: false,
timeout: 8000,
messageMaxLength: 110,
backOverlay: false,
backOverlayColor: 'rgba(0,0,0,0.9)',
plainText: true,
showOnlyTheLastOne: false,
clickToClose: true,
pauseOnHover: true,
zindex: 4001,
fontFamily: 'Quicksand',
fontSize: '32px',
});
// ============= make array of promises ==============

// const promisesArr = [];

// function createArrayPromises(value) {
//   const arrayOfValue = Array(value).fill(0);

//   // let delay = 0;
//   let position = 0;
//   for (let i = 0; i < arrayOfValue.length; i += 1){
//     promisesArr.push(position += 1)
//   }
//   // console.log(promisesArr);

// };
// // createArrayPromises(5)
// console.log(promisesArr);

// ============= start create promises ================

function onCreatePromises(e) {
  e.preventDefault();
  const delay = Number(e.currentTarget.elements.delay.value);
  const step = Number(e.currentTarget.elements.step.value);
  const amount = Number(e.currentTarget.elements.amount.value);
  console.log(delay);
  console.log(step);
  console.log(amount);

  const promisesArr = [];

  // const arrayOfValue = Array(Number(amount)).fill(0);
  // console.log(arrayOfValue);
  
  for (let i = 0; i < amount; i += 1){
    promisesArr.push(delay + (i * step))
  };
  console.log(promisesArr);

  // let delay = 1000
  // delay += 1000
  // createArrayPromises()
  const promises = promisesArr.map((delay, index) => {
    createPromise(index + 1, delay)
  })
  e.currentTarget.reset();
}
// onCreatePromises() 
// ================== make promise  ==================

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
    if (shouldResolve) {
    resolve({ position, delay });
    } else {
    reject({position, delay});
    }
    },delay)
  })
    .then(({ position, delay }) => {
      Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
    .catch(({ position, delay }) => {
      Notify.failure(`Rejected promise ${position} in ${delay}ms`);
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
}

// createPromise(2, 1500)



// function onInputs(e) {
//   const delay = e.currentTarget.elements.delay.value;
//   const step = e.currentTarget.elements.step.value;
//   const amount = e.currentTarget.elements.amount.value;
//   const inputsValues = {
//     delay,
//     step,
//     amount,
//   };
//   return inputsValues 
//   console.log(inputsValues);
// // createArrayPromises(amount)
// };
// console.log({ inputsValues });
  // console.log(delay);
  // console.log(step);
  // console.log(amount);