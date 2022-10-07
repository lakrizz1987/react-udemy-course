import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const inputRef = useRef();
  const [enteredName, setEnteredName] = useState('');
  const [nameIsvalid, setNameIsValid] = useState(true);

  const inputOnChangeHandler = (e) => {
    setEnteredName(e.target.value);
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (inputRef.current.value === '') {
      setNameIsValid(false)
      return
    }
    console.log(inputRef.current.value)
  }

  const divClass = nameIsvalid ? 'form-control': 'form-control invalid'

  return (
    <form onSubmit={onSubmitHandler}>
      <div className={divClass}>
        <label htmlFor='name'>Your Name</label>
        <input ref={inputRef} type='text' id='name' onChange={inputOnChangeHandler} />
        {!nameIsvalid && <p className="error-text">All fields are require.</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
