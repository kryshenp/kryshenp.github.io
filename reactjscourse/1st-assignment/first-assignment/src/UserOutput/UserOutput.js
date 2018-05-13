import React from 'react';

import './UserOutput.css';

const userOutput = (props) => {

  return (
    <div className="UserOutput">
      <p onClick={props.click}>I'm {props.username} and the world is {props.statement}!</p>
      <p>Let me introduce myself. I'm {props.prof}.</p>
    </div>
  )
};

export default userOutput;
