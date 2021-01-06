import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/userAction';
import Message from '../components/Message';
import Loader from '../components/Loader';
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

const LoginScreen = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState(null);

    const dispatch = useDispatch();

    const userLogin = useSelector((state) => state.userLogin);
    const { loading, error, userInfo } = userLogin;

    useEffect(() => {
        if (userInfo) {
            if (userInfo.isAdmin) {
                history.push('/admin');
            } else {
                history.push('/home');
            }
        }
    }, [history, userInfo]);

    const submitHandler = (e) => {
        e.preventDefault();
        if (email.length === 0 || password.length === 0) {
            setMessage('Please fill in required fields');
        } else {
            dispatch(login(email, password));
        }
    };

    return (
        <div>
            {loading && <Loader>Loading</Loader>}
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
                    <Col sm={7} className='col-2-login'>
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

                                <Form.Group controlId='formBasicPassword'>
                                    <Form.Label className='form-label'>
                                        Password
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
                                            type='password'
                                            placeholder='Enter password'
                                            className='form-control'
                                            value={password}
                                            onChange={(e) =>
                                                setPassword(e.target.value)
                                            }
                                        />
                                    </OverlayTrigger>
                                </Form.Group>
                                <Form.Group controlId='formBasicCheckbox'>
                                    <Form.Text>
                                        <Link
                                            className='form-label forgot-password'
                                            to={'/recover'}
                                        >
                                            Forget Password?
                                        </Link>
                                    </Form.Text>
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

export default LoginScreen;
