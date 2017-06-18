
(function () {

  'use strict';

  var timer = document.getElementById('timer');
  var startStopBtn = document.getElementById('startStopBtn');
  var resetBtn = document.getElementById('resetBtn');
  var splitBtn = document.getElementById('splitBtn');

  var mydiv = document.getElementById("root");

  var stopwatch = new Stopwatch (timer);

  startStopBtn.addEventListener('click', function () {
    if (stopwatch.isOn) {
      stopwatch.startStop();
      startStopBtn.textContent = 'START';

    }
    else {
      stopwatch.startStop();
      startStopBtn.textContent = 'STOP';
    }
  });

  resetBtn.addEventListener('click', function () {
    if (!stopwatch.isOn) {
        stopwatch.reset();
    }
    else {
      stopwatch.reset();
      stopwatch.startStop();
    }
  });

  splitBtn.addEventListener('click', function () {
    stopwatch.split();
  });


})();
