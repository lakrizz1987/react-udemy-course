import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const inputRef = useRef();
  const [enteredName, setEnteredName] = useState('');

  const inputOnChangeHandler = (e) => {
    setEnteredName(e.target.value);
  }

  const onSubmitHandler =(e)=>{
    e.preventDefault();
    console.log(inputRef.current.value)
  }

  

  return (
    <form onSubmit={onSubmitHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input ref={inputRef} type='text' id='name' onChange={inputOnChangeHandler} />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
