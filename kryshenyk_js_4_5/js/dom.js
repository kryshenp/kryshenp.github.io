document.onload = (function() {
  'use strict';

  var timerLayout = {

    generateTimerLayout: function() {

      var timerContainer = document.createElement('div');
      root.appendChild(timerContainer);

      var timerTitle = document.createElement('h1');
      timerTitle.appendChild(document.createTextNode('Stopwatch'));
      timerContainer.appendChild(timerTitle);

      var startStopBtn = document.createElement('button');
      startStopBtn.appendChild(document.createTextNode('START'));
      startStopBtn.setAttribute("id", "startStopBtn");
      timerContainer.appendChild(startStopBtn);

      var splitBtn = document.createElement('button');
      splitBtn.appendChild(document.createTextNode('SPLIT'));
      splitBtn.setAttribute("id", "splitBtn");
      timerContainer.appendChild(splitBtn);

      var resetBtn = document.createElement('button');
      resetBtn.appendChild(document.createTextNode('RESET'));
      resetBtn.setAttribute("id", "resetBtn");
      timerContainer.appendChild(resetBtn);

      var timer = document.createElement('p');
      timer.setAttribute("id", "timer");
      timer.appendChild(document.createTextNode('00 : 00'));
      timerContainer.appendChild(timer);

      var infa = document.createElement('div');
      infa.setAttribute("id", "infa");
      timerContainer.appendChild(infa);

    }
  };

  timerLayout.generateTimerLayout();

})();
