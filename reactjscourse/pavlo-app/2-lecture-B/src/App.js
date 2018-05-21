import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Pavlo', age: 30 },
      { name: 'Veronika', age: 29 },
      { name: 'X', age: 0 },
    ],
    otherState: 'some other value',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    // DON'T DO THIS: this.state.persons[0].name = 'Pavlo';
    // console.log('Was clicked!');
    this.setState( {
      persons: [
        { name: newName, age: 30 },
        { name: 'Veronika', age: 29 },
        { name: 'X', age: 1 },
      ]
    } )
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name: 'Pavlo', age: 30 },
        { name: event.target.value, age: 29 },
        { name: 'X', age: 0 },
      ]
    } )
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

    if ( this.state.showPersons  ) {
      persons = (
        <div>
         <Person
           name={this.state.persons[0].name}
           age={this.state.persons[0].age}
          />
         <Person
           name={this.state.persons[1].name}
           age={this.state.persons[1].age}
           click={this.switchNameHandler.bind(this, 'Pablos')}
           changed={this.nameChangedHandler}>My Profession: Psychiatrist</Person>
         <Person
           name={this.state.persons[2].name}
           age={this.state.persons[2].age}
          />
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
