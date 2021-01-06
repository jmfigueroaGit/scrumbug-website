import React, { useEffect, useState } from 'react';
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
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { securityQuestion2 } from '../../actions/userAction';
import Controls from '../../components/controls/Control';
import Message from '../../components/Message';
import Loader from '../../components/Loader';

export const getQuestionCollection = () => [
    { id: '1', title: 'Where did you go to high school/college?' },
    { id: '2', title: 'What is your favorite food?' },
    { id: '3', title: 'What city were you born in?' },
    { id: '4', title: 'Where is your favorite place to vacation?' },
    { id: '5', title: 'Where did you meet your Best Friend?' },
];

export const SecurityQuestion2 = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [message, setMessage] = useState(null);

    const userRegister = useSelector((state) => state.userRegister);
    const {  userInfo } = userRegister;

    const userAuthentication = useSelector(
        (state) => state.userAuthentication_v1
    );
    const { authentication_v1 } = userAuthentication;

    const userAuthentication2 = useSelector(
        (state) => state.userAuthentication_v2
    );
    const { loading, error,authentication_v2 } = userAuthentication2;

    useEffect(() => {
        if (authentication_v2) {
            history.push('/register-v3');
        }
    }, [history, authentication_v2]);

    const submitHandler = (e) => {
        e.preventDefault();
        if (question.length === 0 || answer.length === 0) {
            setMessage('Please fill in required fields');
        } else
            dispatch(
                securityQuestion2(
                    userInfo.fullName,
                    userInfo.email,
                    userInfo.password,
                    authentication_v1.question1,
                    authentication_v1.answer1,
                    question,
                    answer
                )
            );
    };

    return (
        <div>
            {userInfo ? (
                <div>
                    {' '}
                    {loading && <Loader>Loading</Loader>}
                    <Container className='login-form'>
                        <Row className='row-login'>
                            <Col sm={7} className='col-2-login'>
                                <Row className='stage-bar'>
                                    <Col>
                                        <span className='stage-round1'>1</span>
                                    </Col>
                                    <Col>
                                        <span className='stage-current stage-round'>
                                            2
                                        </span>
                                    </Col>
                                    <Col>
                                        <span className='stage-round'>3</span>
                                    </Col>
                                </Row>
                                <div>
                                    {message && (
                                        <div className='message-box'>
                                            <Message>{message}</Message>
                                        </div>
                                    )}
                                    {error && (
                                        <div className='message-box'>
                                            <Message variant='danger'>
                                                {error}
                                            </Message>
                                        </div>
                                    )}
                                    <Form className='form-holder-question'>
                                        <Form.Group controlId='formBasicEmail'>
                                            <Form.Label className='form-label'>
                                                Security Question
                                            </Form.Label>
                                            <Controls.Select
                                                name='question'
                                                label='Choose Questions'
                                                options={getQuestionCollection()}
                                                value={question}
                                                onChange={(e) =>
                                                    setQuestion(e.target.value)
                                                }
                                            />
                                        </Form.Group>

                                        <Form.Group controlId='formBasicEmail'>
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
                                                        setAnswer(
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
                                            onClick={submitHandler}
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
                                        Enter your personal details and start
                                        journey with us
                                    </span>
                                    <Link to='/login' className='button-style'>
                                        <span className='col-button'>
                                            Login
                                        </span>
                                    </Link>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            ) : (
                <Redirect to='/login'></Redirect>
            )}
        </div>
    );
};

export default SecurityQuestion2;
