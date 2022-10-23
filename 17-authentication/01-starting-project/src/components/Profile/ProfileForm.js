import { useContext, useRef } from 'react';
import AuthContext from '../../store/AuthContext';
import classes from './ProfileForm.module.css';

const ProfileForm = (props) => {
  const passRef = useRef();
  const ctx = useContext(AuthContext);


  function submitHandler(e) {
    e.preventDefault();

    const newPassword = passRef.current.value;

    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBrUgTAteNBRQgdJXs_3OXUjh3hzPY_8ac',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({ idToken: ctx.token, password: newPassword, returnSecureToken: false }),
      }
    )
      .then(res => res.json())
      .then(data => {
        props.changeStateSuccess();
        passRef.current.value = '';
      })
      .catch(err => {
        alert(err)
      })
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' minLength='7' ref={passRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
