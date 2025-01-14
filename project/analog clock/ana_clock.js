function updateClock() {
  const hourHand = document.getElementById('hour');
  const minuteHand = document.getElementById('minute');
  const secondHand = document.getElementById('second');

  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const secondDeg = (seconds / 60) * 360 + 90;
  const minuteDeg = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
  const hourDeg = (hours % 12 / 12) * 360 + (minutes / 60) * 30 + 90;

  secondHand.style.transform = `translateY(-50%) rotate(${secondDeg}deg)`;
  minuteHand.style.transform = `translateY(-50%) rotate(${minuteDeg}deg)`;
  hourHand.style.transform = `translateY(-50%) rotate(${hourDeg}deg)`;
}

setInterval(updateClock, 1000);
updateClock();
