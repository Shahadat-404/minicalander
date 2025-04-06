const monthYear = document.getElementById("monthYear");
const calendarDates = document.getElementById("calendarDates");
const prevMonth = document.getElementById("prevMonth");
const nextMonth = document.getElementById("nextMonth");

let currentDate = new Date();

function renderCalendar(date) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);

  const today = new Date();

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  monthYear.textContent = `${monthNames[month]} ${year}`;

  calendarDates.innerHTML = "";

  const startDay = firstDay.getDay();
  const totalDays = lastDay.getDate();

  for (let i = 0; i < startDay; i++) {
    calendarDates.innerHTML += "<div></div>";
  }

  for (let day = 1; day <= totalDays; day++) {
    const isToday =
      day === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear();
    calendarDates.innerHTML += `<div class="${
      isToday ? "today" : ""
    }">${day}</div>`;
  }
}

prevMonth.onclick = () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar(currentDate);
};

nextMonth.onclick = () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar(currentDate);
};

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    prevMonth.click();
  } else if (e.key === "ArrowRight") {
    nextMonth.click();
  }
});

renderCalendar(currentDate);
