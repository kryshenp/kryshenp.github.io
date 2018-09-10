import React from 'react';

import Person from './Person/Person';

const persons = (props) => props.persons.map((person, index) => {
    // anonymous function is executed in every element in persons array
    return <Person
          click={() => props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={(event) => props.changed(event, person.id)}/>
  });

export default persons;
