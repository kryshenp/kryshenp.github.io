/*
  Written by Pavlo Kryshenyk 18.5.2017
*/


document.onload = (function() {
  'use strict';

  var timerLayout = {

    generateTimerLayout: function () {

      var timerContainer = document.createElement('div');
      timerContainer.classList.add('timer-container');
      root.appendChild(timerContainer);

      var timerTitle = document.createElement('h1');
      timerTitle.appendChild(document.createTextNode('Stopwatch'));
      timerContainer.appendChild(timerTitle);

      var btnsContainer = document.createElement('div');
      btnsContainer.classList.add('btns-container');
      timerContainer.appendChild(btnsContainer);

      var startStopBtn = document.createElement('button');
      startStopBtn.appendChild(document.createTextNode('START'));
      startStopBtn.setAttribute("id", "startStopBtn");
      btnsContainer.appendChild(startStopBtn);

      var splitBtn = document.createElement('button');
      splitBtn.appendChild(document.createTextNode('SPLIT'));
      splitBtn.setAttribute("id", "splitBtn");
      btnsContainer.appendChild(splitBtn);

      var resetBtn = document.createElement('button');
      resetBtn.appendChild(document.createTextNode('RESET'));
      resetBtn.setAttribute("id", "resetBtn");
      btnsContainer.appendChild(resetBtn);

      var timer = document.createElement('p');
      timer.setAttribute("id", "timer");
      timer.appendChild(document.createTextNode('00 : 00'));
      timerContainer.appendChild(timer);

      var timeInfo = document.createElement('div');
      timeInfo.setAttribute("id", "timeInfo");
      timerContainer.appendChild(timeInfo);

    }
  };

  timerLayout.generateTimerLayout();

})();
