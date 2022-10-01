import { Fragment, useState, useEffect, Component } from 'react';

import Users from './Users';
import styles from './UserFinder.module.css';

const DUMMY_USERS = [{ name: 'Ivo', id: 'a1' }, { name: 'Moni', id: "c3" }, { name: 'VIto', id: "c4" }]


class UserFinder extends Component {
    constructor() {
        super()
        this.state = {
            filteredUsers: DUMMY_USERS,
            searchTerm: ''
        }
    }

    componentDidUpdate(oldProps, oldState) {
        if (oldState.searchTerm !== this.state.searchTerm) {
            this.setState({ filteredUsers: DUMMY_USERS.filter((user) => user.name.includes(this.state.searchTerm)) })
        }
    }

    searchChangeHandler(e) {
        this.setState({ searchTerm: e.target.value })
    }

    render() {

        return (
            <Fragment>
                <input className={styles.finder} type='search' onChange={this.searchChangeHandler.bind(this)} />
                <Users users={this.state.filteredUsers} />
            </Fragment>
        )


    }
}

/*
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
*/
export default UserFinder;