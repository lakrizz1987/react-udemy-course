import Card from "../UI/Card";
import styles from "./AddUser.module.css";

const AddUser = () => {

    function addUserHandler(e) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get('username');
        const age = formData.get('age');
        e.target.reset();
    }

    return (
        <Card className={styles.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input type='text' id="username" name="username" />
                <label htmlFor="Age">Age</label>
                <input type='number' id="Age" name="age" />
                <button type="submit">Add user</button>
            </form>
        </Card>
    )
};

export default AddUser;