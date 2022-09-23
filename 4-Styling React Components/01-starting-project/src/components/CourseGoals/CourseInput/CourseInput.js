import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [isValid, setIsValid] = useState(false);
  const [enteredValue, setEnteredValue] = useState('');

  const goalInputChangeHandler = event => {
    setIsValid(false);
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();

    if (enteredValue.length === 0) {
      setIsValid(true);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{ color: isValid ? 'red' : 'black' }}>Course Goal</label>
        <input style={{ 'borderColor': isValid ? 'red' : 'black' }} type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
