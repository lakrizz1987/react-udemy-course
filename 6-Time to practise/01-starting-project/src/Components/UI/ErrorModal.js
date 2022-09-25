import styles from './ErrorModal.module.css';
import Card from './Card';
import Button from './Button';
import ReactDOM from 'react-dom';

const ModalError = (props) => {
    return (
        <div className={styles.backdrop} onClick={props.onClick} >
            <Card className={styles.modal}>
                <header className={styles.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={styles.content}>
                    <p>{props.text}</p>
                </div>
                <footer className={styles.actions}>
                    <Button type="button" onClick={props.onClick}>Okay</Button>
                </footer>
            </Card>
        </div>
    )
}

const ErrorModal = (props) => {
    return (
        <>
            {ReactDOM.createPortal(<ModalError title={props.title} text={props.text} onClick={props.onClick} />, 
            document.getElementById('modal-error'))}
        </>
    )
};

export default ErrorModal;