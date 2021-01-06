import React, { useState, useEffect } from 'react';
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
import { useHistory, Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { authQuestion_2 } from '../../actions/userAction';
import Message from '../../components/Message';

const Authentication2 = () => {
    const history = useHistory();
    const [answer, setAnswer] = useState('');
    const [message, setMessage] = useState(null);

    const userEmailAuth = useSelector((state) => state.userEmailAuth);
    const { user } = userEmailAuth;

    const dispatch = useDispatch();

    const userAuthentication = useSelector(
        (state) => state.userAuthentication_v2
    );
    const { loading, error, authentication_v2 } = userAuthentication;

    useEffect(() => {
        if (authentication_v2) {
            history.push('/recover-v3');
        }
    }, [history, authentication_v2]);
    const handleInput = (e) => {
        e.preventDefault();
        if (answer.length === 0) {
            setMessage('Please fill in required fields');
        } else {
            dispatch(authQuestion_2(user.email, answer));
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
                    <Col sm={7} className='col-2-login pt-4'>
                        <div>
                            {' '}
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
                            {user ? (
                                <Form className='form-holder'>
                                    <Form.Group>
                                        <Form.Label className='form-label'>
                                            Security Question
                                        </Form.Label>
                                        <div className='security-question'>
                                            <h5>{user.question2}</h5>
                                        </div>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label className='form-label'>
                                            Answer
                                        </Form.Label>
                                        <OverlayTrigger
                                            key='bottom'
                                            placement='bottom'
                                            overlay={
                                                <Tooltip
                                                    id={`tooltip-$'bottom'`}
                                                >
                                                    This field is required.
                                                </Tooltip>
                                            }
                                        >
                                            <Form.Control
                                                type='text'
                                                placeholder='Enter Answer'
                                                className='form-control'
                                                value={answer}
                                                onChange={(e) =>
                                                    setAnswer(e.target.value)
                                                }
                                            />
                                        </OverlayTrigger>
                                    </Form.Group>

                                    <Button
                                        variant='primary'
                                        type='submit'
                                        className='form-submit'
                                        onClick={handleInput}
                                    >
                                        Submit
                                    </Button>
                                </Form>
                            ) : (
                                <Redirect to='/login'></Redirect>
                            )}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Authentication2;
