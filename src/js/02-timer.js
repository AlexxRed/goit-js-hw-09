// ================== imports  ==================
import flatpickr from "flatpickr"
import 'flatpickr/dist/flatpickr.min.css';
// ================== take refs  ==================

const refs = {
    dateInput: document.querySelector('#datetime-picker'),
    startButton: document.querySelector('[data-start]'),
    timer: document.querySelector('.timer'),
    dateFields: document.querySelectorAll('.field'),
    daysValue: document.querySelector('[data-days]'),
    timerLable: document.querySelectorAll('.label')
};
console.log(refs.dateInput);
console.log(refs.startButton);

// ================== basic style  ==================
// refs.dateInput.type = 'date';
refs.startButton.disabled = true;
refs.startButton.style.paddingTop = '7px';
refs.startButton.style.paddingBottom = '6px';
refs.startButton.style.fontSize = '24px';
refs.startButton.style.textAlign = 'center'

refs.dateInput.style.padding = '6px';
refs.dateInput.style.fontSize = '25px';
refs.dateInput.style.textAlign = 'center'
refs.timer.style.display = 'flex';

refs.dateFields.forEach(field => {
  field.style.marginRight = '20px';
  field.style.marginTop = '20px'
  field.style.fontSize = '25px';
  field.style.textAlign = 'center'
  field.style.fontWeight = '500'
})

refs.timerLable.forEach(lable => {
  lable.style.display = 'block';
})


// ================== flatpickr init ==================

const flatpickrOptions = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};
flatpickr(refs.dateInput, flatpickrOptions);
