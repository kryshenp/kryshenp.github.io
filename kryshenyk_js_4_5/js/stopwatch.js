function Stopwatch(elem) {

  'use strict';

  var time = 0;
  var interval;
  var offset;

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
        elem.textContent = timeFormatter(time);
        console.log(timeFormatter(time));
  };



  function timeFormatter(timeInMilliseconds) {
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

  this.start = function () {
    while (!this.isOn) {
      interval = setInterval(this.update.bind(this), 8);
      offset = Date.now();
      this.isOn = true;
    }
  };

  this.stop = function () {
    while (this.isOn) {
      clearInterval(interval);
      this.isOn = false;
    }
  };

  this.reset = function () {
    time = 0;
    this.update();
  };

}
