import { useState } from "react";

const SimpleInput = (props) => {

  const [enteredName, setEnteredName] = useState('');
  const [formIsTouched, setFormIsTouched] = useState(false);

  let nameIsvalid = enteredName.trim() !== '';
  let inputIsInvalid = formIsTouched && !nameIsvalid;

  const inputOnChangeHandler = (e) => {
    setEnteredName(e.target.value.trim());
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setFormIsTouched(true);

    console.log(enteredName)
    setEnteredName('');
    setFormIsTouched(false);
  }

  const onBlurHandler = (e) => {
    setFormIsTouched(true);
  }

  const divClass = inputIsInvalid ? 'form-control invalid' : 'form-control'

  return (
    <form onSubmit={onSubmitHandler}>
      <div className={divClass}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' value={enteredName}
          onChange={inputOnChangeHandler} onBlur={onBlurHandler} />
        {inputIsInvalid && <p className="error-text">All fields are require.</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
