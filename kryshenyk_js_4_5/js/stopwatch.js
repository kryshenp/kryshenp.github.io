function Stopwatch(elem) {

  'use strict';

  var time = 0;
  var interval;
  var offset;

  var timeInfo = document.getElementById("infa");
  timeInfo.classList.add('centred', 'time-info');

  this.isOn = false;

  function delta() {
    var timeNow = Date.now();
    var timePassed = timeNow - offset;
    offset = timeNow;
    return timePassed;
  }

  this.update = function () {
        if (this.isOn) {
            time += delta();
        }
        elem.textContent = formatTime(time);

  };

  function formatTime(timeInMilliseconds) {
    var time = new Date(timeInMilliseconds);
    var minutes = time.getMinutes().toString();
    var seconds = time.getSeconds().toString();
    var milliseconds = time.getMilliseconds().toString();

    if (minutes.length < 2) {
      minutes = '0' + minutes;
    }

    if(seconds.length < 2) {
      seconds = '0' + seconds;
    }

    if(milliseconds.length < 2) {
      milliseconds = '0' + milliseconds;
    }

    return minutes + ' : ' + seconds + ' . ' + milliseconds;
  }

  this.startStop = function () {
    if (!this.isOn) {
      interval = setInterval(this.update.bind(this), 8);
      offset = Date.now();
      this.isOn = true;
    }
    else {
      clearInterval(interval);
      timeInfo.appendChild(document.createTextNode('STOP ON  '+ (formatTime(time))));
      timeInfo.appendChild(document.createElement("br"));
      this.isOn = false;
    }
  };

  this.reset = function () {
    time = 0;
    this.update();

  };

  this.split = function () {
    timeInfo.appendChild(document.createTextNode('SPLIT ON  '+ (formatTime(time))));
    timeInfo.appendChild(document.createElement("br"));
  };

}
