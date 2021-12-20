// ================== imports  ==================
import flatpickr from "flatpickr"
import 'flatpickr/dist/flatpickr.min.css';
// ================== take refs  ==================

const refs = {
    dateInput: document.querySelector('#datetime-picker'),
    startButton: document.querySelector('[data-start]'),
};
console.log(refs.dateInput);
console.log(refs.startButton);
// ================== basic style  ==================
// refs.dateInput.type = 'date';
refs.startButton.disabled = true;



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
