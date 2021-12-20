// ================== imports  ==================
import flatpickr from "flatpickr"
import 'flatpickr/dist/flatpickr.min.css';
// ================== take refs  ==================

const refs = {
    dateInput: document.querySelector('#datetime-picker'),

};
console.log(refs.dateInput);

// ================== basic style  ==================
// refs.dateInput.type = 'date';
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
