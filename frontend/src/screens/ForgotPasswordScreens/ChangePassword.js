import React, { useState, useEffect } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import Controls from '../../components/controls/Control';
import { useDispatch, useSelector } from 'react-redux';
import { resetPassword } from '../../actions/userActions';
import Message from '../../components/Message';
import Loader from '../../components/Loader';
const theme = {
    root: {
        width: '60%',
        position: 'absolute',
        marginTop: '2.5rem',
        marginLeft: '17rem',
    },
    field: {
        marginTop: '3.5rem',
    },
    controls: {
        marginTop: '2rem',
    },
    container: {
        marginLeft: '-.7rem',
    },
    text: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '40px',
    },
    sidePanel: {
        background: 'linear-gradient(50deg, #FF4B2B 40%, #FF416C 90%)',
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        color: 'white',
        paddingTop: '8rem',
    },
    mainPanel: {
        background: 'linear-gradient(45deg, #FFFFFF 30%, #FFFFf8 90%)',
        height: '75vh',
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
    },
    textLink: {
        color: 'black',
        fontSize: '1em',
    },
};

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
        <Form>
            {' '}
            <Container style={theme.root}>
                <Row>
                    <Col style={theme.mainPanel}>
                        <h1 style={theme.text}>Credentials</h1>
                        <Container style={{ marginLeft: '-2rem' }}>
                            {message && (
                                <Message variant='danger'>{message}</Message>
                            )}
                            {error && (
                                <Message variant='danger'>{error}</Message>
                            )}
                            {loading && <Loader />}
                        </Container>
                        <Container style={theme.field}>
                            <Controls.Input
                                label='Password'
                                name='password'
                                type='password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <Controls.Input
                                label='Confirm Password'
                                name='password'
                                type='password'
                                value={confirmPassword}
                                onChange={(e) =>
                                    setConfirmPassword(e.target.value)
                                }
                            />
                            <Controls.Button
                                type='submit'
                                text='Submit'
                                onClick={handleInput}
                            />
                        </Container>
                    </Col>
                    <Col style={theme.sidePanel}>
                        <h1
                            style={{
                                fontSize: '3rem',
                                textAlign: 'center',
                                fontWeight: 1000,
                                color: 'white',
                            }}
                        >
                            ScrumBug Cinema
                        </h1>
                        <p
                            style={{
                                fontSize: '.9rem',
                                textAlign: 'center',
                                fontWeight: 1000,
                            }}
                        >
                            Enter your personal details and start journey with
                            us
                        </p>
                        <Link to={'/register/form'}>
                            <Button
                                variant='outline-info'
                                style={{
                                    fontSize: '1em',
                                    color: 'white',
                                    width: '10vw',
                                    borderRadius: 300,
                                    marginLeft: '9em',
                                }}
                            >
                                Sign Up
                            </Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </Form>
    );
};

export default ChangePassword;
