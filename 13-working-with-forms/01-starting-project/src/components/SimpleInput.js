import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const inputRef = useRef();
  const [enteredName, setEnteredName] = useState('');
  const [nameIsvalid, setNameIsValid] = useState(false);
  const [formIsTouched, setFormIsTouched] = useState(false);

  let inputIsInvalid = formIsTouched && !nameIsvalid;

  const inputOnChangeHandler = (e) => {
    setEnteredName(e.target.value);
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setFormIsTouched(true);

    if (inputRef.current.value === '') {
      setNameIsValid(false)
      return
    }
    setNameIsValid(true)
    console.log(inputRef.current.value)
  }

  const divClass = inputIsInvalid ? 'form-control invalid' : 'form-control'

  return (
    <form onSubmit={onSubmitHandler}>
      <div className={divClass}>
        <label htmlFor='name'>Your Name</label>
        <input ref={inputRef} type='text' id='name' onChange={inputOnChangeHandler} />
        {inputIsInvalid && <p className="error-text">All fields are require.</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
