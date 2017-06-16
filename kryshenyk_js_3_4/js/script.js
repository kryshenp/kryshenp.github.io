/*
Fixed by Pavlo Kryshenyk 13.5.2017
*/
document.onload = (function generateForm() {
  'use strict';

  var test = {
    data: {
      title: 'Javascript Programming Quiz',
      questions: [{
        title: 'Question #1',
        answers: ['Option 1', 'Option 2', 'Option 3']
      },
      {
        title: 'Question #2',
        answers: ['Option 1', 'Option 2', 'Option 3', 'Option 4']
      },
      {
        title: 'Question #3',
        answers: ['Option 1', 'Option 2']
      }]
    },

    generateQuiz: function () {

      var formContainer = document.createElement('form');
      formContainer.classList.add('formContainer');
      root.appendChild(formContainer);

      var pageHeading = document.createElement('h1');
      pageHeading.classList.add('centred', 'main-heading');
      pageHeading.appendChild(document.createTextNode(this.data.title));
      formContainer.appendChild(pageHeading);

      for (var i = 0; i < test.data.questions.length; i++) {

        var caption = document.createElement('h4');
        formContainer.appendChild(caption);
        caption.appendChild(document.createTextNode(i+1 +'. ' + 'Question # ' + (i+1)));

        var question = document.createElement('ul');
        formContainer.appendChild(question);

        for (var j = 0; j < this.data.questions[i].answers.length; j++) {

          var answerContainer = document.createElement('li');
          answerContainer.classList.add('list-unstyled');
          question.appendChild(answerContainer);

          var answer = document.createElement('label');
          answer.classList.add('my-label');
          answerContainer.appendChild(answer);

          var input = document.createElement('input');
          input.setAttribute('type', 'checkbox');
          answer.appendChild(input);
          answer.appendChild(document.createTextNode(this.data.questions[i].answers[j]));
        }
      }

      var button = document.createElement('button');
      button.classList.add('btn', 'btn-default', 'centred', 'my-button');
      button.appendChild(document.createTextNode('Submit Form'));
      formContainer.appendChild(button);
    }
  }

  test.generateQuiz();

})();
