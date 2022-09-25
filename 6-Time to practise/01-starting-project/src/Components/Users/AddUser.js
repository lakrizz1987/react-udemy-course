import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
    const [error, setError] = useState();

    function setErrorState() {
        setError(false);
    }

    function addUserHandler(e) {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const name = formData.get('username');
        const age = formData.get('age');

        if (name.length === 0 || age.length === 0) {
            setError(
                { title: 'All fields are require!', text: 'You should enter your name and age!' }
            )
            return;
        }

        if (Number(age) <= 0) {
            setError(
                { title: 'Age is not correct!', text: 'Age can not be 0 !' }
            )
            return;
        }

        props.setUser({ name, age, id: Math.random().toString() })
        e.target.reset();

    }


    return (
        <>
            {error && <ErrorModal title={error.title} text={error.text} onClick={setErrorState} />}
            <Card className={styles.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input type='text' id="username" name="username" />
                    <label htmlFor="Age">Age</label>
                    <input type='number' id="Age" name="age" />
                    <Button type="submit">Add user</Button>
                </form>
            </Card>
        </>
    )
};

export default AddUser;