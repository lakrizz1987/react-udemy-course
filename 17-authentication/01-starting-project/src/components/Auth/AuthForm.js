import { useContext, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../../store/AuthContext';

import classes from './AuthForm.module.css';

let url = '';

const AuthForm = () => {
  const history = useHistory();
  const ctx = useContext(AuthContext);

  const [isSendingRequest, setIsSendingRequest] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const emailRef = useRef();
  const passwordRef = useRef();

  if (isLogin) {
    url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBrUgTAteNBRQgdJXs_3OXUjh3hzPY_8ac'
  } else {
    url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBrUgTAteNBRQgdJXs_3OXUjh3hzPY_8ac'
  };

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    setIsSendingRequest(true);
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ email, password, returnSecureToken: true }),
    }).then(res => {

      if (!res.ok) {
        throw new Error('Something was wrong!!!')
      } else {
        return res.json()
      }
      
    }).then(data => {

      const time = new Date(new Date().getTime() + (+data.expiresIn * 1000));

      setIsSendingRequest(false);
      ctx.login(data.idToken, time.toString())
      history.replace('/')

    })
      .catch(err => {
        alert(err.message);
        setIsSendingRequest(false);
      })

  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required ref={passwordRef} />
        </div>
        <div className={classes.actions}>
          {isSendingRequest && <p className='centered'>Sending....</p>}
          {!isSendingRequest && <button>{isLogin ? 'Login' : 'Create Account'}</button>}

          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
