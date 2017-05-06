var arrName = [];
var validationMsg = 'Wrong name!!!';

for (var i = 0; i < 5; i++) {
  arrName.push(prompt('Enter name: try ' + (i + 1), ''));
}

var nameCheck = prompt('Enter the name!', '');

for(var i = arrName.length - 1; i >= 0; i--) {
  if (arrName[i] == nameCheck) {
    validationMsg = nameCheck + ', you\'ve successfully entered!';
    break;
  }
}

alert (validationMsg);
