import styles from './ErrorModal.module.css';
import Card from './Card';
import Button from './Button';

const ErrorModal = (props) => {
    return (
        <div className={styles.backdrop}>
            <Card className={styles.modal}>
                <header className={styles.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={styles.content}>
                    <p>{props.text}</p>
                </div>
                <footer className={styles.actions}>
                    <Button type="button">Okay</Button>
                </footer>
            </Card>
        </div>
    )
};

export default ErrorModal;