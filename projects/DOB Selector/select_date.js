const openDatePicker = document.getElementById('openDatePicker');
const datePickerModal = document.getElementById('datePickerModal');
const closeDatePicker = document.getElementById('closeDatePicker');
const cancelButton = document.getElementById('cancelButton');
const okButton = document.getElementById('okButton');
const selectedDate = document.getElementById('selectedDate');
const calendar = document.getElementById('calendar');
const monthSelector = document.getElementById('monthSelector');
const yearSelector = document.getElementById('yearSelector');

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const currentYear = new Date().getFullYear();
let selectedDay = new Date().getDate();
let selectedMonth = new Date().getMonth();
let selectedYear = new Date().getFullYear();

console.log(currentYear);
console.log(selectedDay);
console.log(selectedMonth);
console.log(selectedYear);

function generateCalendar(month, year) {
  calendar.innerHTML = '';
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  console.log(firstDay);
  console.log(daysInMonth);
  
  // Add empty slots for days before the start of the month
  for (let i = 0; i < firstDay; i++) {
    const emptySlot = document.createElement('div');
    calendar.appendChild(emptySlot);
  }

  // Add days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    const dayElement = document.createElement('div');
    dayElement.textContent = day;
    if (day === selectedDay && month === selectedMonth && year === selectedYear) {
      dayElement.classList.add('selected');
    }
    dayElement.addEventListener('click', () => {
      selectedDay = day;
      selectedMonth = month;
      selectedYear = year;
      updateSelectedDate();
      generateCalendar(selectedMonth, selectedYear);
    });
    calendar.appendChild(dayElement);
  }
}

function updateSelectedDate() {
  selectedDate.textContent = `${months[selectedMonth]} ${selectedDay}, ${selectedYear}`;
}

function populateSelectors() {
  months.forEach((month, index) => {
    const option = document.createElement('option');
    option.value = index;
    option.textContent = month;
    if (index === selectedMonth) {
      option.selected = true;
    }
    monthSelector.appendChild(option);
  });

  for (let year = currentYear - 100; year <= currentYear + 100; year++) {
    const option = document.createElement('option');
    option.value = year;
    option.textContent = year;
    if (year === selectedYear) {
      option.selected = true;
    }
    yearSelector.appendChild(option);
  }
}

monthSelector.addEventListener('change', (e) => {
  selectedMonth = parseInt(e.target.value);
  generateCalendar(selectedMonth, selectedYear);
});

yearSelector.addEventListener('change', (e) => {
  selectedYear = parseInt(e.target.value);
  generateCalendar(selectedMonth, selectedYear);
});

openDatePicker.addEventListener('click', () => {
  datePickerModal.classList.remove('hidden');
  generateCalendar(selectedMonth, selectedYear);
});

closeDatePicker.addEventListener('click', () => {
  datePickerModal.classList.add('hidden');
});

cancelButton.addEventListener('click', () => {
  datePickerModal.classList.add('hidden');
});

okButton.addEventListener('click', () => {
  datePickerModal.classList.add('hidden');
});

populateSelectors();
// generateCalendar(selectedMonth, selectedYear);
updateSelectedDate();
