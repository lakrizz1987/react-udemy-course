import Input from '../../UI/Input';
import styles from './MealItemForm.module.css';

function MealItemForm(props) {
    return (
        <form className={styles.form}>
            <Input id={props.id} label='Amount' input={{
                type: 'number' + props.id,
                id: 'amount',
                min: '1',
                max: '5',
                step:'1',
                defaultValue: '1'
            }} />
            <button>+ Add</button>
        </form>
    )
}

export default MealItemForm;