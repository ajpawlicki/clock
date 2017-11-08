window.onload = () => {
  const hourEl = document.querySelector('.hour');
  const minEl = document.querySelector('.min');
  const secEl = document.querySelector('.sec');

  renderTime(hourEl, minEl, secEl);

  setInterval(() => {
    renderTime(hourEl, minEl, secEl);
  }, 1000);
};

function renderTime(hourEl, minEl, secEl) {
  let date = new Date();

  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  hourEl.innerHTML = hour < 10 ? '0' + hour.toString() : hour;
  minEl.innerHTML = min < 10 ? '0' + min.toString() : min;
  secEl.innerHTML = sec < 10 ? '0' + sec.toString() : sec;
};