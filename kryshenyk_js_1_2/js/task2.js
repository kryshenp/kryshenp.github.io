var arrName = [];

for (var i = 0; i < 5; i++) {
  arrName.push(prompt('Enter name: try ' + (i + 1), ''));
}

function checkName(nameCheck) {
  var nameCheck = prompt('Enter the name!', '');
  var validationMsg = 'Wrong name!!!';

  for (var i = 0; i < 5; i++) {
    if (arrName[i] === nameCheck) {
      validationMsg = nameCheck + ', you\'ve successfully entered!';
      break;
    }
  }
  alert(validationMsg);
}

checkName();
