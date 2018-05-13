import React, { Component } from 'react';
//  import logo from './logo.svg';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    usernames: [
      { username: 'Pavlo', statement: 'not real', prof: 'Web Developer' },
      { username: 'Veronika', statement: 'real', prof: 'Psychiatrist' },
      { username: 'X', statement: 'invisible', prof: 'Kid' },
    ],
  }

  switchNameHandler = (newName) => {
    this.setState({
      usernames: [
        { username: newName, statement: 'not real but who knows', prof: 'a Web Developer' },
        { username: 'Veronika', statement: 'real', prof: 'a Psychiatrist' },
        { username: 'X', statement: 'invisible', prof: 'a Kid' },
    ] })
  }

  nameChangedHandler = (event) => {
    this.setState({
      usernames: [
        { username: 'Pavlo', statement: 'not real but who knows' },
        { username: 'Veronika', statement: 'real' },
        { username: event.target.value, statement: 'invisible' },
      ]
    })
  }


  render() {
    return (
      <div className="App">
        <UserInput
          changed={this.nameChangedHandler}
          currentName={this.state.usernames[2].username}
        />

        <UserOutput
          username={this.state.usernames[0].username}
          statement={this.state.usernames[0].statement}
          prof={this.state.usernames[0].prof}
          click={this.switchNameHandler.bind(this, 'Andy')}
        />
        <UserOutput
          username={this.state.usernames[1].username}
          statement={this.state.usernames[1].statement}
          prof={this.state.usernames[1].prof}
        />
        <UserOutput
          username={this.state.usernames[2].username}
          statement={this.state.usernames[2].statement}
          prof={this.state.usernames[2].prof}
        />
        <button onClick={() => this.switchNameHandler('Horace')}>Switch name</button>
      </div>
    );
  }
}

export default App;
