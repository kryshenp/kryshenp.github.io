var arrName = [];

for (var i = 0; i < 5; i++) {
  arrName.push(prompt('Enter name: try ' + (i + 1)));
}

var nameCheck = prompt('Enter the name!');

for(var i in arrName) {
  var userName = arrName[i];
  if (userName == nameCheck) {
    alert(userName + ', you\'ve successfully entered!');
    break;
  } else {
    alert('Wrong name!!!!');
    break;
  }
}
