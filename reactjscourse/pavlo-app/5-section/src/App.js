import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'soiadif', name: 'Pavlo', age: 30 },
      { id: 'sadiljf', name: 'Veronika', age: 29 },
      { id: 'sdilfud', name: 'X', age: 0 },
    ],
    otherState: 'some other value',
    showPersons: false
  }

  // switchNameHandler = (newName) => {
  //   // DON'T DO THIS: this.state.persons[0].name = 'Pavlo';
  //   // console.log('Was clicked!');
  //   this.setState( {
  //     persons: [
  //       { name: newName, age: 30 },
  //       { name: 'Veronika', age: 29 },
  //       { name: 'X', age: 1 },
  //     ]
  //   } )
  // }

  nameChangedHandler = (event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    // const person = Object.assign({},this.state.persons[personIndex]);
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons}  );
  }

  deletePersonHandler = (personIndex) => {
      // get access to all the persons in the state
      // create a copy of the persons array before manipulating it
      // by adding the slice method
      // slice without arguments simply copies the the full array and
      // and turns the new one which is then stored here

      // const persons = this.state.persons.slice();

      // alternative to this approach would be to use ES6 feature - the spread operator
      // ... is a spread operator
      // spreads out the elements in this array into a list of elements which simply
      // then gets added to this array
      // so now we have a new array with the objects from the old array but not array itself
      const persons = [...this.state.persons];

      // removing one elemet we wanted to remove by using the index of the person
      persons.splice(personIndex, 1);
      // updating the react  state with my new array
      this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons; //if doesShow is true, showPersons is false
    this.setState({showPersons: !doesShow}); // if doesShow is false, showPersons is true
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',

    };

    let persons = null;

    if ( this.state.showPersons ) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
          // anonymous function is executed in every element in persons array
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
      </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>Works!</p>
        <button
           style={style}
           onClick={this.togglePersonsHandler}>Toggle persons</button>
        {persons}
      </div>
    );
    //  return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App'));
  }
}

export default App;
