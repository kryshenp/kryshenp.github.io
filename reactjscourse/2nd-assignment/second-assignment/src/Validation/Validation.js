import React from 'react';

const validation = (props) => {
  let validationMessage = 'Text long enough';

  if (props.inputTextLength <= 5) {
    validationMessage = 'Text too short';
  }

  return (
    <div>
      <p>{validationMessage}</p>
    </div>
  );
};

export default validation;

// this is a 1st way how to output validations
// { props.inputTextLength < 5 ?
//     <p>Text too short!</p> :
//     <p>Text long enough</p>
// }
