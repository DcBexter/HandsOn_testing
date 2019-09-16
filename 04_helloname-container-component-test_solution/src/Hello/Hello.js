import React from 'react';
import PropTypes from 'prop-types';

const Hello = ({ age, name, index, changeName }) => {
    return (
      <>
        <input onChange={event => changeName(event, index)}/>
        <h1>{`I'm ${name} and i am ${age} years old!`}</h1>
      </>
    );
}

Hello.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  changeName: PropTypes.func.isRequired
};

export default Hello;
