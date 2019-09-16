import React, { Component } from 'react';
import Hello from './Hello'

const persons = [
  {
    name: 'Anton',
    age: 23,
    id: 4711
  },
  {
    name: 'Benno',
    age: 21,
    id: 1231
  },
  {
    name: 'Steffen',
    age: 32,
    id: 2234
  },
]

class HelloContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      persons,
    };
  }

  changeNameHandler = (event, index) => {
    const updatedPersons = [...this.state.persons];
    updatedPersons[index].name = event.target.value;
    this.setState({
        persons: updatedPersons,
    });
  }

  render() {
    return (
      <>
        {this.state.persons.map((person, index) =>
          <Hello
            key={person.id}
            index={index}
            name={person.name}
            age={person.age}
            changeName={this.changeNameHandler}
          />
        )}
      </>
    );
  }
}

export default HelloContainer;
