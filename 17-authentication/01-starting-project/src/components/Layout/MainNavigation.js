import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../store/AuthContext';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  const ctx = useContext(AuthContext);

  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>

          {!ctx.isLogin && <li> <Link to='/auth'>Login</Link></li>}


          {ctx.isLogin && <li><Link to='/profile'>Profile</Link> </li>}


          {ctx.isLogin && <li> <button>Logout</button></li>}

        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
