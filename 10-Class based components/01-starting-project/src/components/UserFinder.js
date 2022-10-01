import { Fragment, useState, useEffect } from 'react';

import Users from './Users';
import styles from './UserFinder.module.css';

const DUMMY_USERS =[{name:'Ivo', id:'a1'},{name:'Moni', id:"c3"},{name:'VIto', id:"c4"}]

const UserFinder = () => {
  const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setFilteredUsers(
      DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
    );
  }, [searchTerm]);

  const searchChangeHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Fragment>
      <input className={styles.finder} type='search' onChange={searchChangeHandler} />
      <Users users={filteredUsers} />
    </Fragment>
  );
};

export default UserFinder;