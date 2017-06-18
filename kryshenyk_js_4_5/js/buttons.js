
(function () {
  
  'use strict';

  var timer = document.getElementById('timer');
  var startStopBtn = document.getElementById('startStopBtn');
  var resetBtn = document.getElementById('resetBtn');

  var stopwatch = new Stopwatch (timer);

  startStopBtn.addEventListener('click', function () {
    if (stopwatch.isOn) {
      stopwatch.stop();
      startStopBtn.textContent = 'START';
    }
    else {
      stopwatch.start();
      startStopBtn.textContent = 'STOP';
    }
  });

  resetBtn.addEventListener('click', function () {
    if (!stopwatch.isOn) {
        stopwatch.reset();
    }
    else {
      stopwatch.stop();
      stopwatch.reset();
    }
  });

})();
