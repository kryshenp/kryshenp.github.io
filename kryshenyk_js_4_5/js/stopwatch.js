/*
  Written by Pavlo Kryshenyk 18.5.2017
*/

function Stopwatch(elem) {

  'use strict';

  var time = 0;
  var interval;
  var offset;

  var timeInfo = document.getElementById("timeInfo");
  timeInfo.classList.add('time-info');

  this.isOn = false;

  function delta() {
    var timeNow = Date.now();
    var timePassed = timeNow - offset;
    offset = timeNow;
    return timePassed;
  }

  this.updateTime = function () {
        if (this.isOn) {
            time += delta();
        }
        elem.textContent = timeView(time);

  };

  function timeView(msTime) {
    var time = new Date(msTime);
    var min = time.getMinutes().toString();
    var sec = time.getSeconds().toString();
    var ms = time.getMilliseconds().toString();

    if (min.length < 2) {
      min = '0' + min;
    }

    if(sec.length < 2) {
      sec = '0' + sec;
    }

    if(ms.length == 1) {
      ms = '00' + ms;
    } else if (ms.length == 2) {
      ms = '0' + ms;
    } else {
      ms = ms;
    }

    return min + ' : ' + sec + ' . ' + ms;
  }

  this.startStop = function () {
    if (!this.isOn) {
      interval = setInterval(this.updateTime.bind(this), 1);
      offset = Date.now();
      this.isOn = true;
    }
    else {
      clearInterval(interval);
      timeInfo.appendChild(document.createTextNode('STOP ON ' + (timeView(time))));
      timeInfo.appendChild(document.createElement("br"));
      this.isOn = false;
    }
  };

  this.reset = function () {
    time = 0;
    this.updateTime();

  };

  this.split = function () {
    timeInfo.appendChild(document.createTextNode('SPLIT ON  ' + (timeView(time))));
    timeInfo.appendChild(document.createElement("br"));
  };
}
