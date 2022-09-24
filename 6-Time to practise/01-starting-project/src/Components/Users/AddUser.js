import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";

const AddUser = () => {
    const [eneteredName, setEnteredName] = useState('');
    const [eneteredAge, setEnteredAge] = useState('');

    function addUserHandler(e) {
        e.preventDefault();
        
        const formData = new FormData(e.currentTarget);
        const name = formData.get('username');
        const age = formData.get('age');

        if (name.length.trim() === 0 || age.length.trim() === 0) {
            return;
        }

        if (Number(age) < 0) {
            return;
        }

        setEnteredName(name);
        setEnteredAge(age);
        e.target.reset();

    }


    return (
        <Card className={styles.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input type='text' id="username" name="username" />
                <label htmlFor="Age">Age</label>
                <input type='number' id="Age" name="age" />
                <Button type="submit">Add user</Button>
            </form>
        </Card>
    )
};

export default AddUser;