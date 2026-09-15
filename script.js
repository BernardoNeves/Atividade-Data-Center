const debut = new Date(2018, 8, 30); // 30/09/2018

function diffYMD(start, end) {
  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();
  let days = end.getDate() - start.getDate();

  if (days < 0) {
    months--;
    const previousMonthLastDay = new Date(end.getFullYear(), end.getMonth(), 0).getDate();
    days += previousMonthLastDay;
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  return { years, months, days };
}

function updateCounter() {
  const now = new Date();
  const result = diffYMD(debut, now);

  document.getElementById("years").textContent = result.years;
  document.getElementById("months").textContent = result.months;
  document.getElementById("days").textContent = result.days;
}

updateCounter();
setInterval(updateCounter, 60 * 60 * 1000);
