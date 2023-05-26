Number.prototype.pad = function(size) {
  var s = String(this);
  while (s.length < (size || 2)) {s = "0" + s;}
  return s;
};

window.onload = function () {
  function displaytimer() {
    var millis = (Date.UTC(2023, 5, 26, 13, 0, 0)) - Date.now(); // 11:00 CST = 9:00 UTC
    var days = Math.floor(millis / (36e5 * 24)),
        hours = Math.floor((millis - (days * 24 * 36e5)) / 36e5),
        mins = Math.floor((millis % 36e5) / 6e4),
        secs = Math.floor((millis % 6e4) / 1000);

    document.getElementById('counter').innerHTML = days + ':' + hours.pad(2) + ':' + mins.pad(2) + ':' + secs.pad(2);
  };
  displaytimer();
  setInterval(displaytimer, 1000);
};
