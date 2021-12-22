// ================== imports  ==================
import flatpickr from "flatpickr"
import 'flatpickr/dist/flatpickr.min.css';
// ================== take refs  ==================

const refs = {
    dateInput: document.querySelector('#datetime-picker'),
    startButton: document.querySelector('[data-start]'),
  timer: document.querySelector('.timer'),
  dateFields: document.querySelectorAll('field'),
    daysValue: document.querySelector('[data-days]'),
};
console.log(refs.dateInput);
console.log(refs.startButton);
// ================== basic style  ==================
// refs.dateInput.type = 'date';
refs.startButton.disabled = true;

refs.timer.style.display = 'flex';
refs.dateFields.forEach(field => {
  field.style.display = 'block'
  field.style.justifyContent = 'flex-wrap';
})

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
