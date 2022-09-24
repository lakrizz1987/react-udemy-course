import React from 'react';
import { useState } from 'react';
import AddUser from './Components/Users/AddUser';
import UsersList from './Components/Users/UsersList';



function App() {

    const [users, setUsers] = useState([]);

    function setUserToCollection(data) {
        setUsers(oldState => {
            return [...oldState, data];
        })
    }

    return (
        <div>
            <AddUser setUser={setUserToCollection} />
            <UsersList users={users} />
        </div>
    );
}

export default App;
