import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { DIALOG_RESET } from '../constants/movieConstant';
import { useHistory } from 'react-router-dom';
const DialogBox = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const { title, body } = props;

    const closeHandler = (e) => {
        e.preventDefault();
        dispatch({ type: DIALOG_RESET });
        history.push('/home');
    };

    const orderHandler = (e) => {
        e.preventDefault();
        dispatch({ type: DIALOG_RESET });
        history.push('/order');
    };

    return (
        <div className='bg-dialog'>
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>{body}</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant='secondary' onClick={closeHandler}>
                        Close
                    </Button>
                    <Button variant='primary' onClick={orderHandler}>
                        View Orders
                    </Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    );
};

export default DialogBox;
