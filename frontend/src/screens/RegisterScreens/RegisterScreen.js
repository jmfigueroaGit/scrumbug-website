import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../../components/Message';
import Loader from '../../components/Loader';
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
import { registerAuth } from '../../actions/userAction';
const RegisterScreen = () => {
    const history = useHistory();
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState(null);

    const userRegister = useSelector((state) => state.userRegister);
    const { loading, error, userInfo } = userRegister;

    const dispatch = useDispatch();

    useEffect(() => {
        if (userInfo) {
            history.push('/register-v1');
        }
    }, [history, userInfo]);

    const handleInput = (e) => {
        e.preventDefault();
        if (
            email.length === 0 ||
            fullName.length === 0 ||
            password.length === 0 ||
            confirmPassword.length === 0
        ) {
            setMessage('Please fill in required fields');
        } else {
            if (password === confirmPassword)
                dispatch(registerAuth(fullName, email, password));
            else setMessage('Password mismatch');
        }
    };

    return (
        <div>
            {loading && <Loader>Loading</Loader>}
            <Container className='login-form'>
                <Row className='row-login'>
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
                            <Form className='form-holder-register'>
                                <Form.Group controlId='formBasicEmail'>
                                    <Form.Label className='form-label'>
                                        Full Name
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
                                            type='text'
                                            placeholder='Enter Full Name'
                                            className='form-control'
                                            value={fullName}
                                            onChange={(e) =>
                                                setFullName(e.target.value)
                                            }
                                        />
                                    </OverlayTrigger>
                                </Form.Group>

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
                                <Form.Group controlId='formBasicPassword'>
                                    <Form.Label className='form-label'>
                                        Confirm Password
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
                                            placeholder='Confirm password'
                                            className='form-control'
                                            value={confirmPassword}
                                            onChange={(e) =>
                                                setConfirmPassword(
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </OverlayTrigger>
                                </Form.Group>

                                <Button
                                    variant='primary'
                                    type='submit'
                                    className='form-submit form-next'
                                    onClick={handleInput}
                                >
                                    Next
                                </Button>
                            </Form>
                        </div>
                    </Col>{' '}
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
                            <Link to='/login' className='button-style'>
                                <span className='col-button'>Login</span>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default RegisterScreen;
