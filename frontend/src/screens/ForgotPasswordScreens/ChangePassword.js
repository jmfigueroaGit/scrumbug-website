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
import { Link, useHistory, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { resetPassword } from '../../actions/userAction';
import Message from '../../components/Message';

export const ChangePassword = (props) => {
    const history = useHistory();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState(null);

    const dispatch = useDispatch();

    const userEmailAuth = useSelector((state) => state.userEmailAuth);
    const { user } = userEmailAuth;

    const userUpdatePassword = useSelector((state) => state.userUpdatePassword);
    const { loading, error, userUpdate } = userUpdatePassword;

    useEffect(() => {
        if (userUpdate) {
            history.push('/login');
        }
    }, [history, userUpdate]);
    const handleInput = (e) => {
        e.preventDefault();
        if (password.length === 0 || confirmPassword.length === 0) {
            setMessage('Please fill in required fields');
        } else {
            if (password === confirmPassword) {
                dispatch(resetPassword(user.email, password));
            } else setMessage('Please fill in required fields');
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
                            {user ? (
                                <Form className='form-holder'>
                                    <Form.Group>
                                        <Form.Label className='form-label'>
                                            Password
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
                                    <Form.Group>
                                        <Form.Label className='form-label'>
                                            Confirm Password
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

export default ChangePassword;
