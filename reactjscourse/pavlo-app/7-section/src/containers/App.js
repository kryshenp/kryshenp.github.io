import React, { PureComponent } from 'react';
// import logo from './logo.svg';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';


class App extends PureComponent {
  constructor(props) {
     super(props);
     console.log('[App.js] Inside Constructor', props);
  //    this.state = {
  //      persons: [
  //        {
  //          id: 'soiadif',
  //          name: 'Pavlo',
  //          age: 30
  //        }, {
  //          id: 'sadiljf',
  //          name: 'Veronika',
  //          age: 29
  //        }, {
  //          id: 'sdilfud',
  //          name: 'X',
  //          age: 0
  //        }
  //      ],
  //      otherState: 'some other value',
  //      showPersons: false
  //    };
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount');
  }

  state = {
    persons: [
      {
        id: 'soiadif',
        name: 'Pavlo',
        age: 30
      }, {
        id: 'sadiljf',
        name: 'Veronika',
        age: 29
      }, {
        id: 'sdilfud',
        name: 'X',
        age: 0
      }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount');

  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log( '[UPDATE App.js] Inside shouldComponentUpdate', nextProps, nextState );
  //   // return true;
  //   return nextState.persons !== this.state.persons ||
  //   nextState.showPersons !== this.state.showPersons;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log( '[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState );
  }

  componentDidUpdate() {
    console.log( '[UPDATE App.js] Inside componentDidUpdate' );
  }

  // switchNameHandler = (newName) => {
  //    DON'T DO THIS: this.state.persons[0].name = 'Pavlo';
  //    console.log('Was clicked!');
  //   this.setState( {
  //     persons: [
  //       { name: newName, age: 30 },
  //       { name: 'Veronika', age: 29 },
  //       { name: 'X', age: 1 },
  //     ]
  //   } )
  // }

  nameChangedHandler = (event, id) => {
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

    this.setState({persons: persons});
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
    this.setState({
      showPersons: !doesShow
    }); // if doesShow is false, showPersons is truegit
  }

  render() {
    console.log('[App.js] Inside render()');
    let persons = null;

    if (this.state.showPersons) {
      persons =
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />;
    }

    // create an array classes and join them wit an
    // empty space: result = "red bold"
    // I want to set up the class of this paragraph dynamically
    // depending on the length of the elements in my persons array
    // let classes = ['red', 'bold'].join(' ');
    // ------


    return (
      <Aux>
        <button onClick={() => {this.setState({showPersons: true})}} >Show Persons</button>
        <Cockpit
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler} />
        {persons}
      </Aux>
    );
    //  return React.createElement('div', {className: App'}, React.createElement('h1', null, 'Hi, I\'m a React App'));
  }
}

export default withClass(App, classes.App);
