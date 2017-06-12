/*
Written by Pavlo Kryshenyk 10.5.2017
*/
document.onload = (function generateForm() {
  'use strict';

  var root = document.createElement('div');
  root.setAttribute("id", "root");
  document.body.appendChild(root);

  var formContainer = document.createElement('form');
  formContainer.classList.add("formContainer");
  root.appendChild(formContainer);

  var pageHeading = document.createElement('h1');
  pageHeading.classList.add("centred", "main-heading");
  pageHeading.appendChild(document.createTextNode('Javascript Programming Quiz'));
  formContainer.appendChild(pageHeading);

  var quiz = {
    questions: function blab() {

      var questionsList = document.createElement('div');
      questionsList.classList.add("ql-container");
      formContainer.appendChild(questionsList);

      for (var i = 1; i < 4; i++) {
        var question = document.createElement('ul');
        questionsList.appendChild(question);
        var caption = document.createElement('h4');
        caption.appendChild(document.createTextNode(i +". " + "Question # " + i));
        question.appendChild(caption);

        for (var j = 1; j < 4 ; j++) {
          var answerContainer = document.createElement('li');
          answerContainer.classList.add("list-unstyled");
          question.appendChild(answerContainer);

          var answer = document.createElement('label');
          answer.classList.add("my-label");
          answer.setAttribute("id", "checkbox");
          answerContainer.appendChild(answer);

          var input = document.createElement('input');
          input.setAttribute("type", "checkbox");
          answer.appendChild(input);

          var optionCaption = document.createElement('span');
          optionCaption.appendChild(document.createTextNode(' Option # ' + j));
          answer.appendChild(optionCaption);
        }
      }
    },

    button: function () {
      var button = document.createElement("button");
      button.classList.add("btn", "btn-default", "centred", "my-button");
      formContainer.appendChild(button);

      var buttonCaption = document.createElement("p");
      buttonCaption.appendChild(document.createTextNode('Submit Form'));
      buttonCaption.classList.add("btn-caption");
      button.appendChild(buttonCaption);
    }
  }

  quiz.questions();
  quiz.button();

})();
