import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../../components/Message';
import {
    Button,
    Col,
    Container,
    Form,
    Image,
    OverlayTrigger,
    Row,
    Tooltip,
} from 'react-bootstrap';
import { findUserAuth } from '../../actions/userAction';
const AuthEmail = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState(null);

    const dispatch = useDispatch();

    const userEmailAuth = useSelector((state) => state.userEmailAuth);
    const { loading, error, user } = userEmailAuth;

    useEffect(() => {
        if (user) {
            history.push('/recover-v1');
        }
    }, [history, user]);

    const submitHandler = (e) => {
        e.preventDefault();
        if (email.length === 0) {
            setMessage('Please fill in required fields');
        } else {
            dispatch(findUserAuth(email));
        }
    };
    return (
        <div>
            <Container className='login-form'>
                <Row className='row-login'>
                    <Col sm={5} className='col-1-login'>
                        <div className='d-flex flex-column login-col-1'>
                            <Image
                                src='/images/logo.png'
                                className='login-logo'
                            />
                            <span className='col-info'>
                                Enter your personal details and start journey
                                with us
                            </span>
                            <Link to='/register' className='button-style'>
                                <span className='col-button'>Register</span>
                            </Link>
                        </div>
                    </Col>
                    <Col sm={7} className='col-2-login pt-5'>
                        <div>
                            {message && (
                                <div className='message-box'>
                                    <Message>{message}</Message>
                                </div>
                            )}
                            {error && (
                                <div className='message-box'>
                                    <Message variant='danger'>{error}</Message>
                                </div>
                            )}
                            <Form className='form-holder'>
                                <Form.Group controlId='formBasicEmail'>
                                    <Form.Label className='form-label'>
                                        Email address
                                    </Form.Label>
                                    <OverlayTrigger
                                        key='bottom'
                                        placement='bottom'
                                        overlay={
                                            <Tooltip id={`tooltip-$'bottom'`}>
                                                This field is required.
                                            </Tooltip>
                                        }
                                    >
                                        <Form.Control
                                            type='email'
                                            placeholder='Enter email'
                                            className='form-control'
                                            value={email}
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }
                                        />
                                    </OverlayTrigger>
                                </Form.Group>

                                <Button
                                    variant='primary'
                                    type='submit'
                                    className='form-submit'
                                    onClick={submitHandler}
                                >
                                    Submit
                                </Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AuthEmail;
