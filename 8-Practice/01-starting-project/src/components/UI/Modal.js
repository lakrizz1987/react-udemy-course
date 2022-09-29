import styles from './Modal.module.css';
import { Fragment} from 'react';
import  ReactDOM from 'react-dom';

const Backdrop = props => {
    return <div className={styles.backdrop} onClick={props.onClose}></div>
};

const MoadalOverlay = props => {
    return (
        <div className={styles.modal}>
            <div className={styles.content}>{props.children}</div>
        </div>
    )
}

const portalElement = document.getElementById('overlay')

const Modal = props => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, portalElement)}
            {ReactDOM.createPortal(<MoadalOverlay>{props.children}</MoadalOverlay>, portalElement)}
        </Fragment>

    )
};

export default Modal;